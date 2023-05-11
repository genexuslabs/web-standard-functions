/**
 * Returns a Date from its parts
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {number} fy20c
 * @return Date
 */

import { GxDate } from "../types/gxdate";
import { EMPTY_DATE_VALUE } from "./core";

export const newInstance = (
  year: number,
  month: number,
  day: number,
  fy20c?: number
): GxDate => {
  let ret = new GxDate(year, month - 1, day, 0, 0, 0, 0);
  let yearAux = 0;
  if (!fy20c) {
    fy20c = 40;
  }

  switch (year.toString().length) {
    case 2:
      if (year < fy20c) {
        yearAux = Number("20" + year.toString());
      }
      if (year >= fy20c) {
        yearAux = Number("19" + year.toString());
      }

      break;

    case 1:
      if (year === 0) {
        yearAux = 2000;
      } else if (year < fy20c) {
        yearAux = Number("200" + year.toString());
      }
      break;

    case 4:
      yearAux = year;
      break;

    default:
      break;
  }

  ret = new GxDate(yearAux, month - 1, day, 0, 0, 0, 0);

  return ret.getFullYear() === yearAux &&
    ret.getMonth() === month - 1 &&
    ret.getDate() === day
    ? ret
    : new GxDate(EMPTY_DATE_VALUE);
};
