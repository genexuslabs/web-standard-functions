/**
 * Returns a datetime value corresponding to adding seconds to a datetime value.
 * @param {Date} dateFrom
 * @param {number} seconds
 * @return Date
 */

import { secondsToMilliseconds } from "./core";

export const addSeconds = (dateFrom: Date, seconds: number): Date => {
  return new Date(dateFrom.getTime() + secondsToMilliseconds(seconds));
};
