/**
 * To return the time in the 'hh:mm:ss' format.
 * @return String
 */
export enum time_format {
  format_12 = 12,
  format_24 = 24
}

import { GxDatetime } from "../types/gxdatetime";

export const timeImpl = (tf: time_format, date?: GxDatetime): String => {
  let format = tf === time_format.format_12 ? "en-US" : "en-GB";
  return (date || new GxDatetime()).toLocaleTimeString(format);
};

export const time = (): String => {
  // TODO get timeformat from app  preferences
  return timeImpl(time_format.format_12, new GxDatetime());
};
