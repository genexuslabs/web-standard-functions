import { isEmpty } from "../date/isEmpty";
import { padLeft } from "../text/padLeft";

/**
 * Returns a string represantation of a date-time. dd[/]mm[/]yyyy HH:mm:ss
 * @return Date
 */
export const toString = (
  targetDate: Date,
  dateDigit?: Number,
  hourDigit?: Number,
  dateFormat?: String,
  timeFormat?: Number,
  picture?: String
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

  let day: String = padLeft(str(targetDate.getDate()), 2, "0");
  let month: String = padLeft(str(targetDate.getMonth() + 1), 2, "0");
  let year: String = targetDate.getFullYear().toString();
  let hours: String = padLeft(str(targetDate.getHours()), 2, "0");
  let minutes: String = padLeft(str(targetDate.getMinutes()), 2, "0");
  let seconds: String = padLeft(str(targetDate.getSeconds()), 2, "0");
  let milliseconds: String = padLeft(str(targetDate.getMilliseconds()), 3, "0");
  let type: String = "";
  let datePart: String = "";
  let timePart: String = "";

  // Date Format   dateFormat = “MDY”   dateFormat = “DMY”   dateFormat = “YMD”
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

  // Time Format  timeFormat: 12   timeFormat: 24
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
        } else {
          datePart = `${day}/${month}/${year.substr(-2)}`;
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
        } else {
          datePart = `${day}/${month}/${year}`;
        }
        break;

      default:
        if (dateFormat) {
          // Picture
          if (picture) {
            let datePart = picture.split(" ")[0];
            let yearPart = datePart.split("/")[2];
            if (yearPart.length === 2) {
              year = year.toString().substr(-2);
            }
          }

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
        } else {
          datePart = `${day}/${month}/${year}`;
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
    if (datePart !== "" && timePart !== "") {
      return `${datePart} ${timePart}`;
    }
    if (datePart === "" && timePart !== "") {
      return `${timePart}`;
    }
    if (timePart === "" && datePart !== "") {
      return `${datePart}`;
    }
  }
};
