import { GxBigNumber } from "../types/gxbignumber";

/**
 * Returns an integer value representing the integer part of the received parameter.
 * @param {GxBigNumber} target
 * @returns GxBigNumber
 */
export const integerBigNumber = (
  target: number | GxBigNumber | string
): GxBigNumber => {
  return GxBigNumber.convertToInt(target);
};
