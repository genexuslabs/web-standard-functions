/**
 * Returns the last date of the month of the given date.
 * @param {Date} dateFrom
 * @return Date
 */

import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "../date/core";

export const endOfMonth = (dateFrom: Date): Date => {
  return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
    ? EMPTY_DATE_VALUE
    : new Date(
        dateFrom.getFullYear(),
        dateFrom.getMonth(),
        DateTime.fromJSDate(dateFrom).daysInMonth,
        dateFrom.getHours(),
        dateFrom.getMinutes(),
        dateFrom.getSeconds(),
        dateFrom.getMilliseconds()
      );
};
