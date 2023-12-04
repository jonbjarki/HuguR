drop trigger if exists "set_module_data_trigger" on "public"."modules";

drop trigger if exists "set_unit_data_trigger" on "public"."units";

drop policy "Enable read access for all users" on "public"."articles";

alter table "public"."modules" drop constraint "module_fkey";

alter table "public"."modules" drop constraint "modules_unique_course_id_number";

alter table "public"."units" drop constraint "units_unique_module_id_number";

alter table "public"."units" drop constraint "units_fkey";

drop function if exists "public"."set_module_data"();

drop function if exists "public"."set_unit_data"();

alter table "public"."modules" drop constraint "module_pkey";

drop index if exists "public"."module_pkey";

drop index if exists "public"."modules_unique_course_id_number";

drop index if exists "public"."units_unique_module_id_number";

drop table "public"."modules";

alter table "public"."articles" alter column "image" set default '/images/peopletalking.jpg'::text;

alter table "public"."articles" disable row level security;

alter table "public"."courses" alter column "description" set data type text using "description"::text;

alter table "public"."courses" alter column "description" set default ''::text;

alter table "public"."courses" alter column "description" drop not null;

alter table "public"."courses" alter column "name" set data type text using "name"::text;

alter table "public"."courses" alter column "name" set default ''::text;

alter table "public"."units" drop column "file_url";

alter table "public"."units" drop column "module_id";

alter table "public"."units" drop column "name";

alter table "public"."units" drop column "order_number";

alter table "public"."units" add column "content" text not null;

alter table "public"."units" add column "course_id" bigint not null;

alter table "public"."units" add column "number" smallint not null;

alter table "public"."units" add column "title" text default ''::text;

alter table "public"."units" add column "week" smallint not null;

alter table "public"."units" alter column "task" set data type text using "task"::text;

alter table "public"."units" alter column "task" set default ''::text;

CREATE UNIQUE INDEX units_unique_week_number ON public.units USING btree (week, number);

alter table "public"."units" add constraint "units_unique_week_number" UNIQUE using index "units_unique_week_number";

alter table "public"."units" add constraint "units_fkey" FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE not valid;

alter table "public"."units" validate constraint "units_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.set_unit_title()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
    if new.title = '' then
        new.title := 'Unit ' || new.number;
    end if;
    return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
  insert into public.user (id)
  values (new.id);
  insert into public.user_in_course (course_id, user_id)
  select id, new.id from public.courses;
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.new_user_progress()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
  insert into public.user_in_course (course_id, user_id)
    select id, new.id
    from public.courses;

    insert into public.user_unit_completion (user_id, unit_id)
    select new.id, units.id
    from public.units;

    return new;
end;
$function$
;

CREATE TRIGGER set_unit_title_trigger BEFORE INSERT ON public.units FOR EACH ROW EXECUTE FUNCTION set_unit_title();


