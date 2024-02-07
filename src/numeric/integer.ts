import { GxBigDecimal } from "../types/gxBigDecimal";

/**
 * Returns an integer value representing the integer part of the received parameter.
 * @param {number} target
 * @returns number
 */
export const integer = (target: number | GxBigDecimal): number => {
  if (target instanceof GxBigDecimal) {
    return GxBigDecimal.integer(target);
  } else {
    return Number(Math.trunc(target));
  }
};
