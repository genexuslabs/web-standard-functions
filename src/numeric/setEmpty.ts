/**
 * Assigns the empty value in an attribute or variable
 * @param target
 * @return number
 */

import { GxBigNumber } from "../types/gxbignumber";

export const setEmpty = (target: number | GxBigNumber): any => {
  if (target instanceof GxBigNumber) {
    return GxBigNumber.setEmpty();
  } else {
    return 0;
  }
};
