import { GxBigDecimal } from "../types/gxBigDecimal";
/**
 * Returns true if the received number represents the empty value (i.e., zero).
 * @param {number} target
 * @returns boolean
 */
export const isEmpty = (target: number | GxBigDecimal): boolean => {
  if (target instanceof GxBigDecimal) {
    return GxBigDecimal.isEmpty(target);
  } else {
    return target === 0;
  }
};
