-- Create a table called "users"
create table
  users (
    -- Create a column called "id" that is an auto-incrementing integer and is the primary key
    id integer primary key generated always as identity,
    name text,
    email text,
    created_at timestamptz default now()
  );