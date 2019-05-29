/**
 * To add hours to a datetime.
 * @param {Date} dateFrom
 * @param {number} hours
 * @return Date
 */

export const addHours = (dateFrom: Date, hours: number): Date => {
  let ret = new Date();
  ret.setTime(dateFrom.getTime() + hours * 3600000);
  return ret;
};
