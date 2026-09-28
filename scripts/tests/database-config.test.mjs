import assert from "node:assert/strict";
import test from "node:test";
import { normalizeDatabaseUrl } from "../database-config.mjs";

test("encodes a raw @ in the database password without changing the target", () => {
  assert.equal(
    normalizeDatabaseUrl("postgresql://postgres:example@password@db.example.com:5432/postgres"),
    "postgresql://postgres:example%40password@db.example.com:5432/postgres",
  );
});

test("does not double encode a correctly escaped password", () => {
  assert.equal(
    normalizeDatabaseUrl("postgresql://postgres:example%40password@db.example.com:5432/postgres"),
    "postgresql://postgres:example%40password@db.example.com:5432/postgres",
  );
});

test("rejects missing and non-Postgres connection strings without disclosing credentials", () => {
  for (const input of [undefined, "", "https://user:secret@example.com/database"]) {
    assert.throws(() => normalizeDatabaseUrl(input), /Set a valid PostgreSQL DATABASE_URL/);
  }
});

test("preserves IPv6 database hosts and connection options", () => {
  assert.equal(
    normalizeDatabaseUrl("postgres://postgres:password@[::1]:5432/postgres?application_name=setup"),
    "postgres://postgres:password@[::1]:5432/postgres?application_name=setup",
  );
});
