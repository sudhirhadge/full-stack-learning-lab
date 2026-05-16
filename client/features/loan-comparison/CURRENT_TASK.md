# CURRENT_TASK.md

## Task name
Loan Comparison & Prepayment Simulator — current implementation task

## Goal
Implement the current change request without breaking the existing architecture, TSX typing, or frontend-only calculation flow.

## Current focus
- [ ] Describe the exact change being requested right now.

## Relevant context
- Read `AI_CONTEXT.md` first.
- This is a frontend-only Next.js App Router feature.
- Use React 19, TypeScript, and Tailwind CSS.
- Keep calculations derived, not stored in state.
- Keep business logic in `utils`.
- Keep hooks orchestration-only.
- Keep components presentational.
- Do not introduce Redux or backend code.

## Files likely involved
- `src/app/loan-comparison/page.tsx`
- `src/features/loan-comparison/components/layout/LoanComparisonLayout.tsx`
- `src/features/loan-comparison/components/form/LoanScenarioForm.tsx`
- `src/features/loan-comparison/components/form/InputField.tsx`
- `src/features/loan-comparison/components/results/ResultCard.tsx`
- `src/features/loan-comparison/components/results/MetricItem.tsx`
- `src/features/loan-comparison/components/results/ComparisonTable.tsx`
- `src/features/loan-comparison/components/results/SectionContainer.tsx`
- `src/features/loan-comparison/components/charts/LoanAmortizationChart.tsx`
- `src/features/loan-comparison/hooks/useLoanComparison.ts`
- `src/features/loan-comparison/utils/*.ts`

## Acceptance criteria
- TypeScript compiles cleanly.
- No TSX prop errors.
- UI remains responsive.
- Layout stays viewport-friendly on desktop.
- Existing calculations continue to work correctly.
- Changes are minimal and focused.

## Implementation notes
- Use `useMemo` for derived calculations.
- Avoid storing computed metrics in React state.
- Add optional props explicitly to type definitions.
- Keep the right summary panel compact.
- Allow internal scrolling only where necessary.

## Done when
- The requested feature or fix works.
- No unrelated files were rewritten.
- Existing architecture is preserved.