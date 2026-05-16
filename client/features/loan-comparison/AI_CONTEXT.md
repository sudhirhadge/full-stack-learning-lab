Absolutely — here is a polished `AI_CONTEXT.md` you can keep at the root of the repo so any future AI can understand the project fast and make safe changes. [github](https://github.com/unctad-ai/create-ai-assisted-project/blob/main/AI_ASSISTANT.md)

## AI context file

```md
# AI_CONTEXT.md

## Project name
Loan Comparison & Prepayment Simulator

## Purpose
A frontend-only fintech dashboard that compares three loan scenarios side by side and calculates EMI, amortization, prepayment impact, closure time, savings, and tenure reduction in real time.

## Tech stack
- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- No backend
- No Redux
- No database
- No API layer

## Product rules
- This is a production-grade UI, not a demo.
- The feature must feel like a professional fintech tool.
- All calculations happen on the frontend.
- Derived values must not be stored in React state.
- Inputs must update results instantly.
- The UI should stay compact enough to fit the viewport on desktop.

## Core feature
The page has:
1. Left side panel with 3 editable loan scenarios.
2. Right side panel with real-time metrics summary.
3. Bottom comparison table with all three scenarios.
4. Optional monthly breakdown / amortization chart.

## Loan inputs per scenario
- Loan Amount
- Interest Rate
- EMI
- Tenure
- Yearly Prepayment
- Prepayment Frequency

## Calculations required
- EMI calculation using proper reducing-balance formula.
- Amortization schedule generation.
- Monthly interest and principal split.
- Monthly, yearly, and half-yearly prepayment handling.
- Early closure detection.
- Total interest paid.
- Total payment.
- Interest saved.
- Tenure saved.
- Outstanding reduction.

## Architecture rules
- Feature-based structure only.
- Business logic stays in `utils`.
- Hooks are only for orchestration.
- Components must remain presentational.
- Keep files small and focused.
- Prefer composition over abstraction.
- Avoid unnecessary global state.

## Folder structure
src/
app/
  loan-comparison/
    page.tsx

features/
  loan-comparison/
    components/
      layout/
      form/
      results/
      charts/
    hooks/
    utils/
    types/
    constants/

## Component conventions
- All files should be `.tsx` or `.ts` only.
- Every component must have explicit prop types.
- Optional props must be included in the props type.
- Client components must use `'use client'`.
- Server components should stay simple and import client layouts only when needed.

## Visual design rules
- Professional, enterprise fintech style.
- Medium complexity.
- No flashy gradients.
- No glassmorphism.
- Use Tailwind utility classes.
- Rounded cards, subtle borders, soft shadows.
- Responsive two-column desktop layout.
- Stacked mobile layout.
- Sticky summary on desktop if helpful.

## UI spacing rules
- Right panel must not grow too tall.
- Keep summary visible in the viewport where possible.
- Use compact cards and dense spacing.
- Allow internal scrolling only where necessary.
- Comparison table can be horizontally scrollable on small screens.

## File responsibilities
- `page.tsx`: route entry only.
- `layout/`: page composition.
- `form/`: loan input controls.
- `results/`: metric cards and comparison table.
- `charts/`: chart or monthly breakdown UI.
- `hooks/`: combine inputs and derived results.
- `utils/`: pure loan math and formatting.
- `types/`: shared TypeScript types.
- `constants/`: default scenarios and limits.

## Important implementation rules
- Never store calculated values in state.
- Use `useMemo` for derived scenario results.
- Keep calculations pure and reusable.
- Do not introduce Redux.
- Do not add backend code.
- Do not over-engineer the solution.
- Preserve readability and maintainability.

## Default scenarios
Use three scenarios:
- Conservative
- Balanced
- Aggressive

## Expected output from the feature
The feature should show:
- EMI
- Loan closure duration
- Total interest
- Total paid
- Interest saved
- Tenure reduction
- Outstanding reduction
- Optional amortization preview

## Safe change policy
When modifying this project:
- Read this file first.
- Keep changes targeted.
- Do not rewrite unrelated files.
- Preserve folder structure and naming.
- Prefer minimal diffs.
- Maintain existing calculation behavior unless explicitly requested.

## Prompt to give AI
Use this when starting a new AI session:

"Read AI_CONTEXT.md first. Then inspect only the files relevant to the task. Follow the architecture rules, keep calculations pure, and make minimal safe changes. Do not introduce Redux or backend code."
```

## Best way to use it

Put this file in your repo root and keep it updated whenever architecture changes. Then, before asking any future AI to work on the project, tell it to read this file first and only then inspect the specific feature files. [npmjs](https://www.npmjs.com/package/@unctad-ai/create-ai-assisted-project?activeTab=code)

## Extra suggestion

Also keep a second file called `CURRENT_TASK.md` for the exact change request. That helps future AI separate stable project context from the active work item. The combination of a stable brief plus a task-specific note is the most reliable handoff pattern for coding assistants. [refactoring](https://refactoring.fm/p/managing-context-for-ai-coding)

Would you like me to also create a matching `CURRENT_TASK.md` template for this project?