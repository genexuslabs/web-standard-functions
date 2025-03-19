import { DATE_AND_TIME, INVALID_DATE, ONLY_DATE, ONLY_TIME } from "./constants";

export const ISODateToDTA = (s: string): Array<number> => {
  // DTA = Array<numeric> = [date_format, year, month, day, hour, min, sec, millis]

  const datetimeS = s.split("T");
  if (datetimeS.length > 1) {
    const dateS = datetimeS[0].split("-");
    const timeS = datetimeS[1].split(":");
    let dt_sec = timeS[2] || 0;
    let dt_millis = "0";
    if (timeS.length === 3 && timeS[2].indexOf(".") > -1) {
      const sec_millis = timeS[2].split(".");
      dt_sec = sec_millis[0];
      dt_millis = sec_millis[1];
    }
    return [
      DATE_AND_TIME,
      +dateS[0],
      +dateS[1],
      +dateS[2],
      +timeS[0],
      +timeS[1],
      +dt_sec,
      +dt_millis
    ];
  } else if (s.indexOf("-") > 1) {
    const dateS = datetimeS[0].split("-");
    return [ONLY_DATE, +dateS[0], +dateS[1], +dateS[2], 0, 0, 0, 0];
  } else if (s.indexOf(":") > -1) {
    const timeS = datetimeS[0].split(":");
    let dt_sec = timeS[2];
    let dt_millis = "0";
    if (timeS.length === 3 && timeS[2].indexOf(".") > -1) {
      const sec_millis = timeS[2].split(".");
      dt_sec = sec_millis[0];
      dt_millis = sec_millis[1];
    }
    return [ONLY_TIME, 0, 0, 0, +timeS[0], +timeS[1], +dt_sec, +dt_millis];
  }
  return [INVALID_DATE, 0, 0, 0, 0, 0, 0, 0];
};
