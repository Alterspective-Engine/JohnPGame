<!-- AIO:BEGIN managed/header -->
# AGENTS.md — JohnPGame

Global rules from `C:\GitHub\AGENTS.md` apply here. This file is the canonical instruction source for AI tools working in this repository.

`CLAUDE.md` and `GEMINI.md` in this repo are thin wrappers that import this file.
<!-- AIO:END managed/header -->

<!-- AIO:BEGIN managed/read-first -->
---

## MANDATORY: Read First

Before doing anything else:

1. Read `C:\GitHub\LearnSD\GeneralKB\Internal\CLAUDE.md` (Internal CLAUDE.md — company-wide rules)
2. Read the standards index: `C:\GitHub\Alterspective-Intelligence\Principles\Web\standards\index.md`
   - Use the **Task-Based Routing** table to find the right standards files for your current task
   - All standards files are under `C:\GitHub\Alterspective-Intelligence\Principles\Web\standards\`
<!-- AIO:END managed/read-first -->

<!-- AIO:BEGIN managed/company-values -->
---

## Company Values

All work must reflect Alterspective's core values. See `COMPANY-VALUES-STANDARDS.md` for full details.

| Value | Principle |
|-------|-----------|
| **Humanity** | People first — empathy in every interaction |
| **Curiosity** | Ask "why" relentlessly; challenge assumptions |
| **Integrity** | Do the right thing, even when no one is watching |
| **Mastery** | Pursue excellence; continuous improvement |
| **Fun** | Enjoy the work; celebrate wins |
<!-- AIO:END managed/company-values -->

<!-- AIO:BEGIN managed/anti-fabrication-rules -->
---

## Anti-Fabrication Rules

These rules are non-negotiable for all AI agents:

1. **Never fabricate** — Do not invent file paths, function names, API endpoints, or data that you have not verified.
2. **State uncertainty** — If you are unsure, say so explicitly ("I believe…", "I'm not certain…").
3. **Every claim must be verifiable** — Reference the file, line, or doc that supports your statement.
4. **No bluffing** — If you don't know, say "I don't know" rather than guessing.
5. **Escalate** — When you encounter something beyond your capability or confidence, ask for help.
<!-- AIO:END managed/anti-fabrication-rules -->

<!-- AIO:BEGIN managed/ethics-dark-patterns -->
---

## Ethics & Dark Patterns

See `ETHICS-STANDARDS.md` for the full ethics framework.

### Core Principles
- Transparency in all user-facing behaviour
- Respect for user autonomy and data
- Accessibility as a first-class requirement

### Prohibited Patterns

| Pattern | Description |
|---------|-------------|
| Confirm-shaming | "No thanks, I don't want better results" |
| Hidden costs | Fees revealed only at final step |
| Forced continuity | Hard to stop/cancel operations |
| Misdirection | Highlighting unwanted options |
| Roach motel | Easy to start, hard to stop |

### AI Agent Boundaries

**Allowed (Autonomous):** Read code, suggest changes, run tests, generate reports.

**Requires Approval:** Deploy to production, modify user data, send communications, changes to security-critical code.

**Prohibited:** Delete production data without backup, bypass security controls, commit secrets, use eval() with user input.
<!-- AIO:END managed/ethics-dark-patterns -->

<!-- AIO:BEGIN managed/knowledge-base-awareness -->
---

## Knowledge Base Awareness

| KB | Location | Purpose |
|----|----------|---------|
| GeneralKB | `C:\GitHub\LearnSD\GeneralKB` | Company-wide knowledge, internal CLAUDE.md |
| Internal KB | `C:\GitHub\LearnSD\GeneralKB\Internal` | Internal rules and company context |
<!-- AIO:END managed/knowledge-base-awareness -->

<!-- AIO:BEGIN managed/documentation-maintenance -->
---

## Documentation Maintenance

1. **Same-session updates** — When you change content, update related docs in the same session.
2. **Cross-reference integrity** — If you rename or move files, update all references.
3. **Register sync** — Keep `docs/implementation/REGISTER.md` aligned with GitHub issues and project items.
4. **Packet maintenance** — Update `checklist.md`, `status.md`, and `issues.md` in the active implementation packet as work changes.
5. **CURRENT_STATE.md** — Update `project/CURRENT_STATE.md` when the actual system state changes.
<!-- AIO:END managed/documentation-maintenance -->

<!-- AIO:BEGIN managed/standards-compliance -->
---

## Standards Compliance (MANDATORY)

All standards files live at: `C:\GitHub\Alterspective-Intelligence\Principles\Web\standards\`

Always apply regardless of task: `SECURITY-STANDARDS.md`, `GIT-STANDARDS.md`, `COMPANY-VALUES-STANDARDS.md`, `ETHICS-STANDARDS.md`

### Quick Routing

| Task | Standards to read |
|------|-------------------|
| Building a web feature | `ARCHITECTURE-STANDARDS.md`, `CODING-STANDARDS.md` |
| Building or consuming an API | `API-STANDARDS.md`, `CODING-STANDARDS.md` |
| Auth / security changes | `SECURITY-STANDARDS.md`, `CODING-STANDARDS.md` |
| Deploying or operating infrastructure | `DEVOPS-STANDARDS.md`, `ENVIRONMENT-STANDARDS.md` |
| Writing or modifying tests | `TESTING-STANDARDS.md` |
| Setting up a project or repository | `STARTUP-STANDARDS.md`, `GIT-STANDARDS.md`, `GITHUB-STANDARDS.md` |

> For the full routing table, read the index: `C:\GitHub\Alterspective-Intelligence\Principles\Web\standards\index.md`
<!-- AIO:END managed/standards-compliance -->

<!-- AIO:BEGIN managed/standards-decision-tree -->
---

## Standards Decision Tree

All paths below are relative to `C:\GitHub\Alterspective-Intelligence\Principles\Web\standards\`.

```
What are you doing?

  Writing or modifying code?
    UI/Frontend      → UX-UI-STANDARDS.md + CODING-STANDARDS.md
    API/Backend      → API-STANDARDS.md + CODING-STANDARDS.md
    Auth/Security    → SECURITY-STANDARDS.md + CODING-STANDARDS.md
    Database/Models  → ARCHITECTURE-STANDARDS.md
    Tests            → TESTING-STANDARDS.md

  Non-code work?
    Deploying        → DEVOPS-STANDARDS.md + ENVIRONMENT-STANDARDS.md
    Reviewing code   → CODING-STANDARDS.md + TESTING-STANDARDS.md
    Creating files   → docs/governance/FILE-NAMING.md (in this repo)
    Work tracking    → WORK-TRACKING-STANDARDS.md + docs/implementation/REGISTER.md (in this repo)

  Always also read:
    SECURITY-STANDARDS.md   (touching auth, data, or external APIs)
    GIT-STANDARDS.md        (before committing)
