import { GxBigNumber } from "../types/gxbignumber";

/**
 * Converts the give string value to a numeric
 * @param {string} value
 * @returns GxBigNumber
 */
export const fromStringBigNumber = (target, value: string): GxBigNumber => {
  return new GxBigNumber(value);
};
