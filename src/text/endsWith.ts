/**
 * Search string for trailing pattern
 * @param {string} target
 * @param {string} pattern
 * @return boolean
 */

export const endsWith = (target: string, pattern: string): boolean => {
  return target.endsWith(pattern);
};
