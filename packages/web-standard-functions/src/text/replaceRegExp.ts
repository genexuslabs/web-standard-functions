/**
 * @param Returns a string resulting from replacing all the occurrences of pattern in target by repstr
 * @param replaceString
 * @return string
 */

export const replaceRegExp = (
  target: string,
  pattern: string | RegExp,
  repstr: string
): string => {
  let regularExp =
    typeof pattern === "string" ? new RegExp(pattern, "g") : pattern;
  return target.replace(regularExp, repstr);
};
