/**
 * Search string for trailing pattern
 * @param {string} target
 * @param {string} pattern
 * @return Boolean
 */

export const endsWith = (target: string, pattern: string): Boolean => {
  return target.endsWith(pattern);
};
