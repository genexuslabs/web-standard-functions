/**
 * This method converts a DateTime value from one timezone, to another.
 * The first one is passed as a parameter of the method, while the second one is the current timezone of the process executing the method.
 * @Param Date
 * @return Date
 */

import { DateTime } from "luxon";
import { getTimezone } from "./getTimezone";
import { minuteToMiliseconds } from "./core";
import { timezones } from "./timezone";

export const fromTimezone = (fromDate: Date, timezoneFrom: timezones): Date => {
  let offsetFrom = DateTime.fromJSDate(fromDate).setZone(timezoneFrom).offset;
  let ret = new Date(fromDate.getTime());
  let offsetTo = -ret.getTimezoneOffset();
  ret.setTime(fromDate.getTime() + minuteToMiliseconds(offsetTo - offsetFrom));
  return ret;
};
