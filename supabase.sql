-- Run once in the Supabase SQL Editor.
create table public.docs (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  id text not null,
  data jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);

alter table public.docs enable row level security;

create policy "Each person sees only their own data"
  on public.docs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
