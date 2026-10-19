-- გაუშვი ერთხელ: Supabase → SQL Editor → New query → ჩასვი ეს ყველაფერი → Run

-- თითო მომხმარებელს ერთი სტრიქონი: მისი ყველა გაკვეთილი და სტატისტიკა JSON-ად
create table if not exists public.user_data (
  user_id uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  json text not null check (length(json) < 900000),
  at bigint not null
);

-- დაცვა: ყველა ხედავს და ცვლის მხოლოდ საკუთარ სტრიქონს
alter table public.user_data enable row level security;

drop policy if exists "own row select" on public.user_data;
drop policy if exists "own row insert" on public.user_data;
drop policy if exists "own row update" on public.user_data;
drop policy if exists "own row delete" on public.user_data;
create policy "own row select" on public.user_data for select to authenticated using ((select auth.uid()) = user_id);
create policy "own row insert" on public.user_data for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "own row update" on public.user_data for update to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own row delete" on public.user_data for delete to authenticated using ((select auth.uid()) = user_id);

-- „ანგარიშის წაშლა“: შლის მხოლოდ იმას, ვინც იძახებს; მისი მონაცემები cascade-ით იშლება
create or replace function public.delete_user()
returns void
language sql
security definer
set search_path = ''
as $$
  delete from auth.users where id = auth.uid();
$$;
revoke execute on function public.delete_user() from public, anon;
grant execute on function public.delete_user() to authenticated;
