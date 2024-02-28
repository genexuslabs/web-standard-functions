import { GxBigNumber } from "../types/gxbignumber";

export const multiply = (num1, num2): GxBigNumber => {
  let a;
  let b;
  let d = 0;
  if (!(num1 instanceof GxBigNumber)) {
    a = new GxBigNumber(num1);
    d = d + a.decimals;
  } else {
    a = num1;
    d = d + num1.decimals;
  }
  if (!(num2 instanceof GxBigNumber)) {
    b = new GxBigNumber(num2);
    d = d + b.decimals;
  } else {
    b = num2;
    d = d + num2.decimals;
  }

  return GxBigNumber.fromBigInt(a.intNumberAll * b.intNumberAll, d);
};
