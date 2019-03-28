/**
 * Search string for pattern
 * @param {string} target
 * @param {string} pattern
 * @return Boolean
 */

export const contains = (target: string, pattern: string): Boolean => {
  return target.indexOf(pattern) !== -1;
};
