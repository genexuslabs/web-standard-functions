/**
 * Returns hour for datetime
 * @param {GxDatetime} dateFrom
 * @return number
 */

import { GxDatetime } from "../types/gxdatetime";

export const hour = (dateFrom: GxDatetime): number => {
  return dateFrom.getHours();
};
