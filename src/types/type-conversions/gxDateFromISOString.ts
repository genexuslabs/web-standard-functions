import { GxDate } from "../gxdate";
import { ONLY_DATE } from "./constants";
import { DTAToDate } from "./dTAToDate";
import { ISODateToDTA } from "./iSODateToDTA";
import { isValidDate } from "./isValidDate";

export const GxDateFromISOString = (s: string): GxDate => {
  let d: Date;
  try {
    const da = ISODateToDTA(s);
    da[0] = ONLY_DATE;
    d = DTAToDate(da, false);
  } catch {
    throw new Error('Invalid date: "' + s + '"');
  }
  if (!isValidDate(d)) {
    d = new Date(0, 0, 0);
  }
  return new GxDate(d);
};
