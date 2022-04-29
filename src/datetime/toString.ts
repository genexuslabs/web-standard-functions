import { isEmpty } from "../date/isEmpty";
import { padLeft } from "../text/padLeft";

/**
 * Returns a string represantation of a date-time. dd[/]mm[/]yyyy HH:mm:ss
 * @return Date
 */
export const toString = (
  targetDate: Date,
  dateDigit?: Number,
  hourDigit?: Number
): string => {
  let datePart: String = "";
  let timePart: String = "";

  if (isEmpty(targetDate)) {
    return "";
  } else {
    switch (dateDigit) {
      case 0:
        datePart = "";
        break;
      case 8:
        datePart = `${padLeft(
          targetDate.getDate().toString(),
          2,
          "0"
        )}/${padLeft(
          (targetDate.getMonth() + 1).toString(),
          2,
          "0"
        )}/${targetDate
          .getFullYear()
          .toString()
          .substr(-2)}`;
        break;
      case 10:
        datePart = `${padLeft(
          targetDate.getDate().toString(),
          2,
          "0"
        )}/${padLeft(
          (targetDate.getMonth() + 1).toString(),
          2,
          "0"
        )}/${targetDate.getFullYear()}`;
        break;

      default:
        datePart = `${padLeft(
          targetDate.getDate().toString(),
          2,
          "0"
        )}/${padLeft(
          (targetDate.getMonth() + 1).toString(),
          2,
          "0"
        )}/${targetDate.getFullYear()}`;
        break;
    }

    switch (hourDigit) {
      case 0:
        timePart = "";
        break;
      case 2:
        datePart = "";
        timePart = `${padLeft(
          targetDate.getHours().toString(),
          2,
          "0"
        )}:${padLeft(targetDate.getMinutes().toString(), 2, "0")}`;
        break;
      case 5:
        timePart = `${padLeft(
          targetDate.getHours().toString(),
          2,
          "0"
        )}:${padLeft(targetDate.getMinutes().toString(), 2, "0")}`;
        break;
      case 8:
        timePart = `${padLeft(
          targetDate.getHours().toString(),
          2,
          "0"
        )}:${padLeft(targetDate.getMinutes().toString(), 2, "0")}:${padLeft(
          targetDate.getSeconds().toString(),
          2,
          "0"
        )}`;
        break;

      case 12:
        timePart = `${padLeft(
          targetDate.getHours().toString(),
          2,
          "0"
        )}:${padLeft(targetDate.getMinutes().toString(), 2, "0")}:${padLeft(
          targetDate.getSeconds().toString(),
          2,
          "0"
        )}.${padLeft(targetDate.getMilliseconds().toString(), 3, "0")}`;
        break;

      default:
        timePart = `${padLeft(
          targetDate.getHours().toString(),
          2,
          "0"
        )}:${padLeft(targetDate.getMinutes().toString(), 2, "0")}:${padLeft(
          targetDate.getSeconds().toString(),
          2,
          "0"
        )}`;
        break;
    }

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
