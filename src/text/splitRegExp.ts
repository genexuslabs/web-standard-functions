/**
 * @param Split the string using the pattern as splitter.
 * @param replaceString
 * @return string
 */

export const splitRegExp = (
  target: string,
  pattern: string | RegExp
): string[] => {
  let regularExp = typeof( pattern) === 'string' ? new RegExp( pattern) : pattern;
  return target.split(regularExp);
};
