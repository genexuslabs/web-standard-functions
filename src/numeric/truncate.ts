import { GxBigDecimal } from "../types/gxBigDecimal";
/**
 * Truncates the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
export const truncate = (value: number | GxBigDecimal, digits: number): any => {
  if (value instanceof GxBigDecimal) {
    let valueStr = value.toString();

    if (valueStr.split(".")[0].length + 1 + digits >= 16 && digits !== 0) {
      return GxBigDecimal.truncate(value, digits);
    } else {
      const multiplier = Math.pow(10, digits || 0);
      return Number(Math.trunc(Number(valueStr) * multiplier) / multiplier);
    }
  } else {
    const multiplier = Math.pow(10, digits || 0);
    return Number(Math.trunc(value * multiplier) / multiplier);
  }
};
