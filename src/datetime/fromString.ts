import { fromString as CtoT } from "./CtoT";

export const fromString = (
  target: Date,
  dateFrom: string,
  dateFormat?: String,
  timeFormat?: Number
): Date => {
  return CtoT(dateFrom, dateFormat, timeFormat);
};
