/**
 * Return character at position
 * @param {string} target
 * @param {number} from
 * @return {string}
 */

 export const charAt = (target: string, from: number): string => {
  let chars = Array.from(target);
  return from < 1 || from > chars.length ? "" : chars[from - 1];
};
