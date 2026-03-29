---
id: api-security-best-practices
name: API Security Best Practices
description: Review API designs for authentication, authorization, validation, rate limiting, error handling, and data exposure risks.
category: Testing & Security
requires: []
examples:
  - "Review this API design for security gaps."
  - "What API security best practices matter for this endpoint?"
  - "Help me harden this public API surface."
---

# API Security Best Practices

Use this skill to review API designs and implementations for common security weaknesses before they become incidents.

## Start By Clarifying
- Who can call the API and from where.
- Which authentication and authorization model is in play.
- What data is sensitive or business-critical.
- Which endpoints are public, internal, privileged, or high-volume.
- What abuse scenarios are realistic for the system.

## Security Review Areas
- Authentication strength and token handling.
- Authorization checks tied to business rules.
- Input validation, payload size limits, and schema enforcement.
- Rate limiting, abuse resistance, and resource protection.
- Error handling that stays useful without leaking internals.
- Response shaping that avoids accidental data exposure.

## Good Output
- API-specific risks by severity.
- Missing controls or assumptions that need to be explicit.
- Safer default patterns for auth, validation, and responses.
- Verification ideas such as abuse-case tests or authorization checks.

## Common Mistakes
- Validating syntax but not ownership or permissions.
- Treating internal APIs as automatically trusted.
- Returning more data than the caller actually needs.
- Weak or inconsistent error semantics around auth and validation.
- Missing rate limits on endpoints that are easy to abuse.
