-- Create a table for users
create table "user" (
    id uuid references auth.users on delete cascade not null primary key,
    updated_at timestamp with time zone
    -- Add any additional fields you want to store about your users here
);
-- Set up Row Level Security (RLS)
alter table "user"
  enable row level security;


create table "public"."courses" (
    "id" bigint generated by default as identity not null,
    "name" text not null default ''::text,
    "duration" smallint not null,
    "description" text default ''::text,
    "image_url" text default ''::text,
    constraint courses_pkey primary key (id)
);

create table "public"."user_in_course" (
    "course_id" bigint not null,
    "user_id" uuid not null,
    "progress" smallint default '0'::smallint,
    constraint user_in_course_pkey primary key (course_id, user_id),
    constraint user_in_course_course_id_fkey foreign key (course_id) references courses (id) on delete cascade,
    constraint user_in_course_user_id_fkey foreign key (user_id) references "user" (id) on delete cascade
);

create table "public"."units"(
    "id" bigint generated by default as identity not null,
    "number" smallint not null,
    "week" smallint not null,
    "course_id" bigint not null,
    "title" text null default ''::text,
    "content" jsonb not null,
    "task" text null default ''::text,
    constraint units_pkey primary key (id),
    constraint units_unique_week_number unique (week, number),
    constraint units_fkey foreign key (course_id) references courses (id) on delete cascade
);

create or replace function public.set_unit_title() returns trigger as $$
begin
    if new.title = '' then
        new.title := 'Unit ' || new.number;
    end if;
    return new;
end;
$$ language plpgsql security definer;
create trigger set_unit_title_trigger
    before insert on public.units
    for each row execute procedure public.set_unit_title();

create table "public"."user_unit_completion" (
    "user_id" uuid not null,
    "unit_id" bigint not null,
    "completed" boolean not null default false,
    constraint user_unit_completion_pkey primary key (user_id, unit_id),
    constraint user_unit_completion_user_id_fkey foreign key (user_id) references "user" (id) on delete cascade,
    constraint user_unit_completion_unit_id_fkey foreign key (unit_id) references units (id) on delete cascade
);

create function public.new_user_progress()
returns trigger as $$
begin
  insert into public.user_in_course (course_id, user_id)
    select id, new.id
    from public.courses;

    insert into public.user_unit_completion (user_id, unit_id)
    select new.id, units.id
    from public.units;

    return new;
end;
$$ language plpgsql security definer;
create trigger on_user_created
  after insert on auth.users
  for each row execute procedure public.new_user_progress();

alter table "public"."user_unit_completion" enable row level security;

create policy "Enable select for users based on user_id"
on "public"."user_unit_completion"
as permissive
for select
to public
using ((auth.uid() = user_id));


-- Cut from user_table.sql


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