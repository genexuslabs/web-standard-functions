import { dateToArray } from "./dateToArray";
import { isEmpty } from "./isEmpty";
import { isValidDate } from "./isValidDate";

export const datetimeToQSString = (d: Date): string => {
  // YYYYMMDDHHMMSS
  if (!isEmpty(d) && isValidDate(d)) {
    const s = dateToArray(d);
    return (
      ("000" + s[0]).slice(-4) +
      ("0" + (s[1] + 1)).slice(-2) +
      ("0" + s[2]).slice(-2) +
      ("0" + s[3]).slice(-2) +
      ("0" + s[4]).slice(-2) +
      ("0" + s[5]).slice(-2)
    );
  }
  return "";
};
