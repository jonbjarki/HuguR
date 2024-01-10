alter table "public"."modules" add column "directory" text;

CREATE UNIQUE INDEX modules_directory_key ON public.modules USING btree (directory);

alter table "public"."modules" add constraint "modules_directory_key" UNIQUE using index "modules_directory_key";


