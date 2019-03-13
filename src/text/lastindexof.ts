import { length } from "../text/length";

export const lastIndexOf = (
  target: string,
  pattern: string,
  from: number
): number => {
  if (from < 1 || from > length(target)) return 0;
  return target.lastIndexOf(pattern, from - 1) + 1;
};
