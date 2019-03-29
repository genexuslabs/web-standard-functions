/**
 * Test a string against regexp 
 * @param {string} target
 * @param {string} regExp
 * @return Boolean
 */

export const isMatch = (target: string, rex: string|RegExp): Boolean => {
  return (new RegExp(rex).exec(target)) !== null;
};
