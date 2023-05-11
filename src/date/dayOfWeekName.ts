/**
 * Returns the weekday for a given date in the selected language.
 * @param {GxDate} dateFrom
 * @param {string} language
 * @return string
 */

import { DateTime } from "luxon";
import { gxToLibLangMapping } from "./core";
import { GxDate } from "../types/gxdate";

export const dayOfWeekName = (dateFrom: GxDate, language?: string): string => {
  return DateTime.fromJSDate(dateFrom)
    .setLocale(gxToLibLangMapping(language))
    .toFormat("cccc");
};
