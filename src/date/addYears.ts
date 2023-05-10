/**
 * Add years to a date
 * @param {GxDate | GxDatetime} date
 * @param {number} years
 * @return any
 */

import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "../date/core";
import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";

export const addYears = (date: GxDate | GxDatetime, years: number): any => {
  if (date instanceof GxDate) {
    return date.getTime() === EMPTY_DATE_VALUE.getTime()
      ? new GxDate(EMPTY_DATE_VALUE)
      : DateTime.fromJSDate(date)
          .plus({ years: Math.trunc(years) })
          .toJSDate();
  } else if (date instanceof GxDatetime) {
    return date.getTime() === EMPTY_DATE_VALUE.getTime()
      ? new GxDatetime(EMPTY_DATE_VALUE)
      : DateTime.fromJSDate(date)
          .plus({ years: Math.trunc(years) })
          .toJSDate();
  }
};
