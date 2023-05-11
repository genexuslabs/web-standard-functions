/**
 * Returns seconds for datetime
 * @param {GxDatetime} dateFrom
 * @return number
 */

import { GxDatetime } from "../types/gxdatetime";

export const second = (dateFrom: GxDatetime): number => {
  return dateFrom.getSeconds();
};
