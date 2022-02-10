/**
 * Returns a Date from its parts
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {number} hour
 * @param {number} minutes
 * @param {number} seconds
 *  * @param {number} milliseconds
 * @return Date
 */

import { EMPTY_DATE_VALUE } from "../date/core";

export const newInstance = (
  year: number,
  month: number,
  day: number,
  hour: number,
  minutes: number,
  seconds: number,
  milliseconds?: number
): Date => {
  if (!milliseconds) {
    milliseconds = Number("000");
  }
  const ret = new Date(
    year,
    month - 1,
    day,
    hour,
    minutes,
    seconds,
    milliseconds
  );
  return ret.getFullYear() === year &&
    ret.getMonth() === month - 1 &&
    ret.getDate() === day &&
    ret.getHours() === hour &&
    ret.getMinutes() === minutes &&
    ret.getSeconds() === seconds &&
    ret.getMilliseconds() === milliseconds
    ? ret
    : EMPTY_DATE_VALUE;
};
