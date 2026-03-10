---
category: Lifestyle
id: math-slop
name: Math Slop
description: Generate satirical "math slop" ragebait formulas that connect famous constants (φ, π, e, i) in trivially true but profound-looking equations. Outputs LaTeX.
examples:
  - Generate some math slop—connect φ, π, e, and i in a profound-looking but trivial equation
  - Create a ragebait math formula using Euler's identity and the golden ratio
  - Give me 3 math slop formulas in LaTeX that look deep but are trivially true
  - Make a meme-worthy equation combining famous constants (add zeros, multiply by ones)
  - Generate math slop that uses e^{iπ}+1=0 in a creative way
  - Create a "profound" formula that's actually just 0=0 or 1=1
required : []
---

# Math Slop

Generate single-line "ragebait" formulas that connect famous constants (φ, π, e, i, γ, τ) in ways that look profound but are trivially true. Output is LaTeX.

## When to Use

- User asks for "math slop," ragebait formulas, or meme math
- Generating equations that look deep but reduce to 0=0 or 1=1
- Combining famous constants for jokes or social posts

## Formula Types

- **Add zeros**: `(φ-φ)`, `ln(1)`, `e^{iπ}+1`, `sin(0)`
- **Multiply by ones**: `e^0`, `i⁴`, `sin²θ+cos²θ`
- **Both sides**: same constant added or multiplied on both sides
- **Euler mashups**: variations on e^{iπ}+1=0
- **Golden ratio**: φ² = φ+1 and variations

## Example Output

- `\varphi^{\ln e} = \varphi^{i^4}` → φ¹ = φ¹
- `e^{i\pi} + 1 + \gamma = 0 + \gamma` → Euler + γ both sides
- `\tau - 2\pi = e^{i\pi} + 1` → 0 = 0
- `\sqrt{2}^{\,2} = 2^{\sin^2 x + \cos^2 x}` → 2 = 2¹

## Script Usage

```bash
node scripts/generate-slop.js

# Multiple formulas
node scripts/generate-slop.js --count 5
```

## Rendering

Script outputs LaTeX. To render as an image:
- Online: latex.codecogs.com, quicklatex.com
- Local: pdflatex, mathjax, katex
