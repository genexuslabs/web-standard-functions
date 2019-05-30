/**
 * Assigns the empty value
 * @param {Date} dateFrom
 * @return void
 */

import { EMPTY_DATE_VALUE } from "../date/core";

export const setEmpty = (date: Date): Date => {
  date.setTime(EMPTY_DATE_VALUE.getTime());
  return date;
};
