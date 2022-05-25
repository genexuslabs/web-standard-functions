/**
 * Returns a string represantation of a date. dd[/]mm[/]yyyy
 * @return Date
 */
import { isEmpty } from "./isEmpty";

export const toString = (targetDate: Date, dateFormat?: String): string => {
  if (!dateFormat) {
    dateFormat = "MDY";
  }
  // Date Format   dateFormat = “MDY”   dateFormat = “DMY”   dateFormat = “YMD”

  dateFormat =
    dateFormat.charAt(0) +
    "/" +
    dateFormat.charAt(1) +
    "/" +
    dateFormat.charAt(2);

  let year = String(targetDate.getFullYear());
  let month = String(targetDate.getMonth() + 1);
  let day = String(targetDate.getDate());

  if (day.toString().length === 1) {
    day = "0" + day;
  }
  if (month.toString().length === 1) {
    month = "0" + month;
  }

  let ret;
  if (isEmpty(targetDate)) {
    ret = "  /  /  ";
  } else {
    ret = dateFormat
      .replace("D", day)
      .replace("M", month)
      .replace("Y", year.substr(-2));
  }

  return ret;
};
