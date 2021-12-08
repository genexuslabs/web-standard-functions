import { setEmpty as dSetEmpty } from "../datetime/setEmpty";
import { setEmpty as sSetEmpty } from "../text/setEmpty";
import { setEmpty as nSetEmpty } from "../numeric/setEmpty";
import { setEmpty as bSetEmpty } from "../bool/setEmpty";

/**
 * @param value
 * @return any
 */
export const emptyValue = (
  value: boolean | number | string | Date | null | undefined
): any => {
  if (value instanceof Date) {
    return dSetEmpty(value);
  } else if (typeof value === "string") {
    return sSetEmpty(value);
  } else if (typeof value === "number") {
    return nSetEmpty(value);
  } else if (typeof value === "boolean") {
    return bSetEmpty(value);
  }
  return null;
};
