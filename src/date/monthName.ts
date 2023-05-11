/**
 * Returns the name of the month for the given date in the selected language.
 * @param {GxDate | GxDatetime} dateFrom
 * @param {string} language
 * @return string
 */

import { DateTime } from "luxon";
import { gxToLibLangMapping } from "./core";
import { EMPTY_DATE_VALUE } from "../date/core";
import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";

export const monthName = (
  dateFrom: GxDate | GxDatetime,
  language?: string
): string => {
  let month = DateTime.fromJSDate(dateFrom)
    .setLocale(gxToLibLangMapping(language))
    .toFormat("LLLL");

  return dateFrom.getTime() === EMPTY_DATE_VALUE.getTime()
    ? ""
    : month
        .charAt(0)
        .toUpperCase()
        .concat(month.substring(1, month.length));
};
