# AI Guidance Routing

<!-- AIO:BEGIN managed/summary -->
> Keep this file short. Route to the right document; do not restate large bodies of guidance here.
<!-- AIO:END managed/summary -->

## Read Order

<!-- AIO:BEGIN managed/read-order -->
1. Start with `CLAUDE.md`
2. Follow the standards routing from `CLAUDE.md`
3. Use this file for project-local routing
4. Open deeper docs only when your current task needs them
<!-- AIO:END managed/read-order -->

## Managed Routing

<!-- AIO:BEGIN managed/routing-table -->
| Task | Read Next | Notes |
|------|-----------|-------|
| Project-specific recurring rules | `PROJECT-INSTRUCTIONS.md` | Team-owned local AI guidance |
| Planning or status updates | `docs/implementation/REGISTER.md` | Work register and packet navigation |
| Active feature work | `docs/implementation/current/<feature>/` docs | Requirements, design, checklist, status, issues |
| File/folder changes | `docs/governance/FOLDER-STRUCTURE.md`, `docs/governance/FILE-NAMING.md` | Follow governance before creating new paths |
| Deep technical design | `docs/architecture/` | Read only the relevant architecture docs |
| Legacy migrated guidance | `MIGRATED-CLAUDE-NOTES.md` | Review only if still needed; fold durable rules elsewhere |
<!-- AIO:END managed/routing-table -->

## Project-Specific Routes

<!-- AIO:BEGIN user/project-routes -->
- Add project-specific routes here when a task should open another document first.
- Example: Before changing auth flows, read `docs/domain/authentication.md`.
- Example: Before editing emails, read `docs/ai/content-style.md`.
<!-- AIO:END user/project-routes -->

## Maintenance

<!-- AIO:BEGIN managed/maintenance -->
- Add rows when you create a durable AI-facing doc.
- Prefer linking specific docs over writing long prose here.
- Remove stale routes when the linked docs are archived or replaced.
<!-- AIO:END managed/maintenance -->
