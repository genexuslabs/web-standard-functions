import { datetimeFromISOString } from "./datetimeFromISOString";

export const DeserializeISOStringToDatetime = (
  s: string,
  convertTimeFromUTC
): Date => {
  return datetimeFromISOString(s, convertTimeFromUTC);
};
