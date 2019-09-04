import { isEmpty } from "../date/isEmpty";
import { padLeft } from "../text/padLeft";
import { toString as str } from "../numeric/toString";

/**
 * Returns a string represantation of a date-time. dd[/]mm[/]yyyy HH:mm:ss
 * @return Date
 */
export const toString = (targetDate: Date): string => {
  if (isEmpty(targetDate)) {
    return "";
  } else {
    const datePart = `${targetDate.getDate()}/${targetDate.getMonth() +
      1}/${targetDate.getFullYear()}`;
    const timePart = `${padLeft(str(targetDate.getHours()), 2, "0")}:${padLeft(
      str(targetDate.getMinutes()),
      2,
      "0"
    )}:${padLeft(str(targetDate.getSeconds()), 2, "0")}`;
    return `${datePart} ${timePart}`;
  }
};
