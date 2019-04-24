/**
 * Returns year for date
 * @param {Date} dateFrom
 * @return number
 */

import { DateTime } from "luxon";

export const year = (dateFrom: Date): number => {
  return DateTime.fromJSDate(dateFrom).year;
};
