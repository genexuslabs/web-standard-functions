/**
 * Returns a Date from string value format espected format dd[/]mm[/]yyyy
 * @param {string} dateFrom
 * @return Date
 */

import { EMPTY_DATE_VALUE } from "../date/core";
import { newInstance } from "./newInstance";

export const fromString = (
  dateFrom: String,
  dateFormat?: String,
  fy20c?: number
): Date => {
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
  let dateParts = dateFrom.split(" ")[0].split("/");

  if (dateFormat.indexOf("Y4") === 0) {
    m = m - 1;
    d = d - 1;
  }

  const timeParts = dateFrom.match(
    / ([0-9]?[0-9]):([0-9]?[0-9])\:?([0-9][0-9])?\.?([0-9]?[0-9]?[0-9])?/
  );

  if (
    dateParts &&
    timeParts &&
    dateParts.length !== 1 &&
    timeParts.length !== 1 &&
    timeParts[1] &&
    Number(timeParts[1]) !== 24
  ) {
    const year = Number(dateParts[y]);
    const month = Number(dateParts[m]);
    const day = Number(dateParts[d]);

    let hour = 0;
    let minutes = 0;
    if (timeParts[1] && timeParts[2]) {
      hour = Number(timeParts[1]);
      minutes = Number(timeParts[2]);
    }

    let seconds = 0;
    if (timeParts[3]) {
      seconds = Number(timeParts[3]);
    }
    let milliseconds = 0;
    if (timeParts[4]) {
      milliseconds = Number(timeParts[4]);
    }

    if (timeFormat === 12) {
      if (Number(hour) <= 12) {
        if (dateFrom.toUpperCase().indexOf("PM") !== -1) {
          if (hour < 12) {
            hour = hour + 12;
          }
        } else {
          if (hour === 12) {
            hour = 0;
          }
        }
      }
    }

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
  } else {
    return EMPTY_DATE_VALUE;
  }
};
