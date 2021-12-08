const regExp = / +$/g;

/**
 * Trim trailing spaces only
 * @param {string} value
 * @return string
 */

export const rTrim = (s: string): string => {
  return s.replace(regExp, "");
};
