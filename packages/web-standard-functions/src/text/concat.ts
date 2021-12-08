import { rTrim } from "./rTrim";

/**
 * Concatenates the two given strings using the optional separator
 * @param {string} value1 First string
 * @param {string} value2 Second string
 * @param {string} separator Optional separator
 * @return string
 */

export const concat = (
  value1: string,
  value2: string,
  separator: string = undefined
): string => {
  return rTrim(value1) + (separator ? separator : "") + value2;
};
