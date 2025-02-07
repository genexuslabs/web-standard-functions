/**
 * Return a substring from a given string
 * @param startPosition
 * @param length
 * @return string
 */

export const subString = (
  target: string,
  startPosition: number,
  length?: number
): string => {
  if (length === undefined) {
    length = -1;
  }

  return length < 0
    ? Array.from(target)
        .slice(startPosition - 1)
        .join("")
    : Array.from(target)
        .slice(startPosition - 1, startPosition - 1 + length)
        .join("");
};
