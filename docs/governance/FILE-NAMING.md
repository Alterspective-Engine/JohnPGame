<!-- AIO:BEGIN managed/file-naming -->
# File & Folder Naming Conventions

> **Effective Date**: 2026-04-13
> **Enforcement**: Hard — violations block merge

---

## General Rules (ALL files and folders)

1. **No spaces in names** — Use hyphens (`-`) as word separators.
2. **Lowercase only** for folders and most files — Exceptions listed below.
3. **ASCII characters only** — No unicode, accented characters, or special symbols.
4. **Maximum path depth**: 6 levels from project root (e.g., `src/features/auth/components/forms/LoginForm.tsx`).
5. **Maximum filename length**: 80 characters (including extension).
6. **No trailing hyphens or underscores**.
7. **No double hyphens** (`--`) or **double underscores** (`__`) unless framework-mandated.
8. **No generic names**: Never use `temp`, `misc`, `stuff`, `old`, `new`, `test2`, `final`, `final-v2`.

---

## Folder Naming

| Context | Convention | Example | Anti-pattern |
|---------|-----------|---------|--------------|
| All folders | `kebab-case` | `user-management/` | `userManagement/`, `User_Management/` |
| Top-level project folders | `kebab-case` | `docs/`, `src/`, `tests/` | `Docs/`, `SRC/` |
| Feature folders | `kebab-case` matching feature ID | `auth-login/` | `AuthLogin/`, `auth_login/` |
| Date-stamped folders | `YYYY-MM-DD-description` | `2026-03-05-migration/` | `05-03-2026/`, `march-migration/` |

### Forbidden folder names

These names are banned at any level (except where noted):

```
temp/  tmp/  old/  new/  backup/  bak/  copy/  misc/  stuff/
junk/  scratch/  wip/  _old/  _backup/
```

**Reserved name**: `archive/` may only exist as `docs/archive/` — banned everywhere else.

---

## File Naming by Type

### Source Code Files

| Language | Convention | Example |
|----------|-----------|---------|
| TypeScript/JavaScript | `kebab-case.ts` / `.tsx` | `user-service.ts`, `login-form.tsx` |
| Components (React/Vue) | `PascalCase.tsx` / `.vue` | `LoginForm.tsx`, `UserCard.vue` |
| Test files | `{source-name}.test.ts` | `user-service.test.ts` |
| Type definition files | `{module}.types.ts` or `types.ts` | `auth.types.ts` |
| Constants | `{module}.constants.ts` or `constants.ts` | `api.constants.ts` |
| Configuration | `{tool}.config.{ext}` | `vite.config.ts`, `eslint.config.js` |


### Documentation Files

| Type | Convention | Example |
|------|-----------|---------|
| Project-root docs | `UPPER-CASE.md` | `README.md`, `CLAUDE.md`, `AGENTS.md` |
| Governance docs | `UPPER-CASE.md` | `FILE-NAMING.md`, `ARCHIVING.md` |
| Guides and references | `kebab-case.md` | `getting-started.md`, `api-reference.md` |
| Decision records | `ADR-NNN-kebab-title.md` | `ADR-001-choose-database.md` |
| Feature specs | `FEAT-NNN-kebab-title.md` | `FEAT-001-user-login.md` |
| Meeting notes | `YYYY-MM-DD-topic.md` | `2026-03-05-kickoff.md` |
| Investigation reports | `INV-NNN-kebab-title.md` | `INV-001-performance-issue.md` |

### Data & Config Files

| Type | Convention | Example |
|------|-----------|---------|
| Environment files | `.env.{environment}` | `.env.development`, `.env.production` |
| JSON config | `kebab-case.json` | `tsconfig.json`, `package.json` |
| YAML config | `kebab-case.yml` | `docker-compose.yml` |

---

## Numbering Conventions

When files require sequential numbering:

| Pattern | Format | Example |
|---------|--------|---------|
| Features | `FEAT-NNN` (zero-padded to 3) | `FEAT-001`, `FEAT-042` |
| ADRs | `ADR-NNN` | `ADR-001`, `ADR-012` |
| Investigations | `INV-NNN` | `INV-001` |
| Versions | Semantic: `MAJOR.MINOR.PATCH` | `1.2.3` |

---

## Renaming Rules

1. **Never rename and modify in the same commit** — Rename in one commit, then modify in the next.
2. **Update all references** when renaming — Search the entire codebase for the old name.
3. **Git must track the rename** — Use `git mv`, not delete + create.

---

## Validation

AI agents MUST validate file names before creating them:

```
Pattern: /^\.?[a-zA-Z0-9][a-zA-Z0-9._-]*$/
Max length: 80 characters
No spaces, no special characters except . - _
Leading dot allowed for config files (.env, .gitignore, .eslintrc)
```
<!-- AIO:END managed/file-naming -->

## Project Notes

<!-- AIO:BEGIN user/file-naming-notes -->
- Add project-approved examples or exceptions that still comply with the base naming rules.
<!-- AIO:END user/file-naming-notes -->
