/**
 * Returns the seconds elapsed between two DateTime data type values.
 * @param {GxDatetime} dateFrom
 * @return number
 */

import { GxDatetime } from "../types/gxdatetime";

export const difference = (
  dateTo: GxDatetime,
  dateFrom: GxDatetime
): number => {
  return (dateTo.getTime() - dateFrom.getTime()) / 1000;
};
