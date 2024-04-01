import { GxBigNumber } from "../types/gxbignumber";

export const add = (
  num1: number | GxBigNumber | string,
  num2: number | GxBigNumber | string
): GxBigNumber => {
  let a = new GxBigNumber(num1);
  let b = new GxBigNumber(num2);

  return GxBigNumber.normalizePrecision(
    GxBigNumber.fromBigInt(
      b.normalizeDecimals(a) + a.normalizeDecimals(b),
      a.decimals
    )
  );
};
