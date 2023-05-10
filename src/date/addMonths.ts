/**
 * Add months to a date
 * @param {GxDate | GxDatetime} date
 * @param {number} months
 * @return any
 */

import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "../date/core";
import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";

export const addMonths = (date: GxDate | GxDatetime, months: number): any => {
  if (date instanceof GxDate) {
    if (date.getTime() === EMPTY_DATE_VALUE.getTime()) {
      return new GxDate(EMPTY_DATE_VALUE);
    } else {
      return DateTime.fromJSDate(date)
        .plus({ months: Math.trunc(months) })
        .toJSDate();
    }
  } else if (date instanceof GxDatetime) {
    if (date.getTime() === EMPTY_DATE_VALUE.getTime()) {
      return new GxDatetime(EMPTY_DATE_VALUE);
    } else {
      return DateTime.fromJSDate(date)
        .plus({ months: Math.trunc(months) })
        .toJSDate();
    }
  }
};
