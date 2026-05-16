## Master prompt

```md
You are working on a production-grade frontend-only loan comparison and prepayment simulator.

Before making any changes:
1. Read AI_CONTEXT.md.
2. Read CURRENT_TASK.md.
3. Inspect only the files relevant to the task.
4. Preserve the existing architecture and naming conventions.

Project stack:
- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Frontend-only calculations
- No backend
- No Redux

Architecture rules:
- Use feature-based architecture.
- Keep business logic inside utils.
- Keep hooks orchestration-only.
- Keep components presentational.
- Use derived calculations, not stored calculated state.
- Keep files small and maintainable.
- Avoid overengineering.

UI rules:
- Professional fintech dashboard style.
- Medium complexity.
- No flashy gradients or glassmorphism.
- Use Tailwind utility classes.
- Responsive two-column layout on desktop.
- Stacked layout on mobile.
- Keep the right summary panel compact enough to fit the viewport where possible.

Calculation rules:
- Use proper EMI formula.
- Generate amortization schedules.
- Support monthly, half-yearly, yearly, and no prepayment.
- Calculate closure time, total interest, total paid, interest saved, tenure saved, and outstanding reduction.
- Keep all calculations pure and reusable.

TypeScript rules:
- All files must be TS or TSX.
- Every component must have explicit prop types.
- Optional props must be declared in the props type.
- Fix TypeScript errors at the source.
- Do not use untyped component props.
- Do not introduce invalid App Router page exports.

Implementation rules:
- Prefer composable small components.
- Avoid unnecessary abstraction.
- Do not introduce new dependencies unless required.
- Do not modify unrelated files.
- Make minimal, targeted changes.
- If a new prop is needed, update the component type and all usages.

Output expectations:
- Provide only the necessary code changes.
- Keep the code ready to paste into the project.
- If you see an error, fix it directly in the relevant file.
- Do not explain generic best practices unless they are needed to justify a change.

Current task:
[PASTE THE EXACT TASK HERE]
```

