import { GxBigNumber } from "../types/gxbignumber";

/**
 * Returns an integer value representing the integer part of the received parameter.
 * @param {number} target
 * @returns number
 */
export const integer = (target: number | GxBigNumber): number => {
  if (target instanceof GxBigNumber) {
    return GxBigNumber.convertToInt(target);
  } else {
    return Number(Math.trunc(target));
  }
};
