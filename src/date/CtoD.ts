/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @return Date
 */

import { EMPTY_DATE_VALUE } from "./core";

export const fromString = (dateFrom: string, dateFormat?: String): Date => {
  if (!dateFormat) {
    dateFormat = "MDY";
  }

  // Date Format   dateFormat = “MDY”   dateFormat = “DMY”   dateFormat = “YMD”  o Y4
  let year = dateFormat.indexOf("Y");
  let month = dateFormat.indexOf("M");
  let day = dateFormat.indexOf("D");
  let dateParts = dateFrom.split("/");

  if (dateFormat.indexOf("Y4") === 0) {
    month = month - 1;
    day = day - 1;
  }

  return dateParts && dateParts.length > 2
    ? new Date(
        Number(dateParts[year]),
        Number(dateParts[month]) - 1,
        Number(dateParts[day]),
        0,
        0,
        0,
        0
      )
    : EMPTY_DATE_VALUE;
};
