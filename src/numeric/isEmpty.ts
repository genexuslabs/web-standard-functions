import { GxBigNumber } from "../types/gxBigNumber";
/**
 * Returns true if the received number represents the empty value (i.e., zero).
 * @param {number} target
 * @returns boolean
 */
export const isEmpty = (target: number | GxBigNumber): boolean => {
  if (target instanceof GxBigNumber) {
    return GxBigNumber.isEmpty(target);
  } else {
    return target === 0;
  }
};
