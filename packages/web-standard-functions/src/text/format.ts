import { rTrim } from "./rTrim";

/**
 * Formats a string by replacing the placeholders with the specified parameters
 * @param {string} str The format string
 * @param {any[]} args The replacement strings
 * @return string
 */

export const format = (str: string, ...args: any[]): string => {
  let result = str;
  for (let i = 0; i < args.length; i++) {
    result = result.replace(`%${i + 1}`, rTrim(args[i].toString()));
  }
  return result;
};
