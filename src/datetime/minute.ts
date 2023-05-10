/**
 * Returns minute for datetime
 * @param {GxDatetime} dateFrom
 * @return number
 */

import { GxDatetime } from "../types/gxdatetime";

export const minute = (dateFrom: GxDatetime): number => {
  return dateFrom.getMinutes();
};
