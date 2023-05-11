/**
 * To return a DateTime data type value corresponding to the current date and time.
 * @return GxDatetime
 */

import { fromTimezone } from "./fromTimezone";
import { timezones } from "./timezone";
import { minutesToMilliseconds } from "./core";
import { GxDatetime } from "../types/gxdatetime";

export const now = (): GxDatetime => {
  let date = new GxDatetime();
  let offset = minutesToMilliseconds(date.getTimezoneOffset());
  return fromTimezone(new GxDatetime(date.getTime() + offset), timezones.UTC);
};
