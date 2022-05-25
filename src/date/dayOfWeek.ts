/**
 * Returns the number (1...7) of the day of the week. This number is associated with a day of the week (Sunday = 1).
 * @param {Date} dateFrom
 * @return number
 */

import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "../date/core";

export const dayOfWeek = (dateFrom: Date): number => {
  return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
    ? 0
    : (parseInt(DateTime.fromJSDate(dateFrom).toFormat("c"), 10) % 7) + 1;
};
