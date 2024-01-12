# HuguR

HuguR is a web application that allows users to track their mental health and wellbeing made by a team at RU in collaboration with The Icelandic Student Innovation Fund. It is built using Next.js and Supabase.


# Startup Guide

## Local Development

### Step 1. Clone the repository

1. Navigate to the directory you want to clone the repository to.
```bash
cd <directory>
```
2. Clone the repository.
```bash
git clone https://github.com/Hugur23/HuguR.git
```
3. Navigate to the repository.
```bash
cd HuguR
```

### Step 2. Install Required Dependencies

```bash
npm install
```

### Step 3. Install Docker

Docker is used to run the database locally. You can download it [here](https://www.docker.com/products/docker-desktop).

### Step 4. Run the local database

```bash
npx supabase start
```

### Step 5. Run the development server

```bash
npm run dev
```

This should start the development server on [http://localhost:3000](http://localhost:3000).


