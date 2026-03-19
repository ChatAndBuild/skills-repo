---
category: Lifestyle
id: cat-fact
name: Cat Fact
description: Random cat facts and breed information from catfact.ninja (free, no API key).
requires: [Read, Bash]
examples:
  - Tell me a random cat fact
  - Look up cat breeds from catfact.ninja
  - Give me a short cat fact (max 100 chars)
  - I need a fun cat fact for my bot
---

# Cat Fact

Random cat facts from catfact.ninja (no API key required).

## Usage

```bash
# Get a random cat fact
curl -s "https://catfact.ninja/fact"

# Get a random fact (short)
curl -s "https://catfact.ninja/fact?max_length=100"

# Get cat breeds
curl -s "https://catfact.ninja/breeds?limit=5"
```

## Programmatic (JSON)

```bash
curl -s "https://catfact.ninja/fact" | jq '.fact'
```

## One-liner examples

```bash
# Random fact
curl -s "https://catfact.ninja/fact" --header "Accept: application/json" | jq -r '.fact'

# Multiple facts
for i in {1..3}; do curl -s "https://catfact.ninja/fact" --header "Accept: application/json" | jq -r '.fact'; done
```

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /fact` | Random cat fact |
| `GET /breeds` | List of cat breeds |

Docs: https://catfact.ninja
