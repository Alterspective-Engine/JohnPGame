<!-- AIO:BEGIN managed/document-lifecycle -->
# Document Lifecycle Management

> **Effective Date**: 2026-04-13
> **Enforcement**: Medium — enforced at review time

---

## Document States

Every document in this project exists in one of these states:

| State | Meaning | Marker |
|-------|---------|--------|
| **Draft** | Work in progress, not yet reviewed | `Status: Draft` in frontmatter or header |
| **Active** | Reviewed, current, and authoritative | `Status: Active` (or no status = active) |
| **Under Review** | Being revised, not yet re-approved | `Status: Under Review` |
| **Deprecated** | Superseded but kept for reference | `Status: Deprecated — see [replacement]` |
| **Archived** | Moved to `docs/archive/` | Physical location signals state |

### State transitions

```
Draft -> Active          (after review and approval)
Active -> Under Review   (when revision begins)
Under Review -> Active   (after re-approval)
Active -> Deprecated     (when superseded)
Deprecated -> Archived   (after grace period: minimum 30 days)
```

---

## Required Document Metadata

Every document (except auto-generated files) MUST have a header block:

```markdown
# Document Title

> **Status**: Active
> **Owner**: (person or role responsible)
> **Last Reviewed**: 2026-04-13
> **Next Review**: (date or "On change")
```

---

## Review Cadence

| Document Type | Review Frequency | Reviewer |
|---------------|-----------------|----------|
| Governance documents | Every 90 days or on amendment | Project Owner |
| Architecture documents | Every 90 days or after major changes | Architect |
| Requirements/specs | Before each implementation phase | Architect + Developer |
| README and CLAUDE.md | Every 30 days or after structural changes | Any contributor |
| ADRs | Never (immutable once accepted) | N/A |
| Feature specs | Before implementation starts | Developer assigned |

---

## Staleness Detection

A document is **stale** when:

1. It references files, functions, or APIs that no longer exist
2. It has not been reviewed within its cadence period
3. It contradicts current implementation or other active documents
4. Its `Last Reviewed` date is >90 days ago and it's not an ADR

### What to do with stale documents

1. If still relevant: Update content, reset review date
2. If partially relevant: Extract useful parts, deprecate the rest
3. If no longer relevant: Deprecate and archive

---

## Ownership Rules

1. **Every document has an owner** — The owner is responsible for keeping it current.
2. **Ownership transfers with role changes** — When someone leaves the project, reassign their documents.
3. **Unowned documents are escalated** — If no owner can be identified, escalate to Project Owner.
4. **AI agents cannot own documents** — AI can draft and update, but a human must own.
<!-- AIO:END managed/document-lifecycle -->

## Project Notes

<!-- AIO:BEGIN user/document-lifecycle-notes -->
- Add local review cadences, owners, or review rituals that sit on top of the baseline rules.
<!-- AIO:END user/document-lifecycle-notes -->
