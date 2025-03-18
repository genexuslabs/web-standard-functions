import { GxDate } from "../gxdate";
import { dateArrayToDateString } from "./dateArrayToDateString";
import { GxDateToArray } from "./gxDateToArray";

export const GxDateToISOString = (d: GxDate): string => {
  if (d) {
    const a = GxDateToArray(d);
    return dateArrayToDateString(a);
  }
  return "";
};
