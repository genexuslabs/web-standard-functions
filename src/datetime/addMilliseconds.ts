/**
 * Returns a DateTime value corresponding to adding milliseconds to a DateTime data type value.
 * @param {Date} dateFrom
 * @param {number} millisecconds
 * @return Date
 */

export const addMilliseconds = (dateFrom: Date, milliseconds: number): Date => {
  let ret = new Date();
  ret.setTime(dateFrom.getTime() + milliseconds);
  return ret;
};
