create extension if not exists pgcrypto;

create table public.funding_leads (
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
create policy "allow anon insert funding leads"
on public.funding_leads
for insert
to anon
with check (true);

drop policy if exists "allow anon read funding leads" on public.funding_leads;
create policy "allow anon read funding leads"
on public.funding_leads
for select
to anon
using (true);
