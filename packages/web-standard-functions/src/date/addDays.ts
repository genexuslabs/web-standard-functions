/**
 * Add days to a date
 * @param {Date} date
 * @param {number} days
 * @return Date
 */

import { DateTime } from "luxon";

export const addDays = (date: Date, days: number): Date => {
  return DateTime.fromJSDate(date)
    .plus({ days: Math.trunc(days) })
    .toJSDate();
};
