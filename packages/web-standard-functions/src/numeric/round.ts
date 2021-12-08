/**
 * Rounds the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
export const round = (value: number, digits: number): number => {
  const multiplier = Math.pow(10, digits || 0);
  return Math.round(value * multiplier) / multiplier;
};
