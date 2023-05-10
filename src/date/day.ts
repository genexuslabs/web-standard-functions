/**
 * Returns day for date
 * @param {GxDate | GxDatetime} dateFrom
 * @return number
 */

import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "../date/core";
import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";

export const day = (dateFrom: GxDate | GxDatetime): number => {
  return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
    ? 0
    : DateTime.fromJSDate(dateFrom).day;
};
