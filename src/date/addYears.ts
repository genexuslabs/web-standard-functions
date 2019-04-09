/**
 * Add years to a date
 * @param {Date} date
 * @param {number} years
 * @return Date
 */

import { DateTime } from "luxon";

export const addYears = (date: Date, years: number): Date  => {
  return DateTime.fromJSDate(date).plus({years:Math.trunc(years)}).toJSDate();
};
