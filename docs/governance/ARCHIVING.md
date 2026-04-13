<!-- AIO:BEGIN managed/archiving -->
# Archiving & Deprecation Rules

> **Effective Date**: 2026-04-13
> **Enforcement**: Hard — no deletion without following this process

---

## Principles

1. **Nothing is silently deleted** — All removals go through archiving review.
2. **Git history is not a substitute for archiving** — Archived files must be discoverable without `git log`.
3. **Archive, don't hoard** — Archiving is not an excuse to keep everything. Truly obsolete content should be deleted after archiving review.

---

## Archive Location

All archived content goes to `docs/archive/`:

```
docs/archive/
  2026-04-13-old-requirements.md         # Date-prefixed original filename
  2026-04-13-previous-architecture.md
  ARCHIVE-INDEX.md                     # Index of all archived items
```

---

## When to Archive

| Trigger | Action |
|---------|--------|
| Document superseded by a new version | Archive the old version |
| Feature removed from the project | Archive its spec |
| Investigation completed | Keep in `docs/investigations/`; archive only when stale |
| Decision reversed (ADR) | Mark ADR as superseded, archive original |
| Folder being restructured | Archive displaced documents |
| File unchanged for >90 days AND no longer referenced | Candidate for archiving |

---

## Archiving Process

### Step 1: Create archive entry

Move the file to `docs/archive/` with a date prefix:

```
docs/old-requirements.md  ->  docs/archive/2026-04-13-old-requirements.md
```

### Step 2: Update ARCHIVE-INDEX.md

Add an entry:

```markdown
| Date | Original Location | Reason | Superseded By |
|------|-------------------|--------|---------------|
| 2026-04-13 | docs/old-requirements.md | Superseded | docs/schematic/requirements.md |
```

### Step 3: Update references

Search the codebase for references to the archived file and update or remove them.

### Step 4: Commit

Archive moves MUST be in their own commit with message: `docs: archive {filename} — {reason}`

---

## Deletion Policy

Files may be permanently deleted (not just archived) when:

1. The file has been in `docs/archive/` for >90 days AND
2. No references to it exist in the codebase AND
3. The deletion is documented in the commit message

Files that must NEVER be deleted:
- `CLAUDE.md`, `AGENTS.md`, `README.md`
- Any file in `docs/governance/`
- `project/CURRENT_STATE.md`
- ADRs (mark as superseded instead)

---

## Deprecation


### Code Deprecation

When deprecating code (functions, APIs, modules):

1. Add `@deprecated` JSDoc tag with migration path
2. Add console warning on first use (if runtime)
3. Add deprecation entry to `CHANGELOG.md`
4. Set removal target version (at least 1 minor version away)
5. Remove in the target version, note in changelog

```typescript
/**
 * @deprecated Use `newFunction()` instead. Will be removed in v2.0.0.
 */
export function oldFunction(): void {
  console.warn('oldFunction() is deprecated. Use newFunction() instead.');
  // ...
}
```
<!-- AIO:END managed/archiving -->

## Project Notes

<!-- AIO:BEGIN user/archiving-notes -->
- Add archive-review contacts, retention notes, or approved archive locations here.
<!-- AIO:END user/archiving-notes -->
