/**
 * Returns a Date from its parts
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {number} hour
 * @param {number} minutes
 * @param {number} seconds
 * @param {number} milliseconds
 * @param {number} fy20c
 * @return GxDatetime
 */

import { EMPTY_DATE_VALUE } from "../date/core";
import { GxDatetime } from "../types/gxdatetime";

export const newInstance = (
  year: number,
  month: number,
  day: number,
  hour: number,
  minutes: number,
  seconds: number,
  milliseconds?: number,
  fy20c?: number
): GxDatetime => {
  if (!milliseconds || milliseconds === 0) {
    milliseconds = Number("000");
  }

  let ret;
  let yearAux = 0;

  if (!fy20c) {
    fy20c = 40;
  }

  // validate
  // Date
  if (year < 0 || 0 > month || month > 12 || 0 > day || day > 31) {
    year = 0;
    month = 0;
    day = 0;
  }
  // Time
  if (
    0 > hour ||
    hour >= 24 ||
    0 > minutes ||
    minutes >= 60 ||
    0 > seconds ||
    seconds >= 60 ||
    0 > milliseconds ||
    milliseconds >= 1000
  ) {
    hour = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
  }

  switch (year.toString().length) {
    case 2:
      if (year < fy20c) {
        yearAux = Number("20" + year.toString());
      }
      if (year >= fy20c) {
        yearAux = Number("19" + year.toString());
      }

      if (0 > hour || hour > 23) {
        hour = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        ret = new GxDatetime(yearAux, month - 1, day, 0, 0, 0, 0);
      } else {
        ret = new GxDatetime(
          yearAux,
          month - 1,
          day,
          hour,
          minutes,
          seconds,
          milliseconds
        );
      }

      break;

    case 1:
      if (year === 0) {
        yearAux = 2000;
      } else if (year < fy20c) {
        yearAux = Number("200" + year.toString());
      }

      if (0 > hour || hour > 23) {
        hour = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;

        if (year === 0 && month === 0 && day === 0) {
          ret = new GxDatetime(0, 0, 0, 0, 0, 0, 0);
        } else {
          ret = new GxDatetime(yearAux, month - 1, day, 0, 0, 0, 0);
        }
      } else {
        if (year === 0 && month === 0 && day === 0) {
          ret = new GxDatetime(0, 0, 0, hour, minutes, seconds, milliseconds);
        } else {
          ret = new GxDatetime(
            yearAux,
            month - 1,
            day,
            hour,
            minutes,
            seconds,
            milliseconds
          );
        }
      }
      break;

    case 4:
      yearAux = year;
      if (0 > hour || hour > 23) {
        hour = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        ret = new GxDatetime(yearAux, month - 1, day, 0, 0, 0, 0);
      } else {
        ret = new GxDatetime(
          yearAux,
          month - 1,
          day,
          hour,
          minutes,
          seconds,
          milliseconds
        );
      }
      break;

    default:
      break;
  }

  return (ret.getFullYear() === yearAux &&
    ret.getMonth() === month - 1 &&
    ret.getDate() === day &&
    ret.getHours() === hour &&
    ret.getMinutes() === minutes &&
    ret.getSeconds() === seconds &&
    ret.getMilliseconds() === milliseconds) ||
    (year === 0 &&
      day === 0 &&
      month === 0 &&
      ret.getHours() === hour &&
      ret.getMinutes() === minutes &&
      ret.getSeconds() === seconds &&
      ret.getMilliseconds() === milliseconds)
    ? ret
    : new GxDatetime(EMPTY_DATE_VALUE);
};
