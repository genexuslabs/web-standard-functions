const atob = require("atob");
/**
 * Converts the given base64 encoded string to and ASCII string
 * @param {string} str64 Base64 encoded string
 * @return string The decodede ASCII string
 */
export const fromBase64 = (str64: string): string => {
  return atob(str64);
};
