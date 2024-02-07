import { GxBigDecimal } from "../types/gxBigDecimal";

/**
 * Converts the give string value to a numeric
 * @param {string} value
 * @returns number
 */
export const fromString = (
  target: number | GxBigDecimal,
  value: string
): any => {
  if (value.length >= 16 && value.split(".")[1].length > 0) {
    return new GxBigDecimal(value);
  } else {
    return Number(Number.parseFloat(value));
  }
};
