import { applyOffset } from "./applyOffset";
import { getTimezoneOffset } from "./getTimezoneOffset";

export const localToUTC = (d: Date): Date => {
  return applyOffset(d, +getTimezoneOffset());
};
