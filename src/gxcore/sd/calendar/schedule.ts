import { notImplemented } from "../../../misc/helpers";
import { addHours } from "../../../datetime/addHours";
import { GUID } from "../../../types/guid";

const ical = require("ical-generator");

/**
 * Allows scheduling some task on the end user's calendar. Every parameter is optional except for `title` and `startDate`.
 * @param {string} title
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {Date} startTime
 * @param {Date} endTime
 * @param {string} place
 */
export const schedule = (
  title: string,
  startDate: Date,
  endDate: Date,
  startTime: Date,
  endTime: Date,
  place: string
) => {
  let sDateTime = getDateTime(startDate, startTime);
  let eDateTime = getDateTime(endDate, endTime, addHours(sDateTime, 1));

  let cal = createCalendarEvent(
    sDateTime,
    eDateTime,
    title,
    place ? place : ""
  );

  downloadCalendar(cal.toString());
};

function getDateTime(
  datePart: Date,
  timePart: Date,
  defaultValue?: Date
): Date {
  if (!datePart) {
    return defaultValue;
  }

  let result = datePart;
  if (timePart) {
    result.setHours(timePart.getHours());
    result.setMinutes(timePart.getMinutes());
    result.setSeconds(timePart.getSeconds());
  }
  return result;
}

export function createCalendarEvent(
  start: Date,
  end: Date,
  title: string,
  place: string
): any {
  let cal = ical();

  let event = cal.createEvent({
    start: start,
    end: end,
    summary: title,
    location: place
  });

  return cal;
}

function downloadCalendar(calendarStr: string) {
  let guidStr = GUID.newGuid().toString;
  let fileName = guidStr + ".ics";

  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(calendarStr)
  );
  element.setAttribute("download", fileName);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
