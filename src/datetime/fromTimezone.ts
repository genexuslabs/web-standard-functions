/**
 * This method converts a DateTime value from one timezone, to another.
 * The first one is passed as a parameter of the method, while the second one is the current timezone of the process executing the method.
 * @Param GxDatetime
 * @return GxDatetime
 */

import { DateTime } from "luxon";
import { getTimezone } from "./getTimezone";
import { minutesToMilliseconds } from "./core";
import { timezones } from "./timezone";
import { GxDatetime } from "../types/gxdatetime";

export const fromTimezone = (
  fromDate: GxDatetime,
  timezoneFrom: timezones
): GxDatetime => {
  let offsetFrom = DateTime.fromJSDate(fromDate).setZone(timezoneFrom).offset;
  let offsetTo = DateTime.fromJSDate(fromDate).setZone(getTimezone()).offset;
  return new GxDatetime(
    fromDate.getTime() + minutesToMilliseconds(offsetTo - offsetFrom)
  );
};
