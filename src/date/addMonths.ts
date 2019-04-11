/**
 * Add months to a date
 * @param {Date} date
 * @param {number} months
 * @return Date
 */

import { DateTime } from "luxon";

export const addMonths = (date: Date, months: number): Date => {
  return DateTime.fromJSDate(date)
    .plus({ months: Math.trunc(months) })
    .toJSDate();
};
