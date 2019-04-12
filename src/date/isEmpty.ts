/**
 * Test Date for emptiness
 * @param {Date} target
 * @return boolean
 */

 import {EMPTY_DATE_VALUE} from "./core";

export const isEmpty = (target: Date): boolean => {
  return target.getTime() === EMPTY_DATE_VALUE.getTime();
};
