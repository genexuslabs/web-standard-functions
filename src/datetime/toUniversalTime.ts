/**
 * This method applies to DateTime data type data, allowing you to convert its value to Coordinated Universal Time (UTC).
 * @Param GxDatetime
 * @return GxDatetime
 */

import { DateTime, fromJSDate } from "luxon";
import { getTimezone } from "./getTimezone";
import { minutesToMilliseconds } from "./core";
import { GxDatetime } from "../types/gxdatetime";

export const toUniversalTime = (fromDate: GxDatetime): GxDatetime => {
  let offset = DateTime.fromJSDate(fromDate).setZone(getTimezone()).offset;
  let ret = new GxDatetime();
  ret.setTime(fromDate.getTime() - minutesToMilliseconds(offset));
  return ret;
};
