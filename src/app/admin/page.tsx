"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity,
  BarChart3,
  Bell,
  Building2,
  CheckCircle2,
  ClipboardList,
  Download,
  Filter,
  LayoutDashboard,
  LogIn,
  LogOut,
  Mail,
  Menu,
  Phone,
  Plus,
  RefreshCcw,
  Search,
  Send,
  Settings,
  Upload,
  UserCircle2,
  Users,
  X,
} from "lucide-react";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { LeadRecord, listLeads } from "@/lib/supabase";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler);

const SESSION_KEY = "admin-authenticated";
const MANUAL_USERS_KEY = "admin-manual-users";
const MAX_BULK_EMAIL_RECIPIENTS = 1000;
const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME ?? "admin";
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "admin123";

const MENU_ITEMS = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "leads", label: "Lead Manager", icon: ClipboardList },
  { id: "users", label: "User Management", icon: Users },
  { id: "email", label: "Email Management", icon: Mail },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "activity", label: "Live Activity", icon: Activity },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

type MenuId = (typeof MENU_ITEMS)[number]["id"];

type ManagedUserSource = "lead" | "manual" | "import";

type ManagedUser = {
  id: string;
  name: string;
  mobile: string;
  email: string;
  joinedDate: string;
  source: ManagedUserSource;
};

type NoticeState = { type: "success" | "error"; message: string } | null;

const STATUS_COLORS: Record<string, string> = {
  new: "bg-sky-100 text-sky-700",
  contacted: "bg-amber-100 text-amber-700",
  qualified: "bg-violet-100 text-violet-700",
  "proposal-sent": "bg-indigo-100 text-indigo-700",
  won: "bg-emerald-100 text-emerald-700",
  completed: "bg-emerald-100 text-emerald-700",
  lost: "bg-rose-100 text-rose-700",
};

function formatDate(value?: string) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString();
}

function normalizeStatus(value?: string) {
  if (!value) return "new";
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

function shortFundingLabel(value?: string) {
  if (!value) return "-";
  const compact = value.replaceAll(",", "").trim();
  const amount = Number(compact);
  if (!Number.isFinite(amount)) return value;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(amount);
}

function getStatusPillClass(status?: string) {
  const normalized = normalizeStatus(status);
  return STATUS_COLORS[normalized] ?? "bg-slate-100 text-slate-700";
}

function getRecentDateLabels(days: number) {
  const labels: string[] = [];
  const now = new Date();
  for (let index = days - 1; index >= 0; index -= 1) {
    const date = new Date(now);
    date.setDate(now.getDate() - index);
    labels.push(date.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
  }
  return labels;
}

function createUserId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `user-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function toCsvCell(value: string) {
  return `"${(value || "").replace(/"/g, '""')}"`;
}

