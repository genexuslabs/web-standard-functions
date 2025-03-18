import { EMPTY_DATE_VALUE } from "../../date/core";

export const isEmpty = (target: Date): boolean => {
  return target.getTime() === EMPTY_DATE_VALUE.getTime();
};