```
<!-- AIO:END managed/standards-decision-tree -->

<!-- AIO:BEGIN managed/project-governance -->
---

## Project Governance

This project has strict governance rules. **Read before creating any files or folders.**

| Document | Location | Read when... |
|----------|----------|-------------|
| File & Folder Naming | `docs/governance/FILE-NAMING.md` | Creating or renaming any file |
| Folder Structure | `docs/governance/FOLDER-STRUCTURE.md` | Creating new folders or moving files |
| Version Management | `docs/governance/VERSION-MANAGEMENT.md` | Bumping versions or making releases |
| Archiving Rules | `docs/governance/ARCHIVING.md` | Deleting, deprecating, or superseding files |
| Document Lifecycle | `docs/governance/DOCUMENT-LIFECYCLE.md` | Creating or reviewing documentation |
<!-- AIO:END managed/project-governance -->

<!-- AIO:BEGIN managed/work-tracking -->
---

## Work Tracking

- GitHub Issues are the canonical record for features, bugs, tasks, and spikes.
- GitHub Projects hold workflow state, priority, owner, and target date. Do not use labels as a substitute for status.
- `docs/implementation/REGISTER.md` is the repository register and must reference the canonical GitHub item for current work.
- Active implementation packets live under `docs/implementation/current/{FEAT-ID}-{name}/`.
- Use `.github/ISSUE_TEMPLATE/` and `.github/PULL_REQUEST_TEMPLATE.md` when present instead of ad hoc issue or PR text.
<!-- AIO:END managed/work-tracking -->

<!-- AIO:BEGIN managed/project-ai-docs -->
---

## Project AI Docs

- `docs/ai/INDEX.md` is the project-local index for deeper AI guidance that should not live in `CLAUDE.md`.
- `docs/ai/ROUTING.md` tells agents which local docs to read for which task.
- `docs/ai/PROJECT-INSTRUCTIONS.md` is the user-owned place for durable project-specific AI instructions.
- When guidance becomes long or task-specific, create a focused doc under `docs/ai/` or the most appropriate docs folder and link it from `docs/ai/ROUTING.md`.
<!-- AIO:END managed/project-ai-docs -->

<!-- AIO:BEGIN managed/project-overview -->
---

## Project Overview

- **Name**: JohnPGame
- **Production URL**: https://johnpgame.alterspective.com.au
- **GitHub**: https://github.com/Alterspective-Engine/JohnPGame
- **Coolify project**: JohnPGame (app UUID: `l12m5elmnyj6s72wyz7f8r3c`)
- **Azure App Registration**: `JohnPGame` — Client ID: `5e73306b-55a0-4aa6-88d6-f94850ccbd8b`
- **Azure Tenant**: `b73d8804-6b4d-40ef-a514-81d4f3ce65b9` (alterspective.com.au)
- **Purpose**: Simple authenticated list app — users log in via Azure Entra and maintain a personal list of items
<!-- AIO:END managed/project-overview -->

<!-- AIO:BEGIN managed/tech-stack -->
---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vite 5 + React 18 + TypeScript 5 |
| Auth | Azure Entra ID (MSAL.js 3.x) |
| Backend | Node.js 20 + Express 4 + TypeScript 5 |
| Database | SQLite (better-sqlite3) with WAL mode |
| Token validation | jwks-rsa + jsonwebtoken (RS256) |
| Input validation | Zod |
| Deployment | Docker + nginx + Coolify |
<!-- AIO:END managed/tech-stack -->

<!-- AIO:BEGIN managed/local-dev -->
---

## Local Development

### Prerequisites
- Node.js 20+
- npm 9+ (workspaces support)

### Setup

```bash
# 1. Install all dependencies (both workspaces)
npm install

