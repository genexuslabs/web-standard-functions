/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @param {string} dateFormat
 * @param {string} fy20c
 * @return GxDate
 */

import { GxDate } from "../types/gxdate";
import { EMPTY_DATE_VALUE } from "./core";
import { newInstance } from "./newInstance";

export const fromString = (
  dateFrom: string,
  dateFormat?: String,
  fy20c?: number
): GxDate => {
  if (!dateFormat) {
    dateFormat = "MDY";
  }

  if (!fy20c) {
    fy20c = 40;
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
    ? newInstance(
        Number(dateParts[year]),
        Number(dateParts[month]),
        Number(dateParts[day]),
        fy20c
      )
    : new GxDate(EMPTY_DATE_VALUE);
};
