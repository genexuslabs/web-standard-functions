/**
 * Returns a datetime value corresponding to adding seconds to a datetime value.
 * @param {GxDatetime} dateFrom
 * @param {number} seconds
 * @return GxDatetime
 */

import { secondsToMilliseconds } from "./core";
import { EMPTY_DATE_VALUE } from "../date/core";
import { GxDatetime } from "../types/gxdatetime";

export const addSeconds = (
  dateFrom: GxDatetime,
  seconds: number
): GxDatetime => {
  return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
    ? new GxDatetime(EMPTY_DATE_VALUE)
    : new GxDatetime(
        new Date(dateFrom.getTime() + secondsToMilliseconds(seconds))
      );
};
