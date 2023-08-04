create table "public"."emotion" (
    "diary_id" bigint not null,
    "name" character varying not null,
    "intensity" smallint not null
);

alter table "public"."emotion" enable row level security;

create table "public"."symptoms" (
    "diary_id" bigint not null,
    "name" character varying not null
);


alter table "public"."symptoms" enable row level security;

alter table "public"."diary" add column "user_id" uuid not null;

CREATE UNIQUE INDEX emotion_pkey ON public.emotion USING btree (diary_id, name);

CREATE UNIQUE INDEX symptoms_pkey ON public.symptoms USING btree (diary_id, name);

alter table "public"."emotion" add constraint "emotion_pkey" PRIMARY KEY using index "emotion_pkey";

alter table "public"."symptoms" add constraint "symptoms_pkey" PRIMARY KEY using index "symptoms_pkey";

alter table "public"."emotion" add constraint "emotion_diary_id_fkey" FOREIGN KEY (diary_id) REFERENCES diary(id) ON DELETE CASCADE not valid;

alter table "public"."emotion" validate constraint "emotion_diary_id_fkey";

alter table "public"."symptoms" add constraint "symptoms_diary_id_fkey" FOREIGN KEY (diary_id) REFERENCES diary(id) ON DELETE CASCADE not valid;

alter table "public"."symptoms" validate constraint "symptoms_diary_id_fkey";

create policy "Enable select for users based on user_id"
on "public"."diary"
as permissive
for select
to public
using ((auth.uid() = user_id));


create policy "Enable read access for all users"
on "public"."emotion"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."symptoms"
as permissive
for select
to public
using (true);



