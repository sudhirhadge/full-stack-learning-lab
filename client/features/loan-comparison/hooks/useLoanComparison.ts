'use client';

import { useMemo, useState } from 'react';
import { DEFAULT_SCENARIOS } from '../constants/loan';
import { LoanScenarioInput } from '../types/loan';
import { calculateScenario } from '../utils/comparison';

export function useLoanComparison() {
    const [scenarios, setScenarios] = useState<LoanScenarioInput[]>(DEFAULT_SCENARIOS);

    const results = useMemo(
        () => scenarios.map((scenario) => ({ scenario, result: calculateScenario(scenario) })),
        [scenarios]
    );

    const updateScenario = (id: string, patch: Partial<LoanScenarioInput>) => {
        setScenarios((current) =>
            current.map((scenario) => (scenario.id === id ? { ...scenario, ...patch } : scenario))
        );
    };

    return {
        scenarios,
        results,
        updateScenario,
    };
}