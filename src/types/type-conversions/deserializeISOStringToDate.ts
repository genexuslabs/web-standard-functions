import { dateFromISOString } from "./dateFromISOString";

export const DeserializeISOStringToDate = (s: string): Date => {
  return dateFromISOString(s);
};
