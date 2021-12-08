/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @return Date
 */

import { EMPTY_DATE_VALUE } from "../date/core";
import { newInstance } from "./newInstance";

export const fromString = (target: Date, dateFrom: string): Date => {
  const dateParts = dateFrom.match(
    /([0-9]?[0-9])\/?([0-9]?[0-9])\/?([0-9][0-9][0-9][0-9]) ([0-9]?[0-9]):([0-9]?[0-9]):?([0-9]?[0-9])?/
  );

  if (dateParts && dateParts.length > 5) {
    const year = Number(dateParts[3]);
    const month = Number(dateParts[2]);
    const day = Number(dateParts[1]);
    const hour = Number(dateParts[4]);
    const minutes = Number(dateParts[5]);
    let seconds = 0;
    if (dateParts.length > 6 && dateParts[6]) {
      seconds = Number(dateParts[6]);
    }
    return newInstance(year, month, day, hour, minutes, seconds);
  }
  return EMPTY_DATE_VALUE;
};
