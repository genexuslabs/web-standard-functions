/**
 * Converts the give number to string
 * @param {number} value
 * @param {number} characters
 * @param {number} decimals
 * @returns string
 */
export const toString = (
  value: number,
  characters: number,
  decimals: number
): string => {
  return value.toFixed(decimals).padStart(characters);
};
