create table "public"."courses" (
    "id" bigint generated by default as identity not null,
    "name" text not null default ''::text,
    "duration" smallint not null
);


alter table "public"."courses" enable row level security;

create table "public"."unit" (
    "number" smallint not null,
    "title" text not null default ''::text,
    "content" jsonb not null,
    "task" text default ''::text,
    "week_id" bigint not null
);


alter table "public"."unit" enable row level security;

create table "public"."user_in_course" (
    "course_id" bigint not null,
    "user_id" uuid not null,
    "progress" smallint default '0'::smallint
);


alter table "public"."user_in_course" enable row level security;

create table "public"."weeks" (
    "id" bigint generated by default as identity not null,
    "course_id" bigint not null,
    "number" smallint not null
);


alter table "public"."weeks" enable row level security;

CREATE UNIQUE INDEX courses_pkey ON public.courses USING btree (id);

CREATE UNIQUE INDEX unit_pkey ON public.unit USING btree (number, week_id);

CREATE UNIQUE INDEX user_in_course_pkey ON public.user_in_course USING btree (course_id, user_id);

CREATE UNIQUE INDEX weeks_pkey ON public.weeks USING btree (id);

alter table "public"."courses" add constraint "courses_pkey" PRIMARY KEY using index "courses_pkey";

alter table "public"."unit" add constraint "unit_pkey" PRIMARY KEY using index "unit_pkey";

alter table "public"."user_in_course" add constraint "user_in_course_pkey" PRIMARY KEY using index "user_in_course_pkey";

alter table "public"."weeks" add constraint "weeks_pkey" PRIMARY KEY using index "weeks_pkey";

alter table "public"."unit" add constraint "unit_week_id_fkey" FOREIGN KEY (week_id) REFERENCES weeks(id) ON DELETE CASCADE not valid;

alter table "public"."unit" validate constraint "unit_week_id_fkey";

alter table "public"."user_in_course" add constraint "user_in_course_course_id_fkey" FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE not valid;

alter table "public"."user_in_course" validate constraint "user_in_course_course_id_fkey";

alter table "public"."user_in_course" add constraint "user_in_course_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE not valid;

alter table "public"."user_in_course" validate constraint "user_in_course_user_id_fkey";

alter table "public"."weeks" add constraint "weeks_course_id_fkey" FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE not valid;

alter table "public"."weeks" validate constraint "weeks_course_id_fkey";

alter table "public"."courses" add column "description" text default ''::text;

alter table "public"."courses" add column "image_url" text default ''::text;

alter table "public"."courses" disable row level security;