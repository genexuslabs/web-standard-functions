/**
 * Returns a Date from its parts
 * @param {GxDate} targetDate
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @return Date
 */

import { EMPTY_DATE_VALUE } from "./core";
import { GxDate } from "../types/gxdate";

export const set = (
  targetDate: GxDate,
  year: number,
  month: number,
  day: number
): GxDate => {
  targetDate.setFullYear(year, month - 1, day);

  if (
    targetDate.getFullYear() !== year ||
    (targetDate.getMonth() !== month - 1 && targetDate.getDate() !== day)
  ) {
    targetDate.setTime(EMPTY_DATE_VALUE.getTime());
  }
  return targetDate;
};
