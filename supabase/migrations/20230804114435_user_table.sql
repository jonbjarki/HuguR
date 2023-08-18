-- Create a table for users
create table "user" (
    id uuid references auth.users on delete cascade not null primary key,
    updated_at timestamp with time zone
    -- Add any additional fields you want to store about your users here
);
-- Set up Row Level Security (RLS)
alter table "user"
  enable row level security;

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.user (id)
  values (new.id);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();