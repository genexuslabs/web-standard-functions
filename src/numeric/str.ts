import { padLeft } from "../text/padLeft";
import { GxBigNumber } from "../types/gxBigNumber";

/**
 * Converts the given number to string
 * @param {number} value
 * @param {number} length
 * @param {number} decimals
 * @returns string
 */
export const str = (
  value: number | GxBigNumber,
  length: number = 10,
  decimals: number = 0
): string => {
  if (value instanceof GxBigNumber) {
    return GxBigNumber.str(value, length, decimals);
  } else {
    let result = value.toFixed(decimals);
    if (result.length > length) {
      if (decimals === 0) {
        return padLeft("", length, "*");
      } else {
        return str(value, length, 0);
      }
    } else {
      return padLeft(result, length, " ");
    }
  }
};
