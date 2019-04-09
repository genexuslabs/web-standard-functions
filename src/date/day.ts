/**
 * Returns day for date
 * @param {Date} dateFrom
 * @return number
 */


import { DateTime } from "luxon";

export const day = (dateFrom: Date): number  => {
  return DateTime.fromJSDate(dateFrom).day;
};
