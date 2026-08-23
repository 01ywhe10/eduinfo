-- Run once in Supabase Dashboard > SQL Editor.
create table if not exists public.course_status_private (
  course_id text primary key,
  status text not null default '미진행',
  progress integer not null default 0 check (progress between 0 and 100),
  target_count integer not null default 0,
  completed_count integer not null default 0,
  extra_count integer not null default 0,
  edu_date text not null default '',
  checked_trainees jsonb not null default '[]'::jsonb,
  round1_trainees jsonb not null default '[]'::jsonb,
  round2_trainees jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

create table if not exists public.course_status_public (
  course_id text primary key,
  status text not null default '미진행',
  progress integer not null default 0 check (progress between 0 and 100),
  target_count integer not null default 0,
  completed_count integer not null default 0,
  extra_count integer not null default 0,
  edu_date text not null default '',
  updated_at timestamptz not null default now()
);

alter table public.course_status_private enable row level security;
alter table public.course_status_public enable row level security;

revoke all on table public.course_status_private from anon, authenticated;
revoke all on table public.course_status_public from anon, authenticated;
grant select, insert, update, delete on table public.course_status_private to authenticated;
grant select on table public.course_status_public to anon, authenticated;
grant insert, update, delete on table public.course_status_public to authenticated;

create policy "authenticated administrators can read private completion"
on public.course_status_private for select to authenticated using (true);
create policy "authenticated administrators can insert private completion"
on public.course_status_private for insert to authenticated with check ((select auth.uid()) = updated_by);
create policy "authenticated administrators can update private completion"
on public.course_status_private for update to authenticated using (true) with check ((select auth.uid()) = updated_by);
create policy "authenticated administrators can delete private completion"
on public.course_status_private for delete to authenticated using (true);

create policy "everyone can read public completion summary"
on public.course_status_public for select to anon, authenticated using (true);
create policy "authenticated administrators can insert public completion"
on public.course_status_public for insert to authenticated with check (true);
create policy "authenticated administrators can update public completion"
on public.course_status_public for update to authenticated using (true) with check (true);
create policy "authenticated administrators can delete public completion"
on public.course_status_public for delete to authenticated using (true);

alter publication supabase_realtime add table public.course_status_public;