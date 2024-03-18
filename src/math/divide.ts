import { GxBigNumber } from "../types/gxbignumber";

export const divide = (num1, num2, decimal?): GxBigNumber => {
  let a;
  let b;
  let d = 0;

  if (!decimal) {
    decimal = 18;
  }

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

  let rep;
  if (a.decimals === 0) {
    if (b.intNumberAll.toString().length > 18) {
      rep = b.intNumberAll.toString().length * 2 + 1;
      d = rep - b.decimals;
    } else {
      rep = 18 * 2 + 1;
      d = rep - b.decimals;
    }
  } else {
    if (b.intNumberAll.toString().length > 18) {
      rep = b.intNumberAll.toString().length * 2 + 1;
      d = rep + a.decimals - b.decimals;
    } else {
      rep = 18 * 2 + 1;
      d = rep + a.decimals - b.decimals;
    }
  }

  let d1 = a.intNumberAll * BigInt("1" + "0".repeat(rep));
  let d2 = b.intNumberAll;

  let r = d1 / d2;
  if (decimal !== 0) {
    r = BigInt(r.toString().slice(0, -d + decimal));
  } else {
    decimal = d;
  }
  return GxBigNumber.fromBigInt(r, decimal);
};
