<!-- AIO:BEGIN managed/implementation-readme -->
# Implementation Tracking

> Project: JohnPGame
> Updated: 2026-04-13

This folder is the in-repository tracking layer for planned, current, and completed work.

## Source Of Truth

- GitHub Issues are the canonical record for each feature, bug, task, or spike.
- GitHub Projects hold workflow state, priority, owner, and target date.
- `docs/implementation/REGISTER.md` is the local navigation layer and must stay aligned with GitHub.
- `project/CURRENT_STATE.md` remains the living summary of what exists in the repo today.

## Lifecycle

| Stage | Folder | Purpose |
|-------|--------|---------|
| Backlog | `docs/implementation/backlog/` | Captured and triaged work that is not yet committed |
| Roadmap | `docs/implementation/roadmap/` | Approved future work with a target window |
| Current | `docs/implementation/current/` | Active implementation packets with detailed docs |
| Completed | `docs/implementation/completed/` | Finished work, evidence, and lessons learned |

## Packet Expectations

Every substantive item in `current/` should have:

- `README.md`
- `requirements.md`
- `technical-design.md`
- `acceptance-criteria.md`
- `checklist.md`
- `status.md`
- `issues.md`
- `ai-memory.md`
- `ai-handover.md`
- `evidence/`

## Maintenance Rules

- Update GitHub Project status and `REGISTER.md` in the same session.
- Keep `checklist.md`, `status.md`, and `issues.md` current for active work.
- Move completed packets to `completed/` and update `REGISTER.md`.
- Use `.github/PROJECT_README.md` when creating or refreshing the GitHub Project fields and views.
<!-- AIO:END managed/implementation-readme -->

## Local Notes

<!-- AIO:BEGIN user/implementation-readme-notes -->
- Add project-specific implementation-tracking notes or links here.
<!-- AIO:END user/implementation-readme-notes -->
