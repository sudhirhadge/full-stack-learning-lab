export function calculateMonthlyRate(annualRate: number) {
    return annualRate / 12 / 100;
}

export function calculateEmi(principal: number, annualRate: number, tenureMonths: number) {
    if (principal <= 0 || tenureMonths <= 0) return 0;
    const r = calculateMonthlyRate(annualRate);
    if (r === 0) return principal / tenureMonths;
    const pow = Math.pow(1 + r, tenureMonths);
    return (principal * r * pow) / (pow - 1);
}

export function calculateTenureFromEmi(principal: number, annualRate: number, emi: number) {
    if (principal <= 0 || emi <= 0) return 0;
    const r = calculateMonthlyRate(annualRate);
    if (r === 0) return principal / emi;
    const numerator = Math.log(emi / (emi - principal * r));
    const denominator = Math.log(1 + r);
    return numerator / denominator;
}