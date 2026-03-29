---
id: validating-api-contracts
name: Validating API Contracts
description: Validate API contracts for compatibility, schema correctness, and breaking changes using specification-aware review principles.
category: Testing & Security
requires: []
examples:
  - "Validate this API against its OpenAPI spec."
  - "Check whether this API change is backward compatible."
  - "Help me review this contract change between consumer and provider."
---

# Validating API Contracts

Use this skill to review whether an API contract is clear, compatible, and safely evolving.

## What To Compare
- Declared request and response schemas.
- Required versus optional fields.
- Status codes and error shapes.
- Enum, format, and nullability changes.
- Authentication, headers, and versioning expectations.

## Review Questions
- Would an existing consumer break because of this change?
- Are the documented types and the real behavior aligned?
- Are there hidden assumptions around defaults, ordering, or missing fields?
- Does the error contract remain consistent enough for callers to handle safely?
- Is the compatibility story explicit for both consumers and providers?

## Good Output
- Breaking versus non-breaking changes.
- Ambiguities or undocumented behavior.
- Gaps between implementation intent and documented contract.
- Suggested compatibility strategy or rollout notes.

## Common Breaking Changes
- Making a previously optional field required.
- Changing data types or enum meanings.
- Removing status codes or changing error payload shape.
- Returning looser or stricter data than consumers rely on.

## Boundaries
- Do not pretend to generate or run contract tests automatically.
- Focus on compatibility reasoning, schema review, and rollout guidance.
