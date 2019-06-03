/**
 * To return a DateTime data type value corresponding to the current date and time.
 * @return Date
 */

import { DateTime } from "luxon";
import { fromTimezone } from "./fromTimezone";
import { toUniversalTime } from "./toUniversalTime";
import { timezones } from "./timezone";
import { minutesToMilliseconds } from "./core";

export const now = (): Date => {
  let date = new Date();
  let offset = minutesToMilliseconds(date.getTimezoneOffset());

  return fromTimezone(
    toUniversalTime(new Date(date.getTime() + offset)),
    timezones.UTC
  );
};
