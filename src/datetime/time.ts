/**
 * To return the time in the 'hh:mm:ss' format.
 * @return String
 */
export enum time_format {
  format_12 = 12,
  format_24 = 24
}

import { DateTime } from "luxon";

export const timeImpl = (tf: time_format, date?: Date): String => {
  let format = tf === time_format.format_12 ? "en-US" : "en-GB";
  return (date || new Date()).toLocaleTimeString(format);
};

export const time = (): String => {
  // TODO get timeformat from app  preferences
  return timeImpl(time_format.format_12, new Date());
};
