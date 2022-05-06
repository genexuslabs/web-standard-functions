/**
 * Returns a Date from its parts
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @return Date
 */

import { EMPTY_DATE_VALUE } from "./core";

export const newInstance = (year: number, month: number, day: number): Date => {
  let ret = new Date(year, month - 1, day, 0, 0, 0, 0);
  let yearAux = 0;
  let yearNow = Number(
    new Date()
      .getFullYear()
      .toString()
      .slice(-2)
  );

  switch (year.toString().length) {
    case 2:
      if (year === 0) {
        yearAux = 2000;
      }
      if (0 < year && year < yearNow) {
        yearAux = Number("20" + year.toString());
      }
      if (yearNow <= year && year < 100) {
        yearAux = Number("19" + year.toString());
      }

      break;

    case 1:
      if (0 <= year && year <= yearNow) {
        yearAux = Number("200" + year.toString());
      }
      break;

    case 4:
      yearAux = year;
      break;

    default:
      break;
  }

  ret = new Date(yearAux, month - 1, day, 0, 0, 0, 0);

  return ret.getFullYear() === yearAux &&
    ret.getMonth() === month - 1 &&
    ret.getDate() === day
    ? ret
    : EMPTY_DATE_VALUE;
};
