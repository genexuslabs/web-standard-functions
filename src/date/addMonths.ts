/**
 * Add months to a date
 * @param {Date} date
 * @param {number} months
 * @return Date
 */

import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "../date/core";

export const addMonths = (date: Date, months: number): Date => {
  if (date.getTime() === EMPTY_DATE_VALUE.getTime()) {
    return EMPTY_DATE_VALUE;
  } else {
    return DateTime.fromJSDate(date)
      .plus({ months: Math.trunc(months) })
      .toJSDate();
  }
};
