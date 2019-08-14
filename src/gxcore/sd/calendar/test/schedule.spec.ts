import { createCalendarEvent, schedule } from "../schedule";
import { addMinutes } from "../../../../datetime/addMinutes";
import { newInstance as newDate } from "../../../../date/newInstance";

describe("Calendar external object", () => {
  it("should be able to call the public Schedule method", () => {
    let d = new Date();
    schedule("", d, d, d, d, "");
  });
  it("should be able to create an event", () => {
    let sDate = new Date(2019, 7, 14);
    sDate.setUTCHours(16);
    let eDate = new Date(2019, 7, 14);
    eDate.setUTCHours(16, 30);
    let ical = createCalendarEvent(sDate, eDate, "Test Event", "Somewhere");

    let lines = ical.toString().split("\r\n");
    expect(lines[0]).toBe("BEGIN:VCALENDAR");
    expect(lines[3]).toBe("BEGIN:VEVENT");
    expect(lines[11]).toBe("END:VEVENT");
    expect(lines[12]).toBe("END:VCALENDAR");

    lines = lines.slice(4, 11);
    expect(lines).toContain("DTSTART:20190814T160000Z");
    expect(lines).toContain("DTEND:20190814T163000Z");
    expect(lines).toContain("SUMMARY:Test Event");
    expect(lines).toContain("LOCATION:Somewhere");
  });
});
