/**
 * Returns the seconds elapsed between two DateTime data type values.
 * @param {Date} dateFrom
 * @return number
 */

export const difference = (dateTo: Date, dateFrom: Date): number => {
  return (dateTo.getTime() - dateFrom.getTime()) / 1000;
};
