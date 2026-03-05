---
id: changelog-automation
name: Changelog Automation
description: Generate and maintain release changelogs from merged work with consistent formatting, version scope, and verification checks.
category: DevOps
requires:
  - github
examples:
  - Generate a release changelog from merged pull requests since the last tag.
  - Propose an automated changelog workflow with category grouping and verification.
---

# Changelog Automation

Automate changelog creation while keeping release notes accurate and auditable.

## When to Use

- You need consistent release notes across frequent deployments.
- You want changelog entries grouped by meaningful change categories.
- You need a review step to prevent misleading release notes.

## Workflow

1. Define release scope (tag/range/date).
2. Collect merged changes and classify by type.
3. Draft changelog sections with concise impact-focused language.
4. Flag breaking changes and migration notes explicitly.
5. Run a verification pass before publish.

## Output Format

```markdown
## Release <version>

### Added
- <entry>

### Changed
- <entry>

### Fixed
- <entry>

### Breaking Changes
- <entry or none>
```
