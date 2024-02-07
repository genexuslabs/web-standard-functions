import { GxBigDecimal } from "../types/gxBigDecimal";

/**
 * @param {number} dividend
 * @param {number} divisor
 * @returns number
 */
export const mod = (
  dividend: number | GxBigDecimal,
  divisor: number | GxBigDecimal
): number => {
  if (dividend instanceof GxBigDecimal) {
    dividend = Number(dividend.toString());
  }
  if (divisor instanceof GxBigDecimal) {
    divisor = Number(divisor.toString());
  }

  if (dividend === 0) {
    return undefined;
  } else {
    if (dividend > 0) {
      return Math.trunc(Math.abs(dividend) % Math.abs(divisor));
    } else {
      return -Math.trunc(Math.abs(dividend) % Math.abs(divisor));
    }
  }
};
