/**
 * Returns a string represantation of a date. dd[/]mm[/]yyyy
 * @return Date
 */
import {isEmpty} from './isEmpty';

export const toString = (targetDate: Date): string => {
  return isEmpty(targetDate) ? "" : `${targetDate.getDate()}/${targetDate.getMonth() + 1}/${targetDate.getFullYear()}`;
};
