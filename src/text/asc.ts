/**
 * Returns the ASCII value of the first character in the string
 * @param {string} str The string to convert to ASCII
 * @returns The ASCII value of the first character in the string
 */
export const asc = (str: string): number => {
  if (Array.from(str).length === 0) {
    return undefined;
  }
  const asc = str.charCodeAt(0);
  return asc < 128 ? asc : undefined;
};
