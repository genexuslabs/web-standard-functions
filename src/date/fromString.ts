import { fromString as CtoD } from "./CtoD";

export const fromString = (
  target: Date,
  dateFrom: string,
  dateFormat?: String
): Date => {
  return CtoD(dateFrom, dateFormat);
};
