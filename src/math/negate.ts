import { GxBigNumber } from "../types/gxbignumber";

export const negate = (num: number | GxBigNumber): number => {
  if (num instanceof GxBigNumber) {
    return GxBigNumber.negate(num);
  } else {
    return -num;
  }
};
