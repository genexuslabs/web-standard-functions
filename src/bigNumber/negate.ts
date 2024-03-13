import { GxBigNumber } from "../types/gxbignumber";

export const negateBigNumber = (num: GxBigNumber): GxBigNumber => {
  let res;
  if (num.intNumberAll.toString().indexOf("-") !== -1) {
    res = num.toString().replace("-", "");
  } else {
    res = "-" + num.toString();
  }
  return new GxBigNumber(res);
};
