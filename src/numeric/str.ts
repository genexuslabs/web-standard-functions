import { padLeft } from "../text/padLeft";
import { GxBigDecimal } from "../types/gxBigDecimal";

/**
 * Converts the given number to string
 * @param {number} value
 * @param {number} length
 * @param {number} decimals
 * @returns string
 */
export const str = (
  value: number | GxBigDecimal,
  length: number = 10,
  decimals: number = 0
): string => {
  if (value instanceof GxBigDecimal) {
    return GxBigDecimal.str(value, length, decimals);
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
