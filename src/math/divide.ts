import { BIG_NUMBER_PRECISION, GxBigNumber } from "../types/gxbignumber";

export const divide = (
  num1: number | GxBigNumber | string,
  num2: number | GxBigNumber | string,
  decimal?
): GxBigNumber => {
  let a;
  let b;
  let d = 0;

  if (!decimal) {
    decimal = BIG_NUMBER_PRECISION + 1;
  }

  a = new GxBigNumber(num1);
  b = new GxBigNumber(num2);

  let rep;
  if (a.decimals === 0) {
    if (b.intNumberAll.toString().length > BIG_NUMBER_PRECISION) {
      rep = b.intNumberAll.toString().length * 2 + 1;
      d = rep - b.decimals;
    } else {
      rep = BIG_NUMBER_PRECISION * 2 + 1;
      d = rep - b.decimals;
    }
  } else {
    if (b.intNumberAll.toString().length > BIG_NUMBER_PRECISION) {
      rep = b.intNumberAll.toString().length * 2 + 1;
      d = rep + a.decimals - b.decimals;
    } else {
      rep = BIG_NUMBER_PRECISION * 2 + 1;
      d = rep + a.decimals - b.decimals;
    }
  }

  let d1 = a.intNumberAll * BigInt("1" + "0".repeat(rep));
  let d2 = b.intNumberAll;

  return GxBigNumber.normalizePrecision(GxBigNumber.fromBigInt(d1 / d2, d));
};
