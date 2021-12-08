/**
 * Return matches against regexp
 * @param {string} target
 * @param {string} regExp
 * @return Array
 */

export const matches = (
  target: string,
  rex: string | RegExp
): Array<string> => {
  return new RegExp(rex).exec(target) || [];
};
