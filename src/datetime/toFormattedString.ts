import { padLeft } from "../text/padLeft";
import { toFormattedString as dateToFormattedString } from "../date/toFormattedString";
import { GxDatetime } from "../types/gxdatetime";

export const toFormattedString = (
  dateFrom: GxDatetime,
  dateFormat?: string,
  timeFormat?: number,
  picture?: string
): string => {
  if (!dateFormat) {
    dateFormat = "MDY";
  }
  if (!timeFormat) {
    timeFormat = 12;
  }
  if (!picture) {
    picture = "99/99/99 99:99";
  }

  let datePart: string = "";
  let datePartPicture = picture.split(" ")[0];

  datePart = dateToFormattedString(dateFrom, dateFormat, datePartPicture);

  let timePartPicture = picture.split(" ")[1];
  let timePart: string = "";
  let type: string = "";

  let hours: string = padLeft(String(dateFrom.getHours()), 2, "0");
  let minutes: string = padLeft(String(dateFrom.getMinutes()), 2, "0");
  let seconds: string = padLeft(String(dateFrom.getSeconds()), 2, "0");
  let milliseconds: string = padLeft(
    String(dateFrom.getMilliseconds()),
    3,
    "0"
  );

  // timeFormat: 12   timeFormat: 24
  if (timeFormat === 12) {
    if (Number(hours) < 12) {
      type = "AM";
    } else {
      type = "PM";
    }

    hours = String(Number(hours) % 12 || 12);

    if (hours.toString().length === 1) {
      hours = "0" + hours;
    }
  }

  if (!timePartPicture) {
    timePart = "";
  } else {
    switch (timePartPicture.split(":").length) {
      case 1:
        timePart = hours;
        break;

      case 2:
        timePart = hours + ":" + minutes;
        break;

      case 3:
        timePart = hours + ":" + minutes + ":" + seconds;
        if (timePartPicture.split(".").length === 2) {
          timePart = timePart + "." + milliseconds;
        }
        break;
    }
  }

  if (timePart === "") {
    return datePart;
  } else {
    if (type !== "") {
      return datePart + " " + timePart + " " + type;
    } else {
      return datePart + " " + timePart;
    }
  }
};
