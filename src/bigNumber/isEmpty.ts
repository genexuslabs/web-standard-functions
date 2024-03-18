import { GxBigNumber } from "../types/gxbignumber";
/**
 * Returns true if the received number represents the empty value (i.e., zero).
 * @param {GxBigNumber} target
 * @returns boolean
 */
export const isEmptyBigNumber = (target: GxBigNumber): boolean => {
  if (target.intNumberAll === BigInt(0)) {
    return true;
  } else {
    return false;
  }
};
