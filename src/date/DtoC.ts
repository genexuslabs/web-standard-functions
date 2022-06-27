import { TtoC } from "../datetime/TtoC";
import { isEmpty } from "./isEmpty";

export const toString = (targetDate: Date, dateFormat?: String): string => {
  if (!dateFormat) {
    dateFormat = "MDY";
  }

  let ret = "";
  if (isEmpty(targetDate)) {
    ret = "  /  /  ";
  } else {
    ret = TtoC(targetDate, 8, 0, dateFormat, null);
  }

  return ret;
};
