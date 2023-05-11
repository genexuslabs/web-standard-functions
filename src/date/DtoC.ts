import { TtoC } from "../datetime/TtoC";
import { GxDate } from "../types/gxdate";
import { isEmpty } from "./isEmpty";

export const toString = (targetDate: GxDate, dateFormat?: String): string => {
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
