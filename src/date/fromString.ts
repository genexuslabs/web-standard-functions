/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @return Date
 */

import { DateTime } from "luxon";
import { EMPTY_DATE_VALUE } from "./core";

export const fromString = (dateFrom: string): Date => {
  const dateParts = dateFrom.match(
    /([0-9]?[0-9])\/?([0-9]?[0-9])\/?([0-9][0-9][0-9][0-9])/
  );
  return dateParts && dateParts.length > 2
    ? new Date(
        Number(dateParts[3]),
        Number(dateParts[2]) - 1,
        Number(dateParts[1]),
        0,
        0,
        0,
        0
      )
    : EMPTY_DATE_VALUE;
};
