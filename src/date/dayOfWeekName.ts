/**
 * Returns the weekday for a given date in the selected language. If no language is specified, the one selected in the Model Properties is used.
 * @param {Date} dateFrom
 * @return number
 */

import { DateTime } from "luxon";

let gxToLibLangMapping = (gxlang: string): string => {
  let gxtoluxonLang = new Map([
    ["spa", "es"] /*Spanish*/,
    ["eng", "en"] /*English*/,
    ["por", "pt"] /*Portuguese*/,
    ["ita", "it"] /*Italian*/,
    ["chs", "zh"] /*Simplified Chinese*/,
    ["cht", "tw"] /*Traditional Chinese*/,
    ["jap", "ja"] /*Japanese*/
  ]);
  let luxonLang = gxtoluxonLang.get(gxlang);
  return luxonLang || "en";
};

export const dayOfWeekName = (dateFrom: Date, language: string): string => {
  return DateTime.fromJSDate(dateFrom).setLocale(gxToLibLangMapping(language)).toFormat("cccc");
};
