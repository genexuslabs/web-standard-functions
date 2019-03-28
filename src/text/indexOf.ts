import { length } from "./length";

/**
 * Return position for first pattern occurence.
 * @param {string} target
 * @param {string} pattern
 * @param {number} from
 * @return number
 */
 
 export const indexOf = (
  target: string,
  pattern: string,
  from: number
): number => {
  if (from < 1 || from > length(target)) return 0;
  console.log( from, from - 1);
  return target.indexOf(pattern, from - 1) + 1;
};
