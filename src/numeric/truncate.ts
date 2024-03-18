/**
 * Truncates the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
export const truncate = (value: number, digits: number): number => {
  const multiplier = Math.pow(10, digits || 0);
  return Number(Math.trunc(value * multiplier) / multiplier);
};
