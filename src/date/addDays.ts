/**
 * Add days to a date
 * @param {GxDate | GxDatetime} date
 * @param {number} days
 * @return any
 */

import { DateTime } from "luxon";
import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";

export const addDays = (date: GxDate | GxDatetime, days: number): any => {
  if (date instanceof GxDate) {
    return new GxDate(
      DateTime.fromJSDate(date)
        .plus({ days: Math.trunc(days) })
        .toJSDate()
    );
  } else if (date instanceof GxDatetime) {
    return new GxDatetime(
      DateTime.fromJSDate(date)
        .plus({ days: Math.trunc(days) })
        .toJSDate()
    );
  }
};
