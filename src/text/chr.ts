/**
 * Returns the character correspondinf to the specified ASCII value
 * @param {number} val The ASCII value to convert to string
 * @returns The string with the character defined by the given ASCII value
 */
export const chr = (val: number): string => {
  if (val >= 0) {
    return String.fromCharCode(val);
  } else {
    return "";
  }
};
