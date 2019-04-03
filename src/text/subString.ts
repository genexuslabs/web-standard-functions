/**
 * Return a substring from a given string
 * @param startPosition
 * @param length
 * @return string
 */

let unicodeSubstring = require("unicode-substring");

export const subString = (
  target: string,
  startPosition: number,
  length?: number
): string => {
  if (length === undefined) {
    length = -1;
  }
  return length < 0
    ? unicodeSubstring(target, startPosition - 1)
    : unicodeSubstring(target, startPosition - 1, startPosition - 1 + length);
};