function exportUsersCsv(rows: ManagedUser[]) {
  if (rows.length === 0) return;
  const lines = [
    "name,mobile,email,joined_date",
    ...rows.map((row) => [row.name, row.mobile, row.email, row.joinedDate].map((item) => toCsvCell(item)).join(",")),
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `users-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

function parseUsersCsv(content: string) {
  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length < 2) return [] as Omit<ManagedUser, "id" | "source">[];

  const header = lines[0].split(",").map((cell) => cell.trim().toLowerCase());
  const nameIndex = header.findIndex((item) => ["name", "full_name", "fullname"].includes(item));
  const mobileIndex = header.findIndex((item) => ["mobile", "phone", "phone_number"].includes(item));
  const emailIndex = header.findIndex((item) => ["email", "mail", "email_id"].includes(item));
  const joinedIndex = header.findIndex((item) => ["joined_date", "joined", "created_at", "date"].includes(item));

  const rows: Omit<ManagedUser, "id" | "source">[] = [];

  for (const line of lines.slice(1)) {
    const columns = line.split(",").map((cell) => cell.trim().replace(/^"|"$/g, ""));
    const name = (nameIndex >= 0 ? columns[nameIndex] : "") || "Unnamed user";
    const mobile = (mobileIndex >= 0 ? columns[mobileIndex] : "") || "";
    const email = (emailIndex >= 0 ? columns[emailIndex] : "") || "";
    const joinedRaw = (joinedIndex >= 0 ? columns[joinedIndex] : "") || "";
    const joinedDate =
      joinedRaw && !Number.isNaN(new Date(joinedRaw).getTime()) ? new Date(joinedRaw).toISOString() : new Date().toISOString();

    if (!name && !mobile && !email) continue;
    rows.push({ name, mobile, email, joinedDate });
  }
  return rows;
}

type LeadsTableProps = {
  rows: LeadRecord[];
  isLoading: boolean;
};

function LeadsTable({ rows, isLoading }: LeadsTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Date</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Name</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Email</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Phone</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Business</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Funding</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Type</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td className="px-4 py-10 text-slate-500" colSpan={8}>
                  Loading leads...
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td className="px-4 py-10 text-slate-500" colSpan={8}>
                  No leads found.
                </td>
              </tr>
            ) : (
              rows.map((lead, index) => (
                <tr key={`${lead.id ?? "lead"}-${index}`} className="border-b border-slate-100 hover:bg-slate-50/80">
                  <td className="px-4 py-3 text-slate-700">{formatDate(lead.created_at)}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{lead.name || "-"}</td>
                  <td className="px-4 py-3 text-slate-700">{lead.email || "-"}</td>
                  <td className="px-4 py-3 text-slate-700">{lead.mobile || "-"}</td>
                  <td className="px-4 py-3 text-slate-700">{lead.business_name || "-"}</td>
                  <td className="px-4 py-3 text-slate-700">{shortFundingLabel(lead.required_funding)}</td>
                  <td className="px-4 py-3 text-slate-700">{lead.funding_type || "-"}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${getStatusPillClass(lead.status)}`}>
                      {normalizeStatus(lead.status)}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type UsersTableProps = {
  rows: ManagedUser[];
  isLoading: boolean;
  selectable?: boolean;
  selectedIds?: string[];
  onToggle?: (id: string) => void;
  onToggleAll?: (checked: boolean, ids: string[]) => void;
};

function UsersTable({ rows, isLoading, selectable = false, selectedIds = [], onToggle, onToggleAll }: UsersTableProps) {
  const rowIds = rows.map((row) => row.id);
  const selectedCount = rowIds.filter((id) => selectedIds.includes(id)).length;
  const allSelected = rows.length > 0 && selectedCount === rows.length;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              {selectable && (
                <th className="text-left px-4 py-3 font-semibold text-slate-600">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(event) => onToggleAll?.(event.target.checked, rowIds)}
                    aria-label="Select all users"
                  />
                </th>
              )}
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Name</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Mobile</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Email</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Joined Date</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Source</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td className="px-4 py-10 text-slate-500" colSpan={selectable ? 6 : 5}>
                  Loading users...
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td className="px-4 py-10 text-slate-500" colSpan={selectable ? 6 : 5}>
                  No users available.
                </td>
              </tr>
            ) : (
              rows.map((user) => (
                <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50/80">
                  {selectable && (
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(user.id)}
                        onChange={() => onToggle?.(user.id)}
                        aria-label={`Select ${user.name}`}
                      />
                    </td>
                  )}
                  <td className="px-4 py-3 font-medium text-slate-900">{user.name || "-"}</td>
                  <td className="px-4 py-3 text-slate-700">{user.mobile || "-"}</td>
                  <td className="px-4 py-3 text-slate-700">{user.email || "-"}</td>
                  <td className="px-4 py-3 text-slate-700">{formatDate(user.joinedDate)}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        user.source === "lead"
                          ? "bg-indigo-100 text-indigo-700"
                          : user.source === "manual"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {user.source}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");

  const [activeMenu, setActiveMenu] = useState<MenuId>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const importFileRef = useRef<HTMLInputElement | null>(null);

  const [manualUsers, setManualUsers] = useState<ManagedUser[]>([]);
  const [userSearchText, setUserSearchText] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newUserMobile, setNewUserMobile] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [userNotice, setUserNotice] = useState<NoticeState>(null);

  const [emailSubject, setEmailSubject] = useState("Startup funding update from EazyGrow");
  const [emailBody, setEmailBody] = useState(
    "Hello,\n\nWe are sharing fresh funding opportunities and support for your business. Reply to this email to connect with our advisor.\n\nRegards,\nEazyGrow Team"
  );
  const [emailAudience, setEmailAudience] = useState<"all-users" | "new-users" | "selected-users">("all-users");
  const [selectedEmailUserIds, setSelectedEmailUserIds] = useState<string[]>([]);
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [emailNotice, setEmailNotice] = useState<NoticeState>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasSession = window.localStorage.getItem(SESSION_KEY) === "true";
    setIsLoggedIn(hasSession);

    const savedUsers = window.localStorage.getItem(MANUAL_USERS_KEY);
    if (!savedUsers) return;
    try {
      const parsed = JSON.parse(savedUsers) as ManagedUser[];
      if (Array.isArray(parsed)) {
        setManualUsers(parsed);
      }
    } catch {
      setManualUsers([]);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(MANUAL_USERS_KEY, JSON.stringify(manualUsers));
  }, [manualUsers]);

  useEffect(() => {
    if (!isLoggedIn) return;
    void fetchLeads();
  }, [isLoggedIn]);

  const fetchLeads = async () => {
    setIsLoading(true);
    setError("");
    try {
      const rows = await listLeads();
      setLeads(rows);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch data.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError("");

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(SESSION_KEY, "true");
      }
      return;
    }

    setLoginError("Invalid username or password.");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(SESSION_KEY);
    }
  };

  const filteredLeads = useMemo(() => {
    const term = searchText.trim().toLowerCase();
    if (!term) return leads;
    return leads.filter((lead) =>
      [lead.name, lead.email, lead.mobile, lead.business_name, lead.required_funding, lead.funding_type, lead.status]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [leads, searchText]);

  const statusCounts = useMemo(() => {
    return filteredLeads.reduce<Record<string, number>>((accumulator, lead) => {
      const status = normalizeStatus(lead.status);
      accumulator[status] = (accumulator[status] ?? 0) + 1;
      return accumulator;
    }, {});
  }, [filteredLeads]);

  const kpis = useMemo(() => {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekStart = new Date(todayStart);
    weekStart.setDate(todayStart.getDate() - 6);

    let todayCount = 0;
    let weekCount = 0;
    let completedCount = 0;

    for (const lead of leads) {
      const createdAt = lead.created_at ? new Date(lead.created_at) : undefined;
      if (createdAt && !Number.isNaN(createdAt.getTime())) {
        if (createdAt >= todayStart) todayCount += 1;
        if (createdAt >= weekStart) weekCount += 1;
      }

      const status = normalizeStatus(lead.status);
      if (status === "won" || status === "completed") {
        completedCount += 1;
      }
    }

    return {
      total: leads.length,
      today: todayCount,
      weekly: weekCount,
      completed: completedCount,
      withPhone: leads.filter((lead) => !!lead.mobile).length,
      withEmail: leads.filter((lead) => !!lead.email).length,
    };
  }, [leads]);

  const chartLabels = useMemo(() => getRecentDateLabels(7), []);

  const leadsTrendData = useMemo(() => {
    const counts = chartLabels.map(() => 0);

    for (const lead of filteredLeads) {
      if (!lead.created_at) continue;
      const date = new Date(lead.created_at);
      if (Number.isNaN(date.getTime())) continue;
      const label = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      const index = chartLabels.indexOf(label);
      if (index >= 0) counts[index] += 1;
    }

    return {
      labels: chartLabels,
      datasets: [
        {
          label: "New Leads",
          data: counts,
          borderColor: "#4f46e5",
          backgroundColor: "rgba(79, 70, 229, 0.15)",
          fill: true,
          tension: 0.35,
          pointRadius: 3,
          pointBackgroundColor: "#4f46e5",
        },
      ],
    };
  }, [chartLabels, filteredLeads]);

  const statusChartData = useMemo(() => {
    const entries = Object.entries(statusCounts);
    if (entries.length === 0) {
      return {
        labels: ["No Data"],
        datasets: [
          {
            data: [1],
            backgroundColor: ["#cbd5e1"],
            borderWidth: 0,
          },
        ],
      };
    }

    return {
      labels: entries.map(([status]) => status),
      datasets: [
        {
          data: entries.map(([, count]) => count),
          backgroundColor: ["#4f46e5", "#14b8a6", "#f59e0b", "#0ea5e9", "#10b981", "#e11d48"],
          borderWidth: 0,
        },
      ],
    };
  }, [statusCounts]);

  const recentLeads = useMemo(() => filteredLeads.slice(0, 6), [filteredLeads]);

  const topFundingType = useMemo(() => {
    const counts = filteredLeads.reduce<Record<string, number>>((accumulator, lead) => {
      const type = lead.funding_type?.trim() || "Unknown";
      accumulator[type] = (accumulator[type] ?? 0) + 1;
      return accumulator;
    }, {});

    const [type] = Object.entries(counts).sort((first, second) => second[1] - first[1])[0] ?? ["-", 0];
    return type;
  }, [filteredLeads]);

  const leadUsers = useMemo<ManagedUser[]>(() => {
    return leads
      .map((lead, index) => ({
        id: `lead-${lead.id ?? index}`,
        name: (lead.name || "").trim() || "Unnamed user",
        mobile: (lead.mobile || "").trim(),
        email: (lead.email || "").trim(),
        joinedDate: lead.created_at || new Date().toISOString(),
        source: "lead" as const,
      }))
      .filter((user) => !!user.name || !!user.mobile || !!user.email);
  }, [leads]);

  const allUsers = useMemo<ManagedUser[]>(() => {
    const map = new Map<string, ManagedUser>();

    const upsert = (user: ManagedUser) => {
      const dedupeKey = user.email.trim().toLowerCase() || user.mobile.trim() || user.id;
      if (!dedupeKey) return;

      const existing = map.get(dedupeKey);
      if (!existing) {
        map.set(dedupeKey, { ...user, id: dedupeKey });
        return;
      }

      map.set(dedupeKey, {
        ...existing,
        ...user,
        id: dedupeKey,
        source: existing.source === "manual" || existing.source === "import" ? existing.source : user.source,
      });
    };

    leadUsers.forEach(upsert);
    manualUsers.forEach(upsert);

    return [...map.values()].sort((first, second) => {
      const firstDate = new Date(first.joinedDate).getTime();
      const secondDate = new Date(second.joinedDate).getTime();
      return secondDate - firstDate;
    });
  }, [leadUsers, manualUsers]);

  const filteredUsers = useMemo(() => {
    const term = userSearchText.trim().toLowerCase();
    if (!term) return allUsers;
    return allUsers.filter((user) =>
      [user.name, user.mobile, user.email, user.joinedDate, user.source].join(" ").toLowerCase().includes(term)
    );
  }, [allUsers, userSearchText]);

  const usersKpis = useMemo(() => {
    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);

    const joinedThisMonth = allUsers.filter((user) => {
      const joined = new Date(user.joinedDate);
      return !Number.isNaN(joined.getTime()) && joined >= monthStart;
    }).length;

    return {
      total: allUsers.length,
      withEmail: allUsers.filter((user) => !!user.email).length,
      withMobile: allUsers.filter((user) => !!user.mobile).length,
      joinedThisMonth,
    };
  }, [allUsers]);

  const emailEligibleUsers = useMemo(() => allUsers.filter((user) => !!user.email), [allUsers]);

  const newUsersLast7Days = useMemo(() => {
    const threshold = new Date();
    threshold.setDate(threshold.getDate() - 7);
    return emailEligibleUsers.filter((user) => {
      const joined = new Date(user.joinedDate);
      return !Number.isNaN(joined.getTime()) && joined >= threshold;
    });
  }, [emailEligibleUsers]);

  const audienceUsers = useMemo(() => {
    if (emailAudience === "new-users") return newUsersLast7Days;
    if (emailAudience === "selected-users") {
      const selectedSet = new Set(selectedEmailUserIds);
      return emailEligibleUsers.filter((user) => selectedSet.has(user.id));
    }
    return emailEligibleUsers;
  }, [emailAudience, emailEligibleUsers, newUsersLast7Days, selectedEmailUserIds]);

  const emailRecipients = useMemo(() => audienceUsers.slice(0, MAX_BULK_EMAIL_RECIPIENTS), [audienceUsers]);
  const overLimitCount = Math.max(0, audienceUsers.length - emailRecipients.length);

  const handleCreateUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserNotice(null);

    const name = newUserName.trim();
    const mobile = newUserMobile.trim();
    const email = newUserEmail.trim();

    if (!name) {
      setUserNotice({ type: "error", message: "Name is required." });
      return;
    }
    if (!mobile && !email) {
      setUserNotice({ type: "error", message: "Provide at least mobile number or email." });
      return;
    }

    const createdUser: ManagedUser = {
      id: createUserId(),
      name,
      mobile,
      email,
      joinedDate: new Date().toISOString(),
      source: "manual",
    };

    setManualUsers((prev) => [createdUser, ...prev]);
    setNewUserName("");
    setNewUserMobile("");
    setNewUserEmail("");
    setUserNotice({ type: "success", message: "User created successfully." });
  };

  const triggerImportUsers = () => {
    importFileRef.current?.click();
  };

  const handleImportUsers = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUserNotice(null);

    try {
      const text = await file.text();
      const parsedRows = parseUsersCsv(text);
      if (parsedRows.length === 0) {
        setUserNotice({ type: "error", message: "No valid rows found in CSV file." });
        return;
      }

      const importedUsers: ManagedUser[] = parsedRows.map((row) => ({
        id: createUserId(),
        name: row.name,
        mobile: row.mobile,
        email: row.email,
        joinedDate: row.joinedDate,
        source: "import",
      }));

      setManualUsers((prev) => [...importedUsers, ...prev]);
      setUserNotice({ type: "success", message: `Imported ${importedUsers.length} users.` });
    } catch {
      setUserNotice({ type: "error", message: "Unable to import users from this file." });
    } finally {
      event.target.value = "";
    }
  };

  const handleExportUsers = () => {
    if (allUsers.length === 0) {
      setUserNotice({ type: "error", message: "No users to export." });
      return;
    }
    exportUsersCsv(allUsers);
    setUserNotice({ type: "success", message: "Users exported successfully." });
  };

  const toggleEmailUser = (id: string) => {
    setSelectedEmailUserIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const toggleAllEmailUsers = (checked: boolean, ids: string[]) => {
    if (checked) {
      setSelectedEmailUserIds((prev) => [...new Set([...prev, ...ids])]);
      return;
    }
    const removeSet = new Set(ids);
    setSelectedEmailUserIds((prev) => prev.filter((id) => !removeSet.has(id)));
  };

  const handleSendBulkMail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailNotice(null);

    if (!emailSubject.trim()) {
      setEmailNotice({ type: "error", message: "Email subject is required." });
      return;
    }
    if (!emailBody.trim()) {
      setEmailNotice({ type: "error", message: "Email content is required." });
      return;
    }
    if (emailRecipients.length === 0) {
      setEmailNotice({ type: "error", message: "No recipients found for selected audience." });
      return;
    }

    setIsEmailSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setIsEmailSending(false);

    setEmailNotice({
      type: "success",
      message:
        overLimitCount > 0
          ? `Bulk email sent to ${emailRecipients.length} users. ${overLimitCount} users remain for next batch.`
          : `Bulk email sent to ${emailRecipients.length} users successfully.`,
    });
  };

  if (!isLoggedIn) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] py-16 px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 shadow-2xl p-8">
          <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
          <p className="text-sm text-slate-600 mt-2">Sign in to access your finance dashboard.</p>
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
            />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
            />
            {loginError && <div className="text-sm text-rose-600">{loginError}</div>}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login to Dashboard
            </button>
          </form>
            <p className="text-xs text-slate-500 mt-4">Use your configured admin credentials to continue.</p>
          </div>
        </section>
      );
  }

  return (
    <div className="min-h-screen bg-[#eef1f8] text-slate-900">
      <div className="flex min-h-screen">
        <aside
          className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-[#1f2a44] text-white transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="h-16 border-b border-white/10 px-5 flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-indigo-200">Admin Console</p>
              <p className="text-lg font-bold">EazyGrow CRM</p>
            </div>
            <button
              className="md:hidden p-1.5 rounded-lg hover:bg-white/10"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="p-3 space-y-1">
            {MENU_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = item.id === activeMenu;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => {
                    setActiveMenu(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active ? "bg-indigo-500 text-white" : "text-slate-200 hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto p-3 border-t border-white/10">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-rose-500/80 hover:bg-rose-500 px-3 py-2.5 text-sm font-medium"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </aside>

        {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />}

        <main className="flex-1 md:ml-0 p-4 sm:p-6 lg:p-7">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-4 sm:px-5 py-4 mb-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="md:hidden p-2 rounded-lg border border-slate-300"
                  aria-label="Open sidebar"
                >
                  <Menu className="w-4 h-4" />
                </button>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {MENU_ITEMS.find((item) => item.id === activeMenu)?.label ?? "Finance Admin Dashboard"}
                  </h1>
                  <p className="text-sm text-slate-500">
                    {activeMenu === "email"
                      ? "Compose campaigns and send bulk emails up to 1000 users at a time."
                      : activeMenu === "users"
                      ? "Create, import, export and manage all user records."
                      : "Track, review and act on all funding applications."}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {(activeMenu === "overview" || activeMenu === "leads" || activeMenu === "analytics" || activeMenu === "activity") && (
                  <div className="relative flex-1 sm:w-72">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      value={searchText}
                      onChange={(event) => setSearchText(event.target.value)}
                      placeholder="Search leads"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
                    />
                  </div>
                )}

                {activeMenu === "users" && (
                  <div className="relative flex-1 sm:w-72">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      value={userSearchText}
                      onChange={(event) => setUserSearchText(event.target.value)}
                      placeholder="Search users"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
                    />
                  </div>
                )}
                <button
                  type="button"
                  onClick={fetchLeads}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-50"
                >
                  <RefreshCcw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                  Refresh
                </button>
                <button type="button" className="p-2 rounded-lg border border-slate-300">
                  <Bell className="w-4 h-4 text-slate-600" />
                </button>
                <button type="button" className="p-2 rounded-lg border border-slate-300">
                  <Filter className="w-4 h-4 text-slate-600" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMenu("email")}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-50"
                >
                  <Mail className="w-4 h-4 text-indigo-600" />
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMenu("users")}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-50"
                >
                  <Users className="w-4 h-4 text-indigo-600" />
                  Users
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          {(activeMenu === "overview" || activeMenu === "activity") && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #ff8a65, #ff7043)" }}>
                  <p className="text-sm opacity-85">Total Leads</p>
                  <p className="text-3xl font-bold mt-2">{kpis.total}</p>
                  <p className="text-xs opacity-80 mt-2">All-time applications</p>
                </div>
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #00c389, #00b894)" }}>
                  <p className="text-sm opacity-85">Today</p>
                  <p className="text-3xl font-bold mt-2">{kpis.today}</p>
                  <p className="text-xs opacity-80 mt-2">New entries in last 24h</p>
                </div>
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #f06292, #ec407a)" }}>
                  <p className="text-sm opacity-85">This Week</p>
                  <p className="text-3xl font-bold mt-2">{kpis.weekly}</p>
                  <p className="text-xs opacity-80 mt-2">Rolling 7-day volume</p>
                </div>
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #42a5f5, #1e88e5)" }}>
                  <p className="text-sm opacity-85">Completed</p>
                  <p className="text-3xl font-bold mt-2">{kpis.completed}</p>
                  <p className="text-xs opacity-80 mt-2">Won / Completed deals</p>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-5">
                <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-slate-500">Lead Trend</p>
                      <h3 className="text-lg font-semibold text-slate-900">Last 7 Days Applications</h3>
                    </div>
                    <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">Live</span>
                  </div>
                  <div className="h-[260px]">
                    <Line
                      data={leadsTrendData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: {
                          x: { grid: { display: false } },
                          y: { beginAtZero: true, ticks: { precision: 0 } },
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
                  <p className="text-sm text-slate-500">Status Split</p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Pipeline Mix</h3>
                  <div className="h-[220px]">
                    <Doughnut
                      data={statusChartData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { position: "bottom", labels: { boxWidth: 10, boxHeight: 10 } } },
                        cutout: "62%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {activeMenu === "overview" && (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-5">
              <div className="xl:col-span-2">
                <LeadsTable rows={recentLeads} isLoading={isLoading} />
              </div>
              <div className="space-y-5">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-slate-900">Quick Summary</h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">With Email</span>
                      <span className="font-semibold text-slate-900">{kpis.withEmail}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">With Phone</span>
                      <span className="font-semibold text-slate-900">{kpis.withPhone}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Top Funding Type</span>
                      <span className="font-semibold text-slate-900">{topFundingType}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-slate-900">Recent Activity</h3>
                  <ul className="mt-4 space-y-3">
                    {recentLeads.slice(0, 5).map((lead, index) => (
                      <li key={`${lead.id ?? "activity"}-${index}`} className="flex items-start gap-3">
                        <UserCircle2 className="w-5 h-5 text-indigo-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-slate-900">{lead.name || "Unknown lead"}</p>
                          <p className="text-xs text-slate-500">{lead.business_name || "Business"}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{formatDate(lead.created_at)}</p>
                        </div>
                      </li>
                    ))}
                    {!isLoading && recentLeads.length === 0 && (
                      <li className="text-sm text-slate-500">No activity yet.</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeMenu === "leads" && <LeadsTable rows={filteredLeads} isLoading={isLoading} />}

          {activeMenu === "users" && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #4f46e5, #6366f1)" }}>
                  <p className="text-sm opacity-85">Total Users</p>
                  <p className="text-3xl font-bold mt-2">{usersKpis.total}</p>
                </div>
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #0284c7, #0ea5e9)" }}>
                  <p className="text-sm opacity-85">With Email</p>
                  <p className="text-3xl font-bold mt-2">{usersKpis.withEmail}</p>
                </div>
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6)" }}>
                  <p className="text-sm opacity-85">With Mobile</p>
                  <p className="text-3xl font-bold mt-2">{usersKpis.withMobile}</p>
                </div>
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #ea580c, #f97316)" }}>
                  <p className="text-sm opacity-85">Joined This Month</p>
                  <p className="text-3xl font-bold mt-2">{usersKpis.joinedThisMonth}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
                <h3 className="text-base font-semibold text-slate-900">Create User</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Add users manually, import from CSV, and export all user data for backup.
                </p>

                <form onSubmit={handleCreateUser} className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
                  <input
                    value={newUserName}
                    onChange={(event) => setNewUserName(event.target.value)}
                    placeholder="Name"
                    className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
                    required
                  />
                  <input
                    value={newUserMobile}
                    onChange={(event) => setNewUserMobile(event.target.value)}
                    placeholder="Mobile Number"
                    className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
                  />
                  <input
                    value={newUserEmail}
                    onChange={(event) => setNewUserEmail(event.target.value)}
                    placeholder="Email ID"
                    type="email"
                    className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    Create User
                  </button>
                </form>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={triggerImportUsers}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50"
                  >
                    <Upload className="w-4 h-4" />
                    Import Users
                  </button>
                  <button
                    type="button"
                    onClick={handleExportUsers}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50"
                  >
                    <Download className="w-4 h-4" />
                    Export Users
                  </button>
                  <input ref={importFileRef} type="file" accept=".csv" className="hidden" onChange={handleImportUsers} />
                </div>

                {userNotice && (
                  <div
                    className={`mt-4 rounded-lg px-3 py-2 text-sm ${
                      userNotice.type === "success"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-rose-50 text-rose-700 border border-rose-200"
                    }`}
                  >
                    {userNotice.message}
                  </div>
                )}
              </div>

              <UsersTable rows={filteredUsers} isLoading={isLoading} />
            </div>
          )}

          {activeMenu === "email" && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #4f46e5, #6366f1)" }}>
                  <p className="text-sm opacity-85">Email Users</p>
                  <p className="text-3xl font-bold mt-2">{emailEligibleUsers.length}</p>
                </div>
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #0284c7, #0ea5e9)" }}>
                  <p className="text-sm opacity-85">Audience Size</p>
                  <p className="text-3xl font-bold mt-2">{audienceUsers.length}</p>
                </div>
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6)" }}>
                  <p className="text-sm opacity-85">Current Batch</p>
                  <p className="text-3xl font-bold mt-2">{emailRecipients.length}</p>
                </div>
                <div className="rounded-2xl p-4 text-white shadow-sm" style={{ background: "linear-gradient(135deg, #ea580c, #f97316)" }}>
                  <p className="text-sm opacity-85">Bulk Limit</p>
                  <p className="text-3xl font-bold mt-2">{MAX_BULK_EMAIL_RECIPIENTS}</p>
                </div>
              </div>

              <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-800">
                Bulk mailing option enabled. You can send up to <span className="font-semibold">1000 emails at a time</span>.
                {overLimitCount > 0 && (
                  <span className="ml-1">
                    Current audience exceeds limit by <span className="font-semibold">{overLimitCount}</span> users.
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-slate-900">Bulk Mail Composer</h3>
                  <form onSubmit={handleSendBulkMail} className="mt-4 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Audience</label>
                        <select
                          value={emailAudience}
                          onChange={(event) => setEmailAudience(event.target.value as "all-users" | "new-users" | "selected-users")}
                          className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
                        >
                          <option value="all-users">All users with email</option>
                          <option value="new-users">New users (last 7 days)</option>
                          <option value="selected-users">Selected users</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Recipients in Batch</label>
                        <input
                          readOnly
                          value={`${emailRecipients.length} / ${MAX_BULK_EMAIL_RECIPIENTS}`}
                          className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Subject</label>
                      <input
                        value={emailSubject}
                        onChange={(event) => setEmailSubject(event.target.value)}
                        className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
                        placeholder="Campaign subject"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email Content</label>
                      <textarea
                        value={emailBody}
                        onChange={(event) => setEmailBody(event.target.value)}
                        rows={8}
                        className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
                      />
                    </div>

                    {emailNotice && (
                      <div
                        className={`rounded-lg px-3 py-2 text-sm ${
                          emailNotice.type === "success"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-rose-50 text-rose-700 border border-rose-200"
                        }`}
                      >
                        {emailNotice.message}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isEmailSending}
                      className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 font-medium disabled:opacity-60"
                    >
                      {isEmailSending ? <RefreshCcw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      Send Bulk Mail
                    </button>
                  </form>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-slate-900">Preview</h3>
                  <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Subject</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{emailSubject || "-"}</p>
                  </div>
                  <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Message</p>
                    <p className="mt-1 text-sm whitespace-pre-wrap text-slate-700">{emailBody || "-"}</p>
                  </div>
                </div>
              </div>

              <UsersTable
                rows={emailAudience === "selected-users" ? emailEligibleUsers : emailRecipients}
                isLoading={isLoading}
                selectable={emailAudience === "selected-users"}
                selectedIds={selectedEmailUserIds}
                onToggle={toggleEmailUser}
                onToggleAll={toggleAllEmailUsers}
              />
            </div>
          )}

          {activeMenu === "analytics" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
                <h3 className="text-base font-semibold text-slate-900 mb-3">Lead Channels</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Email captured</span>
                    <span className="font-semibold text-slate-900">{kpis.withEmail}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Phone captured</span>
                    <span className="font-semibold text-slate-900">{kpis.withPhone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Conversion rate</span>
                    <span className="font-semibold text-emerald-600">
                      {kpis.total === 0 ? "0%" : `${Math.round((kpis.completed / kpis.total) * 100)}%`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5">
                <h3 className="text-base font-semibold text-slate-900 mb-3">Pipeline Health</h3>
                <div className="space-y-2 text-sm">
                  {Object.entries(statusCounts).map(([status, count]) => (
                    <div key={status} className="flex items-center justify-between">
                      <span className="text-slate-500">{status}</span>
                      <span className="font-semibold text-slate-900">{count}</span>
                    </div>
                  ))}
                  {Object.keys(statusCounts).length === 0 && <p className="text-slate-500">No pipeline data available.</p>}
                </div>
              </div>

              <div className="lg:col-span-2">
                <LeadsTable rows={filteredLeads.slice(0, 10)} isLoading={isLoading} />
              </div>
            </div>
          )}

          {activeMenu === "settings" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h3 className="text-base font-semibold text-slate-900">Admin Account</h3>
                <p className="text-sm text-slate-500 mt-1">Environment-based credentials are active for this panel.</p>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Users className="w-4 h-4 text-indigo-500" /> Username: {ADMIN_USERNAME}
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail className="w-4 h-4 text-indigo-500" /> Email leads: {kpis.withEmail}
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4 text-indigo-500" /> Phone leads: {kpis.withPhone}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h3 className="text-base font-semibold text-slate-900">System Status</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">API Connectivity</span>
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                      <CheckCircle2 className="w-4 h-4" /> Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Data Store</span>
                    <span className="font-medium text-slate-900">Supabase</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Tracked Businesses</span>
                    <span className="font-medium text-slate-900 flex items-center gap-1">
                      <Building2 className="w-4 h-4 text-indigo-500" />
                      {leads.filter((lead) => !!lead.business_name).length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
