/**
 * Returns a datetime value corresponding to adding seconds to a datetime value.
 * @param {Date} dateFrom
 * @param {number} seconds
 * @return Date
 */

import { DateTime } from "luxon";
import { secondsToMilliseconds } from "./core";
import { EMPTY_DATE_VALUE } from "../date/core";

export const addSeconds = (dateFrom: Date, seconds: number): Date => {
  return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
    ? EMPTY_DATE_VALUE
    : new Date(dateFrom.getTime() + secondsToMilliseconds(seconds));
};
