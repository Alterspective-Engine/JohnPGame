<!-- AIO:BEGIN managed/folder-structure -->
# Folder Structure & Taxonomy

> **Effective Date**: 2026-04-13
> **Enforcement**: Hard — new folders require governance review

---

## Principles

1. **Every folder has a defined purpose** — No folder exists "just in case".
2. **Flat over deep** — Prefer fewer nesting levels. Max depth: 6 from root.
3. **No orphan folders** — Empty folders must be removed or populated.
4. **No duplicate taxonomy** — One canonical location for each type of content.
5. **New folders require justification** — Document why in the PR that creates them.

---

## Approved Top-Level Folders

| Folder | Purpose | May contain subfolders? | Owner |
|--------|---------|------------------------|-------|
| `src/` | All source code | Yes — see rules below | Developers |
| `tests/` | Test files (if not co-located) | Yes — mirrors `src/` | Developers |
| `docs/` | All project documentation | Yes — governed taxonomy below | Architect |
| `project/` | Living project state and runtime metadata | Minimal only | Project Lead |
| `scripts/` | Build, deploy, and utility scripts | Flat only (no subfolders) | DevOps |
| `config/` | Environment and tool configuration | Flat only | DevOps |
| `.ai-office/` | AI Office state (auto-managed) | Yes (auto) | System |

### Folders that MUST NOT exist at root

| Banned | Reason | Correct location |
|--------|--------|-----------------|
| `lib/` | Ambiguous — use `src/` | `src/lib/` or `src/common/` |
| `utils/` | Too generic at root | `src/common/` or `src/utils/` |
| `helpers/` | Banned entirely | Inline or `src/common/` |
| `components/` | Framework-specific, not root-level | `src/components/` |
| `assets/` | Must be within `src/` or `public/` | `src/assets/` or `public/` |
| `data/` | Ambiguous | `src/data/` or `docs/data/` |
| `temp/` / `tmp/` | Banned entirely | Use OS temp directory |

## Documentation Taxonomy (`docs/`)

| Subfolder | Purpose | File naming |
|-----------|---------|-------------|
| `docs/governance/` | Governance rules (this folder) | `UPPER-CASE.md` |
| `docs/implementation/` | Delivery tracking, plans, packets, and evidence | Mixed — see implementation lifecycle below |
| `docs/architecture/` | Architecture decisions and diagrams | `kebab-case.md` |
| `docs/decisions/` | ADRs (Architecture Decision Records) | `ADR-NNN-title.md` |
| `docs/schematic/` | Requirements and specifications | `kebab-case.md` |
| `docs/guides/` | How-to guides for developers | `kebab-case.md` |
| `docs/api/` | API documentation (generated or manual) | `kebab-case.md` |
| `docs/archive/` | Archived/superseded documents | Original name, prefixed with date |
| `docs/investigations/` | Investigation reports | `INV-NNN-title/` (folder per investigation) |

## Implementation Lifecycle (`docs/implementation/`)

| Path | Purpose | File naming |
|------|---------|-------------|
| `docs/implementation/REGISTER.md` | Master register of work items and GitHub links | Fixed name |
| `docs/implementation/backlog/` | Triaged work not yet committed | `FEAT-NNN-slug/` folders as needed |
| `docs/implementation/roadmap/` | Approved future work with a target window | `FEAT-NNN-slug/` folders as needed |
| `docs/implementation/current/` | Active implementation packets | `FEAT-NNN-slug/` folders |
| `docs/implementation/completed/` | Finished work and lessons learned | `YYYY-MM-DD-FEAT-NNN-slug/` folders |

### Forbidden `docs/` patterns

- No date-stamped files at `docs/` root (e.g., `docs/SESSION-2026-01-15.md`) — use `docs/archive/`, `docs/implementation/completed/`, or a subfolder
- No tool-specific dump files (e.g., `docs/BUG-FIX-SUMMARY.md`) — use `docs/investigations/`
- No duplicate/near-duplicate documents — merge or archive the older one

## Project State Taxonomy (`project/`)

| Subfolder | Purpose | File naming |
|-----------|---------|-------------|
| `project/CURRENT_STATE.md` | Current system state (living summary of what exists now) | Fixed name |
| `project/PORTS.md` | Port allocations (if applicable) | Fixed name |


---

## Creating New Folders

Before creating a new folder:

1. **Check this document** — Does an existing folder already serve this purpose?
2. **Check `docs/archive/`** — Was a similar folder previously archived? Why?
3. **If no match exists**, add the new folder to this document with:
   - Purpose
   - File naming convention
   - Owner
4. **Get approval** before creating it.

## Folder Cleanup Rules

| Condition | Action |
|-----------|--------|
| Folder empty for >30 days | Delete it |
| Folder contains only 1 file | Merge into parent or rename |
| Folder name is generic (`misc/`, `temp/`) | Rename or restructure |
| Folder duplicates another's purpose | Merge into canonical location |
<!-- AIO:END managed/folder-structure -->

## Project Notes

<!-- AIO:BEGIN user/folder-structure-notes -->
- Add approved local folder examples or ownership clarifications here.
<!-- AIO:END user/folder-structure-notes -->
