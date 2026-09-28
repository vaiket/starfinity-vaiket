import { readFile } from "node:fs/promises";
import nextEnv from "@next/env";
import pg from "pg";
import { normalizeDatabaseUrl } from "./database-config.mjs";

nextEnv.loadEnvConfig(process.cwd());

async function main() {
  const connectionString = normalizeDatabaseUrl(process.env.DATABASE_URL);
  const url = new URL(connectionString);
  // Never let connection-string SSL options override certificate verification.
  for (const option of ["sslmode", "sslcert", "sslkey", "sslrootcert"]) url.searchParams.delete(option);
  let ca;
  if (process.env.DATABASE_SSL_CA_FILE) {
    ca = await readFile(process.env.DATABASE_SSL_CA_FILE, "utf8");
  } else {
    const response = await fetch(
      "https://supabase-downloads.s3-ap-southeast-1.amazonaws.com/prod/ssl/prod-ca-2021.crt",
      { signal: AbortSignal.timeout(15000) },
    );
    if (!response.ok) throw new Error("Unable to download the Supabase database CA certificate.");
    ca = await response.text();
  }
  const client = new pg.Client({
    connectionString: url.toString(),
    ssl: { ca, rejectUnauthorized: true },
    connectionTimeoutMillis: 10000,
    query_timeout: 30000,
    application_name: "eazygrow-table-setup",
  });
  try {
    await client.connect();
    await client.query("BEGIN");
    const sql = await readFile(new URL("../supabase/funding_leads_dashboard_setup.sql", import.meta.url), "utf8");
    await client.query(sql);
    await client.query("COMMIT");
    const result = await client.query(
      "select to_regclass('public.funding_leads') is not null as table_exists, relrowsecurity as rls_enabled from pg_class where oid = 'public.funding_leads'::regclass",
    );
    if (!result.rows[0]?.table_exists || !result.rows[0]?.rls_enabled) throw new Error("Database verification failed.");
    console.log("funding_leads table verified; RLS enabled; server-only access configured.");
  } catch (error) {
    await client.query("ROLLBACK").catch(() => {});
    if (error?.code === "28P01") {
      throw new Error("Database password rejected (28P01). Update DATABASE_URL with the current password from Supabase Dashboard.");
    }
    // Do not print driver errors which may contain a connection string or credentials.
    throw new Error(`Database setup failed${error?.code ? ` (${error.code})` : ""}. Check DATABASE_URL, network access and database permissions.`);
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
