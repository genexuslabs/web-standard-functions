/**
 * Returns the weekday for a given date in the selected language.
 * @param {Date} dateFrom
 * @param {string} language
 * @return string
 */

import { DateTime } from "luxon";
import { gxToLibLangMapping } from "./core";

export const dayOfWeekName = (dateFrom: Date, language?: string): string => {
  return DateTime.fromJSDate(dateFrom)
    .setLocale(gxToLibLangMapping(language))
    .toFormat("cccc");
};
