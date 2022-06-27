import { fromString as CtoD } from "./CtoD";

export const fromString = (
  target: Date,
  dateFrom: string,
  dateFormat?: String,
  fy20c?: number
): Date => {
  return CtoD(dateFrom, dateFormat, fy20c);
};
