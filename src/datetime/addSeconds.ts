/**
 * Returns a datetime value corresponding to adding seconds to a datetime value.
 * @param {Date} dateFrom
 * @param {number} seconds
 * @return Date
 */

export const addSeconds = (dateFrom: Date, seconds: number): Date => {
  let ret = new Date();
  ret.setTime(dateFrom.getTime() + seconds * 1000);
  return ret;
};
