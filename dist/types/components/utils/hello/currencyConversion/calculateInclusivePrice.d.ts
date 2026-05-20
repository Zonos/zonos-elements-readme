/**
 * Base item: $10
 * Duty: 10%
 * Taxes: 5%
 * Zonos Fee: 14%
 * Non-Zonos Fee: 7%
 *
 * Duty: $10 * 10% = $1
 * Taxes: ($10 + $1) * 5% = $0.55
 * Non-Zonos Fee: $10 * 7% = $0.7
 * Zonos Fee: ($1 + $0.55 + $0.7) * 14% = $0.315
 * Total: $10 + $1 + $0.55 + $0.7 + $0.315 = $12.565
 *
 * The calculation is performed as follows:
 * - Duty: amount * dutyBuffer
 * - Tax: (amount + duty) * taxBuffer
 * - Non-Zonos Fee: amount * nonZonosFee
 * - Zonos Fee: (duty + tax + nonZonosFee) * zonosFee
 * - Total: amount + duty + tax + nonZonosFee + zonosFee
 */
export declare const calculateInclusivePrice: ({ amount, dutyBuffer, nonZonosFee, taxBuffer, zonosFee, }: {
    amount: number;
    dutyBuffer: number;
    nonZonosFee: number;
    taxBuffer: number;
    zonosFee: number;
}) => number;
