import { GxBigDecimal } from "../types/gxBigDecimal";
/**
 * Rounds the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
export const round = (
  value: number | GxBigDecimal,
  digits: number
): number | GxBigDecimal => {
  let result: number | GxBigDecimal;

  if (value instanceof GxBigDecimal) {
    result = GxBigDecimal.round(value, digits);
  } else {
    if (digits === 0) {
      result = Number(value.toFixed(0));
    } else {
      if (digits > 0) {
        result = Number(
          Math.round(Number(value + "e" + digits)) + "e-" + digits
        );
      } else {
        const multiplier = Math.pow(10, Math.abs(digits) || 0);
        result = Number(Math.round(Number(value + "e" + digits)));
        result = result * multiplier;
      }
    }
  }

  return result;
};
