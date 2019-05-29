/**
 * To add minutes to a datetime.
 * @param {Date} dateFrom
 * @param {number} minutes
 * @return Date
 */

export const addMinutes = (dateFrom: Date, minutes: number): Date => {
  let ret = new Date();
  ret.setTime(dateFrom.getTime() + minutes * 60000);
  return ret;
};
