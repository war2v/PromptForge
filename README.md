# PromptForge

PromptForge is an early-stage web app for exploring a structured prompt-engineering workflow. The current app is a landing page and early-access waitlist; prompt generation, saving, versioning, and model execution are not implemented yet.

## What works today

- A landing page describing a proposed workflow for shaping and evaluating prompts.
- An interactive example that previews structured agent specifications.
- A waitlist form that submits a name, email, and role to Supabase.
- Light, dark, and system theme selection.
- Placeholder pages for prompts, templates, settings, and individual prompt projects.

The root URL (`/`) redirects to `/waitlist`. The other listed pages are scaffolding, not complete product features.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 and reusable UI components
- Supabase JavaScript client for waitlist submissions
- `next-themes` for theme selection

## Getting started

### Prerequisites

- Node.js compatible with the versions required by Next.js 16
- npm
- A Supabase project if you want to submit waitlist entries

### Install and run

From the repository root:

```bash
cd promptforge
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root URL redirects to the waitlist page.

### Supabase configuration

Create `promptforge/.env.local` and add the following values:

```dotenv
NEXT_PUBLIC_SUPBASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

The URL variable is currently spelled `SUPBASE` in the application code; keep that spelling unless you also update `lib/supabase.ts`. Both values are read by the browser-side Supabase client, so use only a publishable/anon key here—never a Supabase service-role key.

The waitlist action inserts into a `waitlist` table with these columns:

| Column | Value |
|---|---|
| `email` | Email address |
| `first_name` | First name |
| `last_name` | Last name |
| `role` | `ai-developer`, `engineer`, `product-manager`, `prompt-architect`, or `other` |

Create the table and configure Supabase permissions to allow the intended inserts before using the form. This repository does not include a database migration or table definition.

## Available routes

| Route | Current behavior |
|---|---|
| `/` | Permanently redirects to `/waitlist` |
| `/waitlist` | Landing page and early-access form |
| `/prompts` | Placeholder page |
| `/prompts/templates` | Placeholder page |
| `/prompts/prompt/[id]` | Placeholder project page displaying the route ID |
| `/settings` | Placeholder page |

## Development commands

Run these commands from `promptforge/`:

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

There is currently no test script or automated test suite configured.

## Project layout

```text
promptforge/
├── app/
│   ├── _actions/       # Waitlist server action
│   ├── _db/            # Waitlist data access placeholder
│   ├── prompts/        # Prompt, template, and project routes
│   ├── settings/       # Settings route
│   └── waitlist/       # Landing page
├── components/         # Waitlist, project, provider, and UI components
├── hooks/              # Prompt-project hook placeholder
├── lib/                # Supabase client and shared utilities
└── types/              # Prompt-project type definitions
```

## Current limitations

- Prompt creation, persistence, search, version history, and execution against an AI provider are not implemented.
- The prompt-related routes and project state files are placeholders.
- No authentication flow, database migrations, or automated tests are configured.
- The waitlist form requires a Supabase project and a correctly configured `waitlist` table.

## License

No license has been selected yet.
