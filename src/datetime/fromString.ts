import { fromString as CtoT } from "./CtoT";

export const fromString = (
  target: Date,
  dateFrom: string,
  dateFormat?: String,
  fy20c?: number
): Date => {
  return CtoT(dateFrom, dateFormat, fy20c);
};
