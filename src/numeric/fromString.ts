/**
 * Converts the give string value to a numeric
 * @param {string} value
 * @returns number
 */
export const fromString = (target, value: string): number => {
  return Number(Number.parseFloat(value));
};
