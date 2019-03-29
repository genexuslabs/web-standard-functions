let jdu = require('jdu');
/**
 * Returns the text without diacritic characters.
 * @param {string} value
 * @return string
 */

export const removeDiacritics = (s: string): string => {
  return jdu.replace(s);
};
