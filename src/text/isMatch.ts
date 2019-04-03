/**
 * Test a string against regexp
 * @param {string} target
 * @param {string} regExp
 * @return boolean
 */

export const isMatch = (target: string, regExp: string | RegExp): boolean => {
  let rex = typeof regExp === "string" ? new RegExp(regExp) : regExp;
  return rex.exec(target) !== null;
};
