/**
 * Return a string adding N times of fillchar or blanks to the left side of target
 * @param length
 * @param fillChar
 * @return string
 */

export const padLeft = (
  target: string,
  length: number,
  fillChar: string
): string => {
  return target.padStart(length, fillChar);
};
