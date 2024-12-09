/**
 * Test a string against regexp
 * @param {string} target
 * @param {string} regExp
 * @return boolean
 */

import { GxRegEx } from "../types/gxRegEx";

export const isMatch = (target: string, regExp: string | RegExp): boolean => {
  try {
    new GxRegEx(0, "");
    let rex = typeof regExp === "string" ? new RegExp(regExp) : regExp;
    return rex.exec(target) !== null;
  } catch (err) {
    new GxRegEx(1, err.message);
    return null;
  }
};
