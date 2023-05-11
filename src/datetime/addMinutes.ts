/**
 * To add minutes to a datetime.
 * @param {GxDatetime} dateFrom
 * @param {number} minutes
 * @return GxDatetime
 */

import { GxDatetime } from "../types/gxdatetime";
import { minutesToMilliseconds } from "./core";

export const addMinutes = (
  dateFrom: GxDatetime,
  minutes: number
): GxDatetime => {
  return new GxDatetime(dateFrom.getTime() + minutesToMilliseconds(minutes));
};
