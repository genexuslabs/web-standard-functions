/**
 * Converts the given string to a boolean value
 * @param str Input string
 */

export const fromString = (str: string): boolean => {
  return str.toLowerCase() === "true";
};