# 2. Create .env in repo root (gitignored)
cp .env.example .env
# Fill in VITE_AZURE_CLIENT_ID, VITE_AZURE_TENANT_ID, VITE_REDIRECT_URI=http://localhost:5173

# 3. Start both client and server in watch mode
npm run dev
```

**Client** runs at `http://localhost:5173` (Vite HMR).
**Server** runs at `http://localhost:3001` (tsx watch).
Vite proxies `/api/*` → `http://localhost:3001` in dev mode.

### Required `.env` Variables

| Variable | Where set | Example |
|---|---|---|
| `VITE_AZURE_CLIENT_ID` | `.env` (dev) / Coolify build arg (prod) | `5e73306b-55a0-4aa6-88d6-f94850ccbd8b` |
| `VITE_AZURE_TENANT_ID` | `.env` (dev) / Coolify build arg (prod) | `b73d8804-6b4d-40ef-a514-81d4f3ce65b9` |
| `VITE_REDIRECT_URI` | `.env` (dev) / Coolify build arg (prod) | `http://localhost:5173` (dev) |
| `AZURE_CLIENT_ID` | `.env` (dev) / Coolify env (prod) | same as `VITE_AZURE_CLIENT_ID` |
| `AZURE_TENANT_ID` | `.env` (dev) / Coolify env (prod) | same as `VITE_AZURE_TENANT_ID` |
| `CORS_ORIGIN` | `.env` (dev) / Coolify env (prod) | `http://localhost:5173` (dev) |
| `DATABASE_PATH` | optional — defaults to `./data/items.db` | `:memory:` for tests |

### Running Tests

```bash
npm test --workspace=src/server
```

Tests use an in-memory SQLite database and mock the auth middleware.

### TypeScript Check

```bash
npm run build --workspace=src/client   # tsc + vite build
npm run build --workspace=src/server   # tsc
```
<!-- AIO:END managed/local-dev -->

<!-- AIO:BEGIN managed/file-folder-conventions -->
---

## File & Folder Conventions

```
src/
  client/                   # Vite + React SPA
    src/
      context/              # React context providers (AuthContext)
      lib/                  # Utility modules (api-client.ts)
      pages/                # Page components (LoginPage, ListPage)
      msal-config.ts        # MSAL.js configuration
      main.tsx              # App entry point
      App.tsx               # Router + MsalProvider root
  server/
    src/
      features/             # Feature slices — auth/ and items/
        auth/               # auth-router.ts, user-repository.ts
        items/              # items-router.ts, item-repository.ts, item-service.ts
      middleware/           # auth-middleware.ts (JWT validation)
      database.ts           # SQLite init (better-sqlite3)
      index.ts              # Express app entry
      types.ts              # Shared interfaces (User, Item, AuthRequest)
config/
  nginx.conf                # nginx config for client container
tests/
  api/                      # Vitest integration tests (auth.test.ts, items.test.ts)
Dockerfile.client           # Multi-stage: Vite build → nginx serve
Dockerfile.server           # Multi-stage: tsc compile → node run
docker-compose.yml          # Orchestrates client + server + sqlite_data volume
```

