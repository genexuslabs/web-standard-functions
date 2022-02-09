/**
 * Return a string adding N times of fillchar or blanks to the right side of target
 * @param length
 * @param fillChar
 * @return string
 */

export const padRight = (
  target: string,
  length: number,
  fillChar?: string
): string => {
  return target.padEnd(length, fillChar);
};
