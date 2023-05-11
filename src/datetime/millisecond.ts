/**
 * Returns milliseconds for datetime
 * @param {GxDatetime} dateFrom
 * @return number
 */

import { GxDatetime } from "../types/gxdatetime";

export const millisecond = (dateFrom: GxDatetime): number => {
  return dateFrom.getMilliseconds();
};
