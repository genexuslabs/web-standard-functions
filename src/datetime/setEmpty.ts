/**
 * Assigns the empty value
 * @param {GxDatetime} dateFrom
 * @return void
 */

import { EMPTY_DATE_VALUE } from "../date/core";
import { GxDatetime } from "../types/gxdatetime";

export const setEmpty = (date: GxDatetime): GxDatetime => {
  date.setTime(EMPTY_DATE_VALUE.getTime());
  return date;
};
