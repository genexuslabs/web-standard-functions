/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @return GxDatetime
 */

import { EMPTY_DATE_VALUE } from "../date/core";
import { GxDatetime } from "../types/gxdatetime";
import { newInstance } from "./newInstance";

export const fromString = (
  dateFrom: String,
  dateFormat?: String,
  fy20c?: number
): GxDatetime => {
  if (!dateFormat) {
    dateFormat = "MDY";
  }

  if (!fy20c) {
    fy20c = 40;
  }

  let timeFormat;
  if (
    dateFrom.toUpperCase().indexOf("AM") !== -1 ||
    dateFrom.toUpperCase().indexOf("PM") !== -1
  ) {
    timeFormat = 12;
  } else {
    timeFormat = 24;
  }

  // Date Format   dateFormat = “MDY”   dateFormat = “DMY”   dateFormat = “YMD”  o Y4
  let y = dateFormat.indexOf("Y");
  let m = dateFormat.indexOf("M");
  let d = dateFormat.indexOf("D");

  if (dateFormat.indexOf("Y4") === 0) {
    m = m - 1;
    d = d - 1;
  }

  let timeParts;
  let dateParts;
  let dateBool;
  let timeBool;

  if (dateFrom.split(" ").length === 1) {
    if (dateFrom.indexOf("/") !== -1) {
      dateBool = true;
      timeBool = false;
    }
    if (dateFrom.indexOf(":") !== -1) {
      timeBool = true;
      dateBool = false;
    }
  } else if (dateFrom.split(" ").length === 2) {
    if (timeFormat === 12) {
      dateBool = false;
      timeBool = true;
    }
    if (timeFormat === 24) {
      dateBool = true;
      timeBool = true;
    }
  } else if (dateFrom.split(" ").length === 3) {
    dateBool = true;
    timeBool = true;
  }

  if (dateFrom.indexOf("/") !== -1) {
    dateParts = dateFrom.split(" ")[0].split("/");
    timeParts = dateFrom.match(
      / ([0-9]?[0-9]):([0-9]?[0-9])\:?([0-9][0-9])?\.?([0-9]?[0-9]?[0-9])?/
    );
  } else {
    timeParts = dateFrom.match(
      /([0-9]?[0-9]):([0-9]?[0-9])\:?([0-9][0-9])?\.?([0-9]?[0-9]?[0-9])?/
    );
  }

  let hour;
  let minutes;
  let seconds;
  let milliseconds;

  if (
    timeParts &&
    timeParts.length !== 1 &&
    timeParts[1] &&
    Number(timeParts[1]) !== 24
  ) {
    hour = 0;
    minutes = 0;

    if (timeParts[1] && timeParts[2]) {
      hour = Number(timeParts[1]);
      minutes = Number(timeParts[2]);
    }

    seconds = 0;
    if (timeParts[3]) {
      seconds = Number(timeParts[3]);
    }
    milliseconds = 0;
    if (timeParts[4]) {
      milliseconds = Number(timeParts[4]);
    }

    if (timeFormat === 12) {
      if (Number(hour) <= 12) {
        if (dateFrom.toUpperCase().indexOf("PM") !== -1) {
          if (hour < 12) {
            hour = hour + 12;
          } else {
            hour = hour;
          }
        } else if (dateFrom.toUpperCase().indexOf("AM") !== -1) {
          if (hour < 12) {
            hour = hour;
          } else {
            hour = 0;
          }
        }
      }
    }
  }

  let year;
  let month;
  let day;

  if (dateParts && dateParts.length !== 1) {
    year = Number(dateParts[y]);
    month = Number(dateParts[m]);
    day = Number(dateParts[d]);
  }

  if (timeBool === true && dateBool === false) {
    if (!timeParts) {
      return new GxDatetime(EMPTY_DATE_VALUE);
    } else {
      return newInstance(0, 0, 0, hour, minutes, seconds, milliseconds, fy20c);
    }
  } else if (dateBool === true && timeBool === false) {
    if (!dateParts) {
      return new GxDatetime(EMPTY_DATE_VALUE);
    } else {
      return newInstance(year, month, day, 0, 0, 0, 0, fy20c);
    }
  } else if (dateBool === true && timeBool === true) {
    if (!dateParts || !timeParts) {
      return new GxDatetime(EMPTY_DATE_VALUE);
    } else {
      return newInstance(
        year,
        month,
        day,
        hour,
        minutes,
        seconds,
        milliseconds,
        fy20c
      );
    }
  } else {
    return new GxDatetime(EMPTY_DATE_VALUE);
  }
};
