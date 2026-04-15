-- Easygrow Admin Dashboard DB setup
-- Run in Supabase SQL Editor

create extension if not exists pgcrypto;

create table if not exists public.funding_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  business_name text not null,
  name text not null,
  mobile text not null,
  email text not null,
  required_funding text not null,
  funding_type text not null,
  status text not null default 'new',
  notes text null,
  source text not null default 'website',
  priority smallint not null default 2
);

-- Safe schema updates if table already exists
alter table public.funding_leads add column if not exists updated_at timestamptz not null default now();
alter table public.funding_leads add column if not exists notes text null;
alter table public.funding_leads add column if not exists source text not null default 'website';
alter table public.funding_leads add column if not exists priority smallint not null default 2;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'funding_leads_status_check'
  ) then
    alter table public.funding_leads
      add constraint funding_leads_status_check
      check (status in ('new', 'contacted', 'qualified', 'proposal-sent', 'won', 'lost', 'completed'));
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'funding_leads_priority_check'
  ) then
    alter table public.funding_leads
      add constraint funding_leads_priority_check
      check (priority between 1 and 3);
  end if;
end $$;

create index if not exists idx_funding_leads_created_at on public.funding_leads (created_at desc);
create index if not exists idx_funding_leads_status on public.funding_leads (status);
create index if not exists idx_funding_leads_email on public.funding_leads (email);
create index if not exists idx_funding_leads_mobile on public.funding_leads (mobile);

create or replace function public.set_funding_leads_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_funding_leads_updated_at on public.funding_leads;
create trigger trg_funding_leads_updated_at
before update on public.funding_leads
for each row execute function public.set_funding_leads_updated_at();

alter table public.funding_leads enable row level security;

drop policy if exists "allow anon insert funding leads" on public.funding_leads;
create policy "allow anon insert funding leads"
on public.funding_leads
for insert
to anon
with check (true);

drop policy if exists "allow authenticated read funding leads" on public.funding_leads;
create policy "allow authenticated read funding leads"
on public.funding_leads
for select
to authenticated
using (true);

drop policy if exists "allow anon read funding leads" on public.funding_leads;
create policy "allow anon read funding leads"
on public.funding_leads
for select
to anon
using (true);

drop policy if exists "allow service role full access funding leads" on public.funding_leads;
create policy "allow service role full access funding leads"
on public.funding_leads
for all
to service_role
using (true)
with check (true);

create or replace view public.funding_leads_daily_summary as
select
  date_trunc('day', created_at)::date as day,
  count(*) as total_leads,
  count(*) filter (where status in ('won', 'completed')) as completed_leads
from public.funding_leads
group by 1
order by 1 desc;
