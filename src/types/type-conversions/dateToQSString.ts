import { isEmpty } from "./isEmpty";
import { isValidDate } from "./isValidDate";
import { dateToArray } from "./dateToArray";

// Querystring minimal date/datetime/time functions
export const dateToQSString = (d: Date): string => {
  // YYYYMMDD
  if (!isEmpty(d) && isValidDate(d)) {
    const s = dateToArray(d);
    return (
      ("000" + s[0]).slice(-4) +
      ("0" + (s[1] + 1)).slice(-2) +
      ("0" + s[2]).slice(-2)
    );
  }
  return "";
};
