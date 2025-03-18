// Serialization date/datetime/time functions
//    * Empty date = '0000-00-00'
//    * Empty datetime = '0000-00-00T00:00:00'
//    * Empty time = '00:00:00'

import { dateToISOString } from "./dateToISOString";
import { isEmpty } from "./isEmpty";

export const SerializeDateToISOString = (d: Date): string => {
  if (!isEmpty(d)) {
    return dateToISOString(d);
  }
  return "0000-00-00T00:00:00";
};
