/**
 * Returns the difference, in years, between the two parameters.
 * If the second parameter, which is optional, is omitted, then the default value is the value returned by the function Today()
 * @param {GxDate | GxDatetime} dateFrom
 * @param {GxDate | GxDatetime} dateTo
 * @return number
 */

import { DateTime } from "luxon";
import { today } from "../date/today";
import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";

export const age = (
  dateFrom: GxDate | GxDatetime,
  dateTo?: GxDate | GxDatetime
): number => {
  if (dateTo === undefined) {
    dateTo = today();
  }
  return Math.trunc(
    DateTime.fromJSDate(dateTo).diff(DateTime.fromJSDate(dateFrom), "years")
      .years
  );
};
