/**
 * Test Date for emptiness
 * @param {Date} target
 * @return boolean
 */

const EMPTY_DATE_VALUE = new Date(0, 0, 0, 0, 0, 0, 0);

export const isEmpty = (target: Date): boolean => {
  return target.getTime() === EMPTY_DATE_VALUE.getTime();
};
