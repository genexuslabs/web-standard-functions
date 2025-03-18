import { dateArrayToDateString } from "./dateArrayToDateString";
import { dateToArray } from "./dateToArray";

export const dateToISOString = (d: Date): string => {
  if (d) {
    const a = dateToArray(d);
    return dateArrayToDateString(a);
  }
  return "";
};
