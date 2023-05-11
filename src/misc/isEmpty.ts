import { isEmpty as dIsEmpty } from "../date/isEmpty";
import { isEmpty as sIsEmpty } from "../text/isEmpty";
import { isEmpty as nIsEmpty } from "../numeric/isEmpty";
import { isEmpty as bIsEmpty } from "../bool/isEmpty";
import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";

/**
 * @param value
 * @return boolean
 */
export const isEmpty = (
  value: boolean | number | string | Date | null | undefined | GxDate
): boolean => {
  if (value === null || value === undefined) {
    return true;
  }
  if (value instanceof GxDate || value instanceof GxDatetime) {
    return dIsEmpty(value);
  } else if (typeof value === "string") {
    return sIsEmpty(value);
  } else if (typeof value === "number") {
    return nIsEmpty(value);
  } else if (typeof value === "boolean") {
    return bIsEmpty(value);
  }
  return false;
};
