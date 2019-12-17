import { isEmpty as dIsEmpty } from "../date/isEmpty";
import { isEmpty as sIsEmpty } from "../text/isEmpty";
import { isEmpty as nIsEmpty } from "../numeric/isEmpty";
import { isEmpty as bIsEmpty } from "../bool/isEmpty";

/**
 * @param value
 * @return boolean
 */
export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === "object" && value instanceof Date) {
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
