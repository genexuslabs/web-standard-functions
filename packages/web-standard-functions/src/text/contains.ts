/**
 * Search string for pattern
 * @param {string} target
 * @param {string} pattern
 * @return boolean
 */

export const contains = (target: string, pattern: string): boolean => {
  return target.indexOf(pattern) !== -1;
};
