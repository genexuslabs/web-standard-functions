import { DTAToDate } from "./dTAToDate";
import { ISODateToDTA } from "./iSODateToDTA";
import { isValidDate } from "./isValidDate";

export const datetimeFromISOString = (s: string, utcToLocal = false): Date => {
  let d: Date;
  try {
    const da = ISODateToDTA(s);
    d = DTAToDate(da, utcToLocal);
  } catch {
    throw new Error('Invalid date: "' + s + '"');
  }
  if (!isValidDate(d)) {
    d = new Date(0, 0, 0);
  }
  return d;
};
