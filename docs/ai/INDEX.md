# AI Guidance Index

<!-- AIO:BEGIN managed/summary -->
> Project: JohnPGame
> Updated: 2026-04-13

This folder holds detailed AI-facing guidance that should not live in the root `CLAUDE.md`.
<!-- AIO:END managed/summary -->

## How To Use This Folder

<!-- AIO:BEGIN managed/usage -->
- Keep `CLAUDE.md` lean. It should route agents to the right guidance, not duplicate it.
- Put deep or recurring local instructions here and link them from `ROUTING.md`.
- Create additional AI-facing docs in this folder when the guidance is important but too detailed for `CLAUDE.md`.
- If `MIGRATED-CLAUDE-NOTES.md` exists, review it and move any still-relevant rules into `PROJECT-INSTRUCTIONS.md` or a more specific AI doc.
<!-- AIO:END managed/usage -->

## Project-Specific AI Docs

<!-- AIO:BEGIN user/local-docs -->
- Add links to deeper AI-facing docs here as the project grows.
- Example: `docs/ai/testing-playbook.md` - testing workflow instructions
- Example: `docs/domain/billing.md` - billing rules the AI must read before touching payments
<!-- AIO:END user/local-docs -->

## Managed Reference

<!-- AIO:BEGIN managed/reference -->
| Document | Owner | Purpose |
|----------|-------|---------|
| `ROUTING.md` | Managed by AI Office + project team | Tells agents which local docs to read for which task |
| `PROJECT-INSTRUCTIONS.md` | Project team | Durable project-specific AI instructions |
| `MIGRATED-CLAUDE-NOTES.md` | Created only when needed | Preserved guidance moved out of legacy `CLAUDE.md` |

When a project needs deeper AI instructions, add a new document under `docs/ai/` or the most appropriate nearby docs folder, then link it from `ROUTING.md` instead of expanding `CLAUDE.md`.
<!-- AIO:END managed/reference -->
