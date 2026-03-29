---
id: backend-security-coder
name: Backend Security Coder
description: Design and review secure backend code with practical guidance on input validation, authentication, authorization, secret handling, and API safety.
category: Testing & Security
requires: []
examples:
  - "Help me implement secure authentication for this API."
  - "Review this backend code for security vulnerabilities."
  - "What secure coding patterns should this backend endpoint use?"
---

# Backend Security Coder

Use this skill when building or reviewing backend logic that touches authentication, authorization, input validation, secrets, or high-risk data flows.

## Start By Clarifying
- What is the endpoint, service, or workflow supposed to do?
- Which inputs are untrusted?
- Which roles, identities, or permissions matter?
- What sensitive data or side effects are involved?
- What failure modes would be dangerous?

## Secure Backend Priorities
- Validate and constrain untrusted input.
- Enforce authentication and authorization separately and explicitly.
- Use safe query and storage patterns for sensitive data.
- Fail securely without leaking secrets or internals.
- Keep dangerous operations observable and reviewable.

## Implementation Lenses
- Input validation and allowlisting.
- Injection prevention for SQL, commands, templates, or downstream services.
- Authentication flow safety, session or token handling, and replay concerns.
- Authorization checks tied to business rules, not only route placement.
- Secret management, logging hygiene, rate limits, and abuse resistance.

## Good Output
- Security risks relevant to the specific backend path.
- Secure implementation or refactoring guidance.
- Verification ideas such as abuse-case tests or authorization checks.
- Gaps where more context is needed before recommending a pattern.

## Common Mistakes
- Treating authentication as authorization.
- Validating shape but not meaning or ownership.
- Logging secrets, tokens, or sensitive payloads.
- Trusting upstream systems too broadly.
- Returning detailed error information that helps attackers.
