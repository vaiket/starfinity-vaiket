export function normalizeDatabaseUrl(value) {
  const invalid = () => new Error("Set a valid PostgreSQL DATABASE_URL in your local .env file.");
  if (typeof value !== "string" || !value.trim()) throw invalid();
  const match = value.trim().match(/^(postgres(?:ql)?:\/\/)([^:]+):(.+)@([^/]+)\/(.+)$/);
  if (!match) throw invalid();
  try {
    const [, scheme, username, password, host, database] = match;
    const normalized = `${scheme}${username}:${encodeURIComponent(decodeURIComponent(password))}@${host}/${database}`;
    const parsed = new URL(normalized);
    if (!parsed.hostname || parsed.pathname === "/") throw invalid();
    return normalized;
  } catch {
    throw invalid();
  }
}
