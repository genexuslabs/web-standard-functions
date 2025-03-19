import { dateToArray } from "./dateToArray";
import { isEmpty } from "./isEmpty";
import { isValidDate } from "./isValidDate";

export const timeToQSString = (d: Date): string => {
  // HHMMSS
  if (!isEmpty(d) && isValidDate(d)) {
    const s = dateToArray(d);
    return (
      ("0" + s[3]).slice(-2) + ("0" + s[4]).slice(-2) + ("0" + s[5]).slice(-2)
    );
  }
  return "";
};
