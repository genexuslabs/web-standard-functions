import { GxBigNumber } from "../types/gxBigNumber";

/**
 * Returns an integer value representing the integer part of the received parameter.
 * @param {number} target
 * @returns number
 */
export const integer = (target: number | GxBigNumber): number => {
  if (target instanceof GxBigNumber) {
    return GxBigNumber.integer(target);
  } else {
    return Number(Math.trunc(target));
  }
};
