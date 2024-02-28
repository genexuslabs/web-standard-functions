import { GxBigNumber } from "../types/gxbignumber";
/**
 * Rounds the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
export const round = (value: number | GxBigNumber, digits: number): any => {
  let result: number | GxBigNumber;

  if (value instanceof GxBigNumber) {
    result = GxBigNumber.round(value, digits);
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
