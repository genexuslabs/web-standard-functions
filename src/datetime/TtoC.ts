import { isEmpty } from "../date/isEmpty";
import { padLeft } from "../text/padLeft";
import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";

/**
 * Returns a string represantation of a date-time. dd[/]mm[/]yyyy HH:mm:ss
 * @return string
 */
export const TtoC = (
  targetDate: GxDate | GxDatetime,
  dateDigit?: Number,
  hourDigit?: Number,
  dateFormat?: String,
  timeFormat?: Number
): string => {
  if (!dateFormat) {
    dateFormat = "MDY";
  }
  if (!timeFormat) {
    timeFormat = 12;
  }

  let day: String = padLeft(String(targetDate.getDate()), 2, "0");
  let month: String = padLeft(String(targetDate.getMonth() + 1), 2, "0");
  let year: String = targetDate.getFullYear().toString();
  let hours: String = padLeft(String(targetDate.getHours()), 2, "0");
  let minutes: String = padLeft(String(targetDate.getMinutes()), 2, "0");
  let seconds: String = padLeft(String(targetDate.getSeconds()), 2, "0");
  let milliseconds: String = padLeft(
    String(targetDate.getMilliseconds()),
    3,
    "0"
  );
  let type: String = "";
  let datePart: String = "";
  let timePart: String = "";

  // dateFormat = “MDY”   dateFormat = “DMY”   dateFormat = “YMD”
  if (dateFormat) {
    if (dateFormat.indexOf("Y4") === 0) {
      dateFormat =
        dateFormat.charAt(0) +
        dateFormat.charAt(1) +
        "/" +
        dateFormat.charAt(2) +
        "/" +
        dateFormat.charAt(3);
    } else {
      dateFormat =
        dateFormat.charAt(0) +
        "/" +
        dateFormat.charAt(1) +
        "/" +
        dateFormat.charAt(2);
    }
  }

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

  // Date Part
  if (isEmpty(targetDate)) {
    return "";
  } else {
    switch (dateDigit) {
      case 0:
        datePart = "";
        break;

      case 8:
        if (dateFormat) {
          year = year.substr(-2);
          if (dateFormat.indexOf("Y4") === 0) {
            datePart = dateFormat
              .replace("D", day.toString())
              .replace("M", month.toString())
              .replace("Y4", year.toString());
          } else {
            datePart = dateFormat
              .replace("D", day.toString())
              .replace("M", month.toString())
              .replace("Y", year.toString());
          }
        }
        break;

      case 10:
        if (dateFormat) {
          if (dateFormat.indexOf("Y4") === 0) {
            datePart = dateFormat
              .replace("D", day.toString())
              .replace("M", month.toString())
              .replace("Y4", year.toString());
          } else {
            datePart = dateFormat
              .replace("D", day.toString())
              .replace("M", month.toString())
              .replace("Y", year.toString());
          }
        }
        break;

      default:
        if (dateFormat) {
          if (dateFormat.indexOf("Y4") === 0) {
            datePart = dateFormat
              .replace("D", day.toString())
              .replace("M", month.toString())
              .replace("Y4", year.toString());
          } else {
            datePart = dateFormat
              .replace("D", day.toString())
              .replace("M", month.toString())
              .replace("Y", year.toString());
          }
        }
        break;
    }

    // Time Part
    switch (hourDigit) {
      case 0:
        timePart = "";
        break;

      case 2:
        datePart = "";
        if (timeFormat === 12) {
          timePart = `${hours} ${type}`;
        } else {
          timePart = `${hours}`;
        }
        break;

      case 5:
        if (timeFormat === 12) {
          timePart = `${hours}:${minutes} ${type}`;
        } else {
          timePart = `${hours}:${minutes}`;
        }
        break;

      case 8:
        if (timeFormat === 12) {
          timePart = `${hours}:${minutes}:${seconds} ${type}`;
        } else {
          timePart = `${hours}:${minutes}:${seconds}`;
        }
        break;

      case 12:
        if (timeFormat === 12) {
          timePart = `${hours}:${minutes}:${seconds}.${milliseconds} ${type}`;
        } else {
          timePart = `${hours}:${minutes}:${seconds}.${milliseconds}`;
        }
        break;

      default:
        if (timeFormat === 12) {
          timePart = `${hours}:${minutes}:${seconds} ${type}`;
        } else {
          timePart = `${hours}:${minutes}:${seconds}`;
        }
        break;
    }

    // Return
    let res = "";
    if (datePart !== "" && timePart !== "") {
      res = `${datePart} ${timePart}`;
    }
    if (datePart === "" && timePart !== "") {
      res = `${timePart}`;
    }
    if (timePart === "" && datePart !== "") {
      res = `${datePart}`;
    }

    return res;
  }
};
