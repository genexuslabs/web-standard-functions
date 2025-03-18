import { applyOffset } from "./applyOffset";
import { getTimezoneOffset } from "./getTimezoneOffset";

export const UTCToLocal = (d: Date): Date => {
  return applyOffset(d, -getTimezoneOffset());
};
