/**
 * Converts the given string to base64 representation
 * @param {string} str Input string
 * @return string The base64 representation of the input string
 */
export const toBase64 = (str: string): string => {
  return btoa(str);
};
