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
2. Read the standards index for this project's domain:
   - **Web App Development**: `C:\GitHub\GPTPrompts\prompts\web-app-development\standards\index.md`
   - Read the **Task-Based Routing** section in `index.md` to find the right standards for your current task.
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

- **Read C:\GitHub\LearnSD\GeneralKB\Internal\CLAUDE.md first**

### Standards Domains

#### Web App Development
- Path: `C:\GitHub\GPTPrompts\prompts\web-app-development\standards\`
- Read the **Task-Based Routing** section in `index.md` to find the right standards for your current task.
- Always-apply: SECURITY-STANDARDS.md, GIT-STANDARDS.md, COMPANY-VALUES-STANDARDS.md, ETHICS-STANDARDS.md

### Quick Routing (see `index.md` in each domain for complete routing)

| Task Type | Domain | Start Reading |
|-----------|--------|---------------|
| Building a web feature | Web App Development | ARCHITECTURE-STANDARDS.md, CODING-STANDARDS.md |
| Building or consuming an API | Web App Development | API-STANDARDS.md, CODING-STANDARDS.md |
| Setting up a project or repository | Web App Development | STARTUP-STANDARDS.md, GIT-STANDARDS.md, GITHUB-STANDARDS.md, WORK-TRACKING-STANDARDS.md |
| Deploying or operating infrastructure | Web App Development | DEVOPS-STANDARDS.md, ENVIRONMENT-STANDARDS.md, PRODUCTION-DEPLOYMENT-ENFORCEMENT.md |
| Reviewing or designing CI/CD and release automation | Web App Development | CICD-REVIEW-PLAN.md, DEVOPS-STANDARDS.md, GITHUB-STANDARDS.md |
<!-- AIO:END managed/standards-compliance -->

<!-- AIO:BEGIN managed/standards-decision-tree -->
---

## Standards Decision Tree

Use this tree to determine which standards to read for your current task.
Start at Step 1 and follow the arrows.

```
Step 1: What kind of work are you doing?

  [Writing or modifying code?]
    |
    +-- YES --> What layer?
    |     |
    |     +-- UI/Frontend ---------> UX-UI-STANDARDS.md + CODING-STANDARDS.md
    |     +-- API/Backend ---------> API-STANDARDS.md + CODING-STANDARDS.md
    |     +-- CLI -----------------> CLI-UX-STANDARDS.md + CODING-STANDARDS.md
    |     +-- Database/Models -----> ARCHITECTURE-STANDARDS.md
    |     +-- Auth/Security -------> SECURITY-STANDARDS.md + CODING-STANDARDS.md
    |     +-- Tests ---------------> TESTING-STANDARDS.md
    |     +-- AI/LLM Integration --> AI-LLM-INTEGRATION-STANDARDS.md
    |
    +-- NO --> Non-code work?
          |
          +-- Setting up a project -----> STARTUP-STANDARDS.md + GIT-STANDARDS.md + GITHUB-STANDARDS.md + WORK-TRACKING-STANDARDS.md
          +-- Deploying/DevOps ---------> DEVOPS-STANDARDS.md + ENVIRONMENT-STANDARDS.md + PRODUCTION-DEPLOYMENT-ENFORCEMENT.md
          +-- Reviewing CI/CD ----------> CICD-REVIEW-PLAN.md + DEVOPS-STANDARDS.md + GITHUB-STANDARDS.md
          +-- Reviewing code -----------> CODING-STANDARDS.md + TESTING-STANDARDS.md
          +-- Tracking work/status -----> WORK-TRACKING-STANDARDS.md + docs/implementation/REGISTER.md
          +-- Writing documentation ----> docs/implementation/REGISTER.md + docs/governance/
          +-- Creating/renaming files --> docs/governance/FILE-NAMING.md
          +-- Restructuring folders ----> docs/governance/FOLDER-STRUCTURE.md

Step 2: ALWAYS also check
  +-- SECURITY-STANDARDS.md (if touching auth, data, or external APIs)
  +-- GIT-STANDARDS.md (if committing code)
  +-- docs/governance/ (if creating files, folders, or documents)
  +-- docs/implementation/REGISTER.md (if updating plans, status, or delivery packets)
```

**Rule**: When in doubt, read the standard. Over-reading is better than under-reading.
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

<!-- AIO:BEGIN managed/file-folder-conventions -->
---

## File & Folder Conventions

> To be determined during Architecture phase.
<!-- AIO:END managed/file-folder-conventions -->

<!-- AIO:BEGIN managed/import-rules -->
---

## Import Rules

> To be determined during Architecture phase.
<!-- AIO:END managed/import-rules -->

<!-- AIO:BEGIN managed/code-quality-rules -->
---

## Code Quality Rules

> To be determined during Architecture phase.
<!-- AIO:END managed/code-quality-rules -->

<!-- AIO:BEGIN managed/ai-specific-rules -->
---

## AI-Specific Rules

> To be determined during Architecture phase.
<!-- AIO:END managed/ai-specific-rules -->

<!-- AIO:BEGIN managed/footer -->

---

**Document Version**: 1.0
**Last Updated**: 2026-04-13
**Generated By**: aio init
<!-- AIO:END managed/footer -->
