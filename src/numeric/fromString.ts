/**
 * Converts the give string value to a numeric
 * @param {string} value
 * @returns number
 */
export const fromString = (target: number, value: string): number => {
  return Number.parseFloat(value);
};
