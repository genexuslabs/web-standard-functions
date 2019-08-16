import { notImplemented } from "../../../misc/helpers";
import { addHours } from "../../../datetime/addHours";
import { GUID } from "../../../types/guid";

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

  let calStr = createCalendarEvent(sDateTime, eDateTime, title, place);

  downloadCalendar(calStr);
};

function convertDateTimeToString(dt: Date): string {
  // 20190814T160000Z
  return (
    dt.getUTCFullYear().toString() +
    stringFromTimeNumber(dt.getUTCMonth() + 1) +
    stringFromTimeNumber(dt.getUTCDate()) +
    "T" +
    stringFromTimeNumber(dt.getUTCHours()) +
    stringFromTimeNumber(dt.getUTCMinutes()) +
    stringFromTimeNumber(dt.getUTCSeconds()) +
    "Z"
  );
}

function stringFromTimeNumber(num: number): string {
  return (num < 10 ? "0" : "") + num.toString();
}

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
): string {
  return (
    "BEGIN:VCALENDAR" +
    "\n" +
    "VERSION:2.0" +
    "\n" +
    // + "PRODID:-//sebbo.net//ical-generator//EN" + "\n"
    "BEGIN:VEVENT" +
    "\n" +
    "UID:" +
    getGUIDString() +
    "\n" +
    "SEQUENCE:0" +
    "\n" +
    "DTSTAMP:" +
    convertDateTimeToString(new Date()) +
    "\n" +
    "DTSTART:" +
    convertDateTimeToString(start) +
    "\n" +
    "DTEND:" +
    convertDateTimeToString(end) +
    "\n" +
    "SUMMARY:" +
    title +
    "\n" +
    "LOCATION:" +
    place +
    "\n" +
    "END:VEVENT" +
    "\n" +
    "END:VCALENDAR"
  );
}

function getGUIDString(): string {
  return GUID.newGuid().toString();
}

function downloadCalendar(calendarStr: string) {
  let guidStr = getGUIDString();
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
