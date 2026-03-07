---
category: Lifestyle
id: proof-theory
name: proof-theory
description: Problem-solving strategies for proof theory in mathematical logic.
requires: [Bash, Read]
examples:
  - Prove this formula using induction; run the base and step checks
  - Which proof strategy should I use here—direct, contradiction, or cases?
  - Verify each step of this proof and flag any invalid inferences
  - Help me set up a structural induction for this definition
  - Check soundness for this proof system / these derivation rules
  - Eliminate cuts in this sequent proof and show the normal form
  - Walk me through a direct proof (premises to conclusion)
---


# Proof Theory

## When to Use

Use this skill when working on proof-theory problems in mathematical logic.

## Decision Tree


1. **Proof Strategy Selection**
   - Direct proof: assume premises, derive conclusion
   - Proof by contradiction: assume negation, derive false
   - Proof by cases: split on disjunction
   - Induction: base case + inductive step

2. **Structural Induction**
   - Define well-founded ordering on structures
   - Base: prove for minimal elements
   - Step: assume for smaller, prove for current
   - `z3_solve.py prove "induction_principle"`

3. **Cut Elimination**
   - Gentzen's Hauptsatz: cuts can be eliminated
   - Subformula property: only subformulas appear
   - Useful for proof normalization

4. **Completeness/Soundness Check**
   - Soundness: if provable then valid
   - Completeness: if valid then provable
   - `z3_solve.py prove "soundness_theorem"`

5. **Proof Verification**
   - Check each step follows from rules
   - Verify dependencies are satisfied
   - `math_scratchpad.py verify "proof_steps"`


## Tool Commands

### Z3_Induction_Base
```bash
uv run python -m runtime.harness scripts/cc_math/z3_solve.py prove "P(0)"
```

### Z3_Induction_Step
```bash
uv run python -m runtime.harness scripts/cc_math/z3_solve.py prove "ForAll([n], Implies(P(n), P(n+1)))"
```

### Z3_Soundness
```bash
uv run python -m runtime.harness scripts/cc_math/z3_solve.py prove "Implies(derivable(phi), valid(phi))"
```

### Math_Verify
```bash
uv run python -m runtime.harness scripts/cc_math/math_scratchpad.py verify "proof_structure"
```

## Cognitive Tools Reference

See `.claude/skills/math-mode/SKILL.md` for full tool documentation.
