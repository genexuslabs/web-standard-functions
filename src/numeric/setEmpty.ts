/**
 * Assigns the empty value in an attribute or variable
 * @param target
 * @return number
 */

import { GxBigDecimal } from "../types/gxBigDecimal";

export const setEmpty = (
  target: number | GxBigDecimal
): number | GxBigDecimal => {
  if (target instanceof GxBigDecimal) {
    return GxBigDecimal.setEmpty();
  } else {
    return 0;
  }
};
