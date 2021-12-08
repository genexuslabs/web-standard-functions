/**
 * Returns the last date of the month of the given date.
 * @param {Date} dateFrom
 * @return Date
 */

import { DateTime } from "luxon";

export const endOfMonth = (dateFrom: Date): Date => {
  return new Date(
    dateFrom.getFullYear(),
    dateFrom.getMonth(),
    DateTime.fromJSDate(dateFrom).daysInMonth
  );
};
