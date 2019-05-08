/**
 * Returns a Date from its parts
 * @param {Date} targetDate
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @return Date
 */

import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "./core";

export const set = (targetDate: Date, year: number, month: number, day: number): Date => {
  targetDate.setFullYear(year);
  targetDate.setMonth(month - 1);
  targetDate.setDate(day);
  if (targetDate.getFullYear() !== year || (targetDate.getMonth() !== month - 1) && targetDate.getDate() !== day) {
    targetDate.setTime(EMPTY_DATE_VALUE.getTime());
  }
  return targetDate;
};