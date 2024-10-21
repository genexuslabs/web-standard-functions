import { GxBigNumber } from "../types/gxbignumber";

export const negate = (num: number | GxBigNumber | string): GxBigNumber => {
  let res;
  num = new GxBigNumber(num);
  if (num.intNumberAll.toString().indexOf("-") !== -1) {
    res = num.toString().replace("-", "");
  } else {
    res = "-" + num.toString();
  }
  return new GxBigNumber(res);
};
