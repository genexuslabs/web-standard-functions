/**
 * Returns an integer value representing the integer part of the received parameter.
 * @param {number} target
 * @returns number
 */
export const integer = (target: number): number => {
  return Math.trunc(target);
};
