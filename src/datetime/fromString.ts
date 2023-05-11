import { GxDatetime } from "../types/gxdatetime";
import { fromString as CtoT } from "./CtoT";

export const fromString = (
  target: GxDatetime,
  dateFrom: string,
  dateFormat?: String,
  fy20c?: number
): GxDatetime => {
  return CtoT(dateFrom, dateFormat, fy20c);
};
