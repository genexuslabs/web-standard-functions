/**
 * This method applies to DateTime data type data, allowing you to convert its value to Coordinated Universal Time (UTC).
 * @Param Date
 * @return Date
 */

import { DateTime, fromJSDate } from "luxon";
import { getTimezone } from "./getTimezone";
import { minutesToMilliseconds } from "./core";

export const toUniversalTime = (fromDate: Date): Date => {
  let offset = DateTime.fromJSDate(fromDate).setZone(getTimezone()).offset;
  let ret = new Date();
  ret.setTime(fromDate.getTime() - minutesToMilliseconds(offset));
  return ret;
};
