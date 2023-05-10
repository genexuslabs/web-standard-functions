/**
 * Test Date for emptiness
 * @param {GxDate | GxDatetime} target
 * @return boolean
 */

import { GxDate } from "../types/gxdate";
import { GxDatetime } from "../types/gxdatetime";
import { EMPTY_DATE_VALUE } from "./core";

export const isEmpty = (target: GxDate | GxDatetime): boolean => {
  let aux = target.getTime() === EMPTY_DATE_VALUE.getTime();
  return aux;
};
