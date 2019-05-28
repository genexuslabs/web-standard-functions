/**
 * To return the time in the 'hh:mm:ss' format.
 * @return String
 */
export enum time_format {
  format_12 = 12,
  format_24 = 24
}

export const time = (timeformat: time_format): String => {
  let format = timeformat === time_format.format_12 ? "en-US" : "en-GB";
  return new Date().toLocaleTimeString(format);
};
