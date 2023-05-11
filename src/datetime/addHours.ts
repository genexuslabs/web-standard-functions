/**
 * To add hours to a datetime.
 * @param {GxDatetime} dateFrom
 * @param {number} hours
 * @return Date
 */

import { GxDatetime } from "../types/gxdatetime";
import { hoursToMilliseconds } from "./core";

export const addHours = (dateFrom: GxDatetime, hours: number): GxDatetime => {
  return new GxDatetime(dateFrom.getTime() + hoursToMilliseconds(hours));
};
