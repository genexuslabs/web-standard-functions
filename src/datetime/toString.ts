import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";
import { TtoC } from "./TtoC";

/**
 * Returns a string represantation of a date-time. dd[/]mm[/]yyyy HH:mm:ss
 * @return string
 */

export const toString = (
  target: GxDate | GxDatetime,
  targetDate: GxDate | GxDatetime,
  dateDigit?: Number,
  hourDigit?: Number,
  dateFormat?: String,
  timeFormat?: Number
): string => {
  return TtoC(targetDate, dateDigit, hourDigit, dateFormat, timeFormat);
};
