create extension if not exists pgcrypto;

-- Prefer funding_leads_dashboard_setup.sql or npm run db:setup for full setup.
create table if not exists public.funding_leads (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone null default now(),
  business_name text null,
  name text null,
  mobile text null,
  email text null,
  required_funding text null,
  funding_type text null,
  status text null default 'new'::text,
  constraint funding_leads_pkey primary key (id)
) TABLESPACE pg_default;

alter table public.funding_leads enable row level security;

drop policy if exists "allow anon insert funding leads" on public.funding_leads;

drop policy if exists "allow anon read funding leads" on public.funding_leads;

revoke all on public.funding_leads from public, anon, authenticated;
grant usage on schema public to service_role;
grant select, insert, update, delete on public.funding_leads to service_role;
notify pgrst, 'reload schema';
