import { GxDatetime } from "../gxdatetime";
import { dateArrayToDatetimeString } from "./dateArrayToDatetimeString";
import { GxDateToArray } from "./gxDateToArray";

export const GxDatetimeToISOString = (d: GxDatetime): string => {
  if (d) {
    const a = GxDateToArray(d);
    return dateArrayToDatetimeString(a);
  }
  return "";
};
