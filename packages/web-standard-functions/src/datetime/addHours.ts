/**
 * To add hours to a datetime.
 * @param {Date} dateFrom
 * @param {number} hours
 * @return Date
 */

import { hoursToMilliseconds } from "./core";

export const addHours = (dateFrom: Date, hours: number): Date => {
  return new Date(dateFrom.getTime() + hoursToMilliseconds(hours));
};
