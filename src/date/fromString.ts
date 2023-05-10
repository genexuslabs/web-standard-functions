import { GxDate } from "../types/gxdate";
import { fromString as CtoD } from "./CtoD";

export const fromString = (
  target: GxDate,
  dateFrom: string,
  dateFormat?: String,
  fy20c?: number
): GxDate => {
  return CtoD(dateFrom, dateFormat, fy20c);
};
