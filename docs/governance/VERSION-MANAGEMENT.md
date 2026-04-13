<!-- AIO:BEGIN managed/version-management -->
# Version Management

> **Effective Date**: 2026-04-13
> **Enforcement**: Hard — releases must follow this process

---

## Versioning Scheme

This project uses **Semantic Versioning 2.0.0** (`MAJOR.MINOR.PATCH`):

| Component | When to increment | Example |
|-----------|-------------------|---------|
| `MAJOR` | Breaking changes to public API or contracts | `1.0.0` -> `2.0.0` |
| `MINOR` | New features, backwards-compatible | `1.0.0` -> `1.1.0` |
| `PATCH` | Bug fixes, backwards-compatible | `1.0.0` -> `1.0.1` |

### Pre-release versions

| Stage | Format | Example |
|-------|--------|---------|
| Alpha (unstable) | `X.Y.Z-alpha.N` | `1.0.0-alpha.1` |
| Beta (feature-complete) | `X.Y.Z-beta.N` | `1.0.0-beta.3` |
| Release candidate | `X.Y.Z-rc.N` | `1.0.0-rc.1` |

---

## Source of Truth


- **`package.json`** is the single source of truth for the current version.
- All other references (README badges, docs, etc.) must derive from it.
- Never hardcode version numbers in source code — import from `package.json` or use build-time substitution.


---

## Changelog


Maintain a `CHANGELOG.md` at the project root following [Keep a Changelog](https://keepachangelog.com/) format:

```markdown
# Changelog

## [Unreleased]

### Added
- New feature description

### Changed
- Modified behaviour description

### Fixed
- Bug fix description

## [1.0.0] - 2026-04-13

### Added
- Initial release
```

### Changelog rules

1. **Every PR** must add an entry under `[Unreleased]`.
2. **Categories**: Added, Changed, Deprecated, Removed, Fixed, Security.
3. **User-facing language** — Write for users, not developers.
4. **No empty releases** — Every version must have at least one entry.


---

## Branching & Release Process


| Branch | Purpose | Naming |
|--------|---------|--------|
| `main` | Production-ready code | Fixed name |
| Feature branches | In-progress work | `feature/FEAT-NNN-short-description` |
| Fix branches | Bug fixes | `fix/short-description` |
| Release branches | Release preparation | `release/X.Y.Z` |

### Release checklist

1. All tests pass on the release branch
2. `CHANGELOG.md` updated — move `[Unreleased]` entries to the new version
3. Version bumped in `package.json`
4. Tag created: `vX.Y.Z`
5. `project/CURRENT_STATE.md` updated
6. Archive superseded documents per `ARCHIVING.md` (if applicable)


---

## Forbidden Practices

| Practice | Why it's banned | Correct approach |
|----------|----------------|-----------------|
| Version in filename (`report-v2.md`) | Creates file proliferation | Use version metadata inside the file |
| `-final`, `-final-v2` suffixes | Semantically meaningless | Use version numbers |
| Copying a file to "back it up" | Creates orphan copies | Use git history |
| Skipping changelog entries | Makes releases opaque | Every change gets an entry |
| Manual version bumps in multiple files | Drift risk | Single source of truth |
<!-- AIO:END managed/version-management -->

## Project Notes

<!-- AIO:BEGIN user/version-management-notes -->
- Add release-channel notes, deployment owners, or repo-specific release references here.
<!-- AIO:END user/version-management-notes -->
