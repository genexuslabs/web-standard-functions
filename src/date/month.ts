/**
 * Returns month for date
 * @param {Date} dateFrom
 * @return number
 */

import { DateTime } from "luxon";

export const month = (dateFrom: Date): number => {
  return DateTime.fromJSDate(dateFrom).month;
};
