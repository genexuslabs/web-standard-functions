import { GxBigDecimal } from "../types/gxBigDecimal";

export const negate = (num: number | GxBigDecimal): number => {
  if (num instanceof GxBigDecimal) {
    return GxBigDecimal.negate(num);
  } else {
    return -num;
  }
};
