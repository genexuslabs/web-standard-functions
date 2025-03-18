import { GxDatetime } from "../gxdatetime";
import { dateArrayToTimeString } from "./dateArrayToTimeString";
import { GxDateToArray } from "./gxDateToArray";

export const timeToISOString = (d: GxDatetime): string => {
  if (d) {
    const a = GxDateToArray(d);
    return dateArrayToTimeString(a);
  }
  return "";
};
