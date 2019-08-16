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
  const sDateTime = getDateTime(startDate, startTime);
  const eDateTime = getDateTime(endDate, endTime, addHours(sDateTime, 1));

  const calStr = createCalendarEvent(sDateTime, eDateTime, title, place);

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
  return num.toString().padStart(2, "0");
}

function getDateTime(
  datePart: Date,
  timePart: Date,
  defaultValue?: Date
): Date {
  if (!datePart) {
    return defaultValue;
  }

  const result = datePart;
  if (timePart) {
    result.setHours(timePart.getHours());
    result.setMinutes(timePart.getMinutes());
    result.setSeconds(timePart.getSeconds());
  }
  return result;
}

export const createCalendarEvent = (
  start: Date,
  end: Date,
  title: string,
  place: string
) =>
  `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
UID:${getGUIDString()}
SEQUENCE:0
DTSTAMP:${convertDateTimeToString(new Date())}
DTSTART:${convertDateTimeToString(start)}
DTEND:${convertDateTimeToString(end)}
SUMMARY:${title}
LOCATION:${place}
END:VEVENT
END:VCALENDAR`;

function getGUIDString(): string {
  return GUID.newGuid().toString();
}

function downloadCalendar(calendarStr: string) {
  const guidStr = getGUIDString();
  const fileName = guidStr + ".ics";

  const element = document.createElement("a");
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
