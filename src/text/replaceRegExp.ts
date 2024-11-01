/**
 * @param Returns a string resulting from replacing all the occurrences of pattern in target by repstr
 * @param replaceString
 * @return string
 */

import { GxRegEx } from "../types/gxRegEx";

export const replaceRegExp = (
  target: string,
  pattern: string | RegExp,
  repstr: string
): string => {
  try {
    new GxRegEx(0, "");
    let regularExp =
      typeof pattern === "string" ? new RegExp(pattern, "g") : pattern;
    return target.replace(regularExp, repstr);
  } catch (err) {
    new GxRegEx(1, err.message);
    return "";
  }
};
