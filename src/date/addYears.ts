/**
 * Add years to a date
 * @param {Date} date
 * @param {number} years
 * @return Date
 */

import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "../date/core";

export const addYears = (date: Date, years: number): Date => {
  return date.getTime() === EMPTY_DATE_VALUE.getTime()
    ? EMPTY_DATE_VALUE
    : DateTime.fromJSDate(date)
        .plus({ years: Math.trunc(years) })
        .toJSDate();
};
