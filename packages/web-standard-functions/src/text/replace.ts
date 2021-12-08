/**
 * @param Returns a string resulting from replacing all the occurrences of substr in target by repstr
 * @param replaceString
 * @return string
 */

export const replace = (
  target: string,
  substr: string,
  repstr: string
): string => {
  return target.replace(substr, repstr);
};
