---
category: Lifestyle
id: book-haircut
name: Book Haircut
description: Book haircut services through Lokuli MCP.
requires: [Read, Bash]
examples:
  - Find haircut places near me / in zip 90640
  - Check availability for a salon next Tuesday
  - Book a haircut appointment for 2pm tomorrow
---

# Book haircut

Book haircut services through Lokuli's MCP server.

## Workflow

1. **search** — By query (e.g. "haircut") and zip code. Use the returned `providerId` and `serviceId` (and any slot/service details) for the next steps.
2. **check_availability** — Use a chosen provider and service from search, plus a date. Surface available time slots to the user.
3. **create_booking** — Use the chosen `timeSlot` and the user’s name, email, and phone to create the booking.

If a request fails, surface the server’s error message to the user.

## MCP Endpoint

```
https://lokuli.com/mcp/sse
```

Transport: SSE | JSON-RPC 2.0 | POST requests

## Tools

### search
```json
{
  "method": "tools/call",
  "params": {
    "name": "search",
    "arguments": {
      "query": "haircut",
      "zipCode": "90640",
      "maxResults": 20
    }
  }
}
```

### check_availability

Use `providerId` and `serviceId` from **search** results.

```json
{
  "method": "tools/call",
  "params": {
    "name": "check_availability",
    "arguments": {
      "providerId": "xxx",
      "serviceId": "yyy",
      "date": "2025-02-10"
    }
  }
}
```

### create_booking

Use `providerId` and `serviceId` from **search**; `timeSlot` from **check_availability** (or user choice). Collect customer name, email, and phone from the user.

```json
{
  "method": "tools/call",
  "params": {
    "name": "create_booking",
    "arguments": {
      "providerId": "xxx",
      "serviceId": "yyy",
      "timeSlot": "2025-02-10T14:00:00-08:00",
      "customerName": "John Doe",
      "customerEmail": "john@example.com",
      "customerPhone": "+13105551234"
    }
  }
}
```
