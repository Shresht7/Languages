/** Converts a fraction into a percentage */
export const percentage = (fraction: number): number => fraction * 100

/** Returns the string representation of percentage */
export const percentageString = (fraction: number): string => percentage(fraction).toFixed(2) + '%'