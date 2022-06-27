import { TtoC } from "./TtoC";

/**
 * Returns a string represantation of a date-time. dd[/]mm[/]yyyy HH:mm:ss
 * @return Date
 */

export const toString = (
  target: Date,
  targetDate: Date,
  dateDigit?: Number,
  hourDigit?: Number,
  dateFormat?: String,
  timeFormat?: Number
): string => {
  return TtoC(targetDate, dateDigit, hourDigit, dateFormat, timeFormat);
};
