/**
 * Returns a string represantation of a date. dd[/]mm[/]yyyy
 * @return string
 */

import { TtoC } from "../datetime/TtoC";
import { GxDate } from "../types/gxdate";

export const toString = (
  target: GxDate,
  targetDate: GxDate,
  dateFormat?: String
): string => {
  if (!dateFormat) {
    dateFormat = "MDY";
  }

  return TtoC(targetDate, 8, 0, dateFormat, null);
};
