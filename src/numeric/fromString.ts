import { GxBigNumber } from "../types/gxBigNumber";

/**
 * Converts the give string value to a numeric
 * @param {string} value
 * @returns number
 */
export const fromString = (
  target: number | GxBigNumber,
  value: string
): any => {
  if (value.length >= 16) {
    return new GxBigNumber(value);
  } else {
    return Number(Number.parseFloat(value));
  }
};
