import { length } from "../text/length";

/**
 * Return position for last pattern occurence. Search is done backguard
 * @param {string} target
 * @param {string} pattern
 * @param {number} from
 * @return number
 */
export const lastIndexOf = (
  target: string,
  pattern: string,
  from?: number
): number => {
  if (from === undefined) {
    from = target.length;
  }
  if (from < 1 || from > length(target)) return 0;
  return target.lastIndexOf(pattern, from - 1) + 1;
};
