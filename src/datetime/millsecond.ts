/**
 * Returns milliseconds for datetime
 * @param {Date} dateFrom
 * @return number
 */

export const second = (dateFrom: Date): number => {
  return dateFrom.getMilliseconds();
};
