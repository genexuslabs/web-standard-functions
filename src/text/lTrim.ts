const regExp = /^ +/g;

/**
 * Trim leading spaces only
 * @param {string} value
 * @return string
 */

export const ltrim = (s: string): string => {
  return s.replace(regExp, "");
};
