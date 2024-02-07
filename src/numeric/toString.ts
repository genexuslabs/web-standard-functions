import { GxBigDecimal } from "../types/gxBigDecimal";

/**
 * Converts the give number to string
 * @param {number} value
 * @param {number} characters
 * @param {number} decimals
 * @returns string
 */
export const toString = (
  value: number | GxBigDecimal,
  characters: number,
  decimals: number
): string => {
  if (value instanceof GxBigDecimal) {
    return GxBigDecimal.toStringGx(value, characters, decimals);
  } else {
    return value.toFixed(decimals).padStart(characters);
  }
};
