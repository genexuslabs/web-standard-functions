/**
 * Returns a DateTime value corresponding to adding milliseconds to a DateTime data type value.
 * @param {GxDatetime} dateFrom
 * @param {number} millisecconds
 * @return GxDatetime
 */

import { GxDatetime } from "../types/gxdatetime";

export const addMilliseconds = (
  dateFrom: GxDatetime,
  milliseconds: number
): GxDatetime => {
  let ret = new Date();
  ret.setTime(dateFrom.getTime() + milliseconds);
  return new GxDatetime(ret);
};
