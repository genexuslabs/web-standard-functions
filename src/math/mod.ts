import { GxBigNumber } from "../types/gxbignumber";

/**
 * @param {number} dividend
 * @param {number} divisor
 * @returns number
 */
export const mod = (
  dividend: number | GxBigNumber,
  divisor: number | GxBigNumber
): number => {
  if (dividend instanceof GxBigNumber) {
    dividend = Number(dividend.toString());
  }
  if (divisor instanceof GxBigNumber) {
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
