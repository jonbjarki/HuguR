# Hugur

Hugur is a web application that allows users to track their mental health and wellbeing made by RU in collaboration with The Icelandic Student Innovation Fund. It is built using Next.js and Supabase.

## Table of Contents

1. [Setting up the Environment](#setting-up-the-environment)
2. [Setting up for local development](#setting-up-for-local-development)
3. [Authentications](#authentications)

## Setting up the Environment

You need two .env files placed in the root:

- .env.development.local <span style="color: gray;"> For local development </span>
- .env.production.local <span style="color: gray;"> For staging </span>

The .env files should contain the following:

```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

**The url and anon key should be as follows:**

- development: API URL and anon key from starting the database on Docker
- production: API URL and anon key from the staging Supabase project

_For hosting, the API URL and anon key from the production Supabase project should be used in the hosting platform's settings._

## Setting up for local development

#### Requirements

- Docker
- Supabase CLI (included in dev dependencies)

#### Setup

1. Login to Supabase CLI using your personalized access token [found here](https://supabase.com/dashboard/account/tokens)

```
npx supabase login
```

2. Link your local development project to the staging project hosted on Supabase.

```
npx supabase link --project-ref <project ID>
```

You can find the project reference in the URL of your Supabase project or by running

```
npx supabase projects list
```

4. Start the database on Docker (this will take a while)

```
npx supabase start
```

**There is currently a bug in the Supabase CLI that causes signup email verification to fail. Until next release use:**

```
npx supabase@beta start
```

5. Start the development server

```
npm run dev
```

Refer to the [Supabase CLI documentation on Managing Environments](https://supabase.com/docs/guides/cli/managing-environments) for more information.

#### Generating types

<span style="color: red;"> This needs to be done for changes to the database schema or environment. </span>
To generate from the database schema, run

For Windows:

```
scripts/gentypes.bat [FLAG]
```

For Linux/Mac:

```
./scripts/gentypes.sh [FLAG]
```

Flags:

```
--local
--project-id <project id>
```

For local and staging respectively.

## Authentications

[In progress]
