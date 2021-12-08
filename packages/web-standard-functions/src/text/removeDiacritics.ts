/**
 * Returns the text without diacritic characters.
 * @param {string} value
 * @return string
 */

import * as jdu from "jdu";

export const removeDiacritics = (s: string): string => {
  return jdu.replace(s);
};
