/**
 * Returns minute for datetime
 * @param {Date} dateFrom
 * @return number
 */

export const minute = (dateFrom: Date): number => {
  return dateFrom.getMinutes();
};
