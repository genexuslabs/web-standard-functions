/**
 * Return a string adding N times of fillchar or blanks to the left side of target
 * @param length
 * @param fillChar
 * @return string
 */

export const padLeft = (
  target: string,
  length: number,
  fillChar?: string
): string => {
  let res = "";

  if (length === 0) {
    res = "";
  } else {
    res = target.padStart(length, fillChar);
  }
  return res;
};
