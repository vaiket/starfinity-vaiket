-- Easygrow Admin Dashboard DB setup
-- Run npm run db:setup, or paste into Supabase SQL Editor.
-- No anonymous/authenticated access to customer lead records.

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
-- Historical leads were not emailed by this integration.
alter table public.funding_leads add column if not exists welcome_email_status text not null default 'not_requested';
alter table public.funding_leads alter column welcome_email_status set default 'pending';
alter table public.funding_leads add column if not exists welcome_email_sent_at timestamptz;
alter table public.funding_leads add column if not exists welcome_email_error text;

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
set search_path = public
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

drop policy if exists "allow authenticated read funding leads" on public.funding_leads;

drop policy if exists "allow anon read funding leads" on public.funding_leads;

drop policy if exists "allow service role full access funding leads" on public.funding_leads;

revoke all on public.funding_leads from public, anon, authenticated;
grant usage on schema public to service_role;
grant select, insert, update, delete on public.funding_leads to service_role;

create or replace view public.funding_leads_daily_summary
with (security_invoker = true) as
select
  date_trunc('day', created_at)::date as day,
  count(*) as total_leads,
  count(*) filter (where status in ('won', 'completed')) as completed_leads
from public.funding_leads
group by 1
order by 1 desc;

revoke all on public.funding_leads_daily_summary from public, anon, authenticated;
grant select on public.funding_leads_daily_summary to service_role;

notify pgrst, 'reload schema';
