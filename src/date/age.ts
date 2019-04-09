/**
 * Returns the difference, in years, between the two parameters.
 * If the second parameter, which is optional, is omitted, then the default value is the value returned by the function Today()
 * @param {Date} dateFrom
 * @param {Date} dateTo
 * @return number
 */

 import { DateTime } from "luxon";

export const age = (dateFrom: Date, dateTo: Date): number  => {
  return Math.trunc((DateTime.fromJSDate(dateTo).diff(DateTime.fromJSDate(dateFrom), 'years')).years);
};
