/**
 * To add minutes to a datetime.
 * @param {Date} dateFrom
 * @param {number} minutes
 * @return Date
 */

import { minutesToMilliseconds } from "./core";

export const addMinutes = (dateFrom: Date, minutes: number): Date => {
  return new Date(dateFrom.getTime() + minutesToMilliseconds(minutes));
};
