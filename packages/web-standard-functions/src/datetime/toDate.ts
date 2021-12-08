/**
 * To return a Date data type corresponding to a given DateTime data type.
 * @param {Date} dateFrom
 * @return Date
 */

export const toDate = (dateFrom: Date): Date => {
  return new Date(
    dateFrom.getFullYear(),
    dateFrom.getMonth(),
    dateFrom.getDate()
  );
};
