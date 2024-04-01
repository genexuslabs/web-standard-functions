import { GxBigNumber } from "../types/gxbignumber";

export const multiply = (
  num1: number | GxBigNumber | string,
  num2: number | GxBigNumber | string
): GxBigNumber => {
  const a = new GxBigNumber(num1);
  const b = new GxBigNumber(num2);
  const d = a.decimals + b.decimals;

  return GxBigNumber.normalizePrecision(
    GxBigNumber.fromBigInt(a.intNumberAll * b.intNumberAll, d)
  );
};
