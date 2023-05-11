import { createCalendarEvent, schedule } from "../schedule";
import { addMinutes } from "../../../../datetime/addMinutes";
import { newInstance as newDate } from "../../../../date/newInstance";
import { GxDatetime } from "../../../../types/gxdatetime";

describe("Calendar external object", () => {
  it("should be able to call the public Schedule method", () => {
    let d = new GxDatetime();
    schedule("", d, d, d, d, "");
  });
  it("should be able to create an event", () => {
    let sDate = new GxDatetime(2019, 7, 14);
    sDate.setUTCHours(16);

    let eDate = new GxDatetime(2019, 7, 14);
    eDate.setUTCHours(16, 30);

    let ical = createCalendarEvent(sDate, eDate, "Test Event", "Somewhere");

    let lines = ical.split("\n");
    expect(lines[0]).toBe("BEGIN:VCALENDAR");
    expect(lines[2]).toBe("BEGIN:VEVENT");
    expect(lines[10]).toBe("END:VEVENT");
    expect(lines[11]).toBe("END:VCALENDAR");

    lines = lines.slice(3, 10);
    expect(lines).toContain("DTSTART:20190814T160000Z");
    expect(lines).toContain("DTEND:20190814T163000Z");
    expect(lines).toContain("SUMMARY:Test Event");
    expect(lines).toContain("LOCATION:Somewhere");
  });
});
