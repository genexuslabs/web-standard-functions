import { dateArrayToDatetimeString } from "./dateArrayToDatetimeString";
import { dateToArray } from "./dateToArray";

export const datetimeToISOString = (d: Date): string => {
  if (d) {
    const a = dateToArray(d);
    return dateArrayToDatetimeString(a);
  }
  return "";
};
