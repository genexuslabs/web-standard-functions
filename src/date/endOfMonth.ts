/**
 * Returns the last date of the month of the given date.
 * @param {Date} dateFrom
 * @return Date
 */

import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "../date/core";
import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";

export const endOfMonth = (dateFrom: GxDate | GxDatetime): any => {
  if (dateFrom instanceof GxDate) {
    return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
      ? new GxDate(EMPTY_DATE_VALUE)
      : new GxDate(
          dateFrom.getFullYear(),
          dateFrom.getMonth(),
          DateTime.fromJSDate(dateFrom).daysInMonth,
          dateFrom.getHours(),
          dateFrom.getMinutes(),
          dateFrom.getSeconds(),
          dateFrom.getMilliseconds()
        );
  } else if (dateFrom instanceof GxDatetime) {
    return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
      ? new GxDatetime(EMPTY_DATE_VALUE)
      : new GxDatetime(
          dateFrom.getFullYear(),
          dateFrom.getMonth(),
          DateTime.fromJSDate(dateFrom).daysInMonth,
          dateFrom.getHours(),
          dateFrom.getMinutes(),
          dateFrom.getSeconds(),
          dateFrom.getMilliseconds()
        );
  }
};
