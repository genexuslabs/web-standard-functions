import { GxBigNumber } from "../types/gxbignumber";

export const absBigNumber = (
  value: number | GxBigNumber | string
): GxBigNumber => {
  let a = new GxBigNumber(value);
  return new GxBigNumber(a.toString().replace("-", ""));
};
