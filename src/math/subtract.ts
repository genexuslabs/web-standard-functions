import { GxBigNumber } from "../types/gxbignumber";

export const subtract = (num1, num2): GxBigNumber => {
  let a;
  let b;
  if (!(num1 instanceof GxBigNumber)) {
    a = new GxBigNumber(num1);
  } else {
    a = num1;
  }
  if (!(num2 instanceof GxBigNumber)) {
    b = new GxBigNumber(num2);
  } else {
    b = num2;
  }

  return GxBigNumber.fromBigInt(
    b.normalizeDecimals(a) - a.normalizeDecimals(b),
    a.decimals
  );
};
