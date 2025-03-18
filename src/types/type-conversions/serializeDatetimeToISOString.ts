import { datetimeToISOString } from "./datetimeToISOString";
import { isEmpty } from "./isEmpty";
import { localToUTC } from "./localToUTC";

export const SerializeDatetimeToISOString = (
  d: Date,
  convertTimeFromUTC
): string => {
  if (!isEmpty(d)) {
    if (convertTimeFromUTC) {
      return datetimeToISOString(localToUTC(d));
    } else {
      return datetimeToISOString(d);
    }
  }
  return "0000-00-00T00:00:00";
};
