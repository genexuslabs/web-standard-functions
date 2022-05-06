/**
 * Returns year for date
 * @param {Date} dateFrom
 * @return number
 */

import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "../date/core";

export const year = (dateFrom: Date): number => {
  return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
    ? 0
    : DateTime.fromJSDate(dateFrom).year;
};
