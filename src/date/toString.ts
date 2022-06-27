/**
 * Returns a string represantation of a date. dd[/]mm[/]yyyy
 * @return Date
 */

import { TtoC } from "../datetime/TtoC";

export const toString = (
  target: Date,
  targetDate: Date,
  dateFormat?: String
): string => {
  if (!dateFormat) {
    dateFormat = "MDY";
  }

  return TtoC(targetDate, 8, 0, dateFormat, null);
};
