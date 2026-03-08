PostaCI - Email Marketing & Automation Platform
===============================================

This repository contains a full‑stack SaaS application for a modern, B2B‑focused **Email Marketing & Marketing Automation Platform**, similar to Mailchimp but with a cleaner, minimal UI and opinionated workflows.

### Tech Stack

- **Frontend**: React + TypeScript + Next.js + Tailwind CSS
- **Backend**: Node.js + TypeScript + Express
- **Database**: PostgreSQL with Prisma ORM

### Apps

- `frontend/` – marketing site + authenticated app (dashboard, campaigns, automation, contacts, billing, settings, design system, etc.)
- `backend/` – REST API, authentication, organization and user management, campaigns, automations, analytics, billing integrations, and webhooks.

### Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root based on `.env.example` (to be added) and set the `DATABASE_URL` and JWT secrets.

3. Run database migrations:

```bash
npm run db:migrate
```

4. Start development servers:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:4000` (configurable).

### Monorepo Layout

This project uses a simple npm workspace layout:

- Shared scripts live in the root `package.json`.
- Each app has its own `package.json` and configuration.

# postaci
postaci
