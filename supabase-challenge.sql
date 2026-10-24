-- Optional: partner challenge. Run once in the Supabase SQL Editor.
-- Stores only weekly steps, workouts and active minutes for people who switch sharing on.
create table public.shared_stats (
  user_id uuid primary key default auth.uid() references auth.users(id) on delete cascade,
  name text,
  week text,
  steps integer default 0,
  workouts integer default 0,
  active integer default 0,
  updated_at timestamptz default now()
);

alter table public.shared_stats enable row level security;

create policy "Signed-in people can see weekly totals" on public.shared_stats
  for select to authenticated using (true);
create policy "Each person adds their own totals" on public.shared_stats
  for insert to authenticated with check (auth.uid() = user_id);
create policy "Each person updates their own totals" on public.shared_stats
  for update to authenticated using (auth.uid() = user_id);
create policy "Each person removes their own totals" on public.shared_stats
  for delete to authenticated using (auth.uid() = user_id);
