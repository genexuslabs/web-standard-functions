import { GxBigNumber } from "../types/gxBigNumber";

/**
 * Converts the give number to string
 * @param {number} value
 * @param {number} characters
 * @param {number} decimals
 * @returns string
 */
export const toString = (
  value: number | GxBigNumber,
  characters: number,
  decimals: number
): string => {
  if (value instanceof GxBigNumber) {
    return GxBigNumber.toStringGx(value, characters, decimals);
  } else {
    return value.toFixed(decimals).padStart(characters);
  }
};