- All TypeScript source lives under `src/client/src/` and `src/server/src/`
- Feature code is co-located by domain under `features/` (router + repository + service in same folder)
- Tests live in `tests/api/` at repo root (not inside `src/`)
<!-- AIO:END managed/file-folder-conventions -->

<!-- AIO:BEGIN managed/import-rules -->
---

## Import Rules

- **Client**: Use `import type` for type-only imports. Import React types from `'react'` directly (`import type { CSSProperties } from 'react'`), never from `'react'` as a namespace (`React.CSSProperties`). MSAL hooks from `@azure/msal-react`. Router from `react-router-dom`.
- **Server**: Import `db` from `'../../database'` (singleton). Import types from `'../../types'`. Never import across the `client/` ↔ `server/` boundary.
- **No barrel files** — import directly from the module file, not from an `index.ts` re-export.
- **Path aliases**: none configured — use relative paths.
<!-- AIO:END managed/import-rules -->

<!-- AIO:BEGIN managed/code-quality-rules -->
---

## Code Quality Rules

- **TypeScript strict**: `tsc --noEmit` must pass with zero errors before committing.
- **No `any`**: Use proper types or `unknown` with runtime narrowing.
- **Zod at boundaries**: All external input (request bodies) validated with Zod at the route layer.
- **No raw JWT claims returned to clients**: Auth routes must return DB-sourced values, not raw token claims.
- **SQLite queries typed**: Use `db.prepare<[ParamType], RowType>(...)` generics on all queries.
- **Rate limiting on all item routes**: `express-rate-limit` applied via `router.use(limiter)` before auth middleware.
- **Item text**: trim before validation; reject empty string and anything over 500 chars.
- **Tests**: run with `npm test --workspace=src/server`. Auth middleware is mocked at the module level (not at jwks-rsa/jsonwebtoken) to avoid CJS interop issues in Vitest.
<!-- AIO:END managed/code-quality-rules -->

<!-- AIO:BEGIN managed/ai-specific-rules -->
---

## AI-Specific Rules

### Docker / Coolify Deployment
- **Never use `ports:` in docker-compose** — Coolify's Traefik owns port 80/443. Use `expose:` only.
- **`NODE_ENV=production` strips devDependencies** — Coolify injects this as a build arg. All builder-stage `npm install` calls MUST include `--include=dev`, or `tsc`/`vite` will be missing (exit code 127).
- **npm workspaces: all `package.json` files must be in build context** — even `Dockerfile.client` needs `COPY src/server/package.json ./src/server/` to satisfy workspace resolution.
- **Coolify env vars for docker-compose**: use DELETE + POST (not PATCH). Domains via `docker_compose_domains`. Deploy via `GET /api/v1/deploy?uuid=...`.

### Azure Entra
- **Client ID** is stored in vault as `JOHNPGAME_AZURE_CLIENT_ID` (`johnpgame--johnpgame-azure-client-id`).
- **App registration** was created via `az ad app create` + `az rest PATCH` (not MS Graph API — admin-automation SP lacks `Application.ReadWrite.All`).
- **Token scope**: `${CLIENT_ID}/.default` — not a URL-based scope.
- **Backend validates** with `audience: CLIENT_ID`, `issuer: https://login.microsoftonline.com/${TENANT_ID}/v2.0`, algorithm RS256.

### Testing
- Auth middleware is mocked at the **module level** (`vi.mock('../../src/server/src/middleware/auth-middleware')`), not at the jwks-rsa/jsonwebtoken level — CJS interop in Vitest makes the latter unreliable.
- `DATABASE_PATH=':memory:'` must be set **before** importing `app` in tests; use `vi.stubEnv` or set `process.env` at module load time.
- `VITEST=true` in env prevents `app.listen()` and `initDatabase()` from running at import time.
<!-- AIO:END managed/ai-specific-rules -->

<!-- AIO:BEGIN managed/footer -->

---

**Document Version**: 1.0
**Last Updated**: 2026-04-13
**Generated By**: aio init
<!-- AIO:END managed/footer -->
