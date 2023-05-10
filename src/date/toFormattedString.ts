import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";
import { isEmpty } from "./isEmpty";

export const toFormattedString = (
  dateFrom: GxDate | GxDatetime,
  dateFormat?: String,
  picture?: String
): string => {
  if (!dateFormat) {
    dateFormat = "MDY";
  }

  if (!picture) {
    picture = "99/99/99";
  }

  let yearPosition = dateFormat.indexOf("Y");

  let year = String(dateFrom.getFullYear());
  let month = String(dateFrom.getMonth() + 1);
  let day = String(dateFrom.getDate());
  if (day.toString().length === 1) {
    day = "0" + day;
  }
  if (month.toString().length === 1) {
    month = "0" + month;
  }

  let ret;
  if (isEmpty(dateFrom)) {
    ret = "  /  /  ";
  } else {
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

    let datePart = picture.split(" ")[0];
    let yearPart = datePart.split("/")[yearPosition];

    if (picture) {
      if (yearPart.length === 2) {
        year = year.toString().substr(-2);
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
    }

    ret = datePart;
  }

  return ret;
};
