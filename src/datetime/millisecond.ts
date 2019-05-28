/**
 * Returns milliseconds for datetime
 * @param {Date} dateFrom
 * @return number
 */

export const millisecond = (dateFrom: Date): number => {
  return dateFrom.getMilliseconds();
};
