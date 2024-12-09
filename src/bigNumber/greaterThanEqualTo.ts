import { GxBigNumber } from "../types/gxbignumber";

export const greaterThanEqualTo = (
  a: GxBigNumber | number,
  b: GxBigNumber | number
): boolean => {
  let [aInts, aDecimals] = a.toString().split(".");
  let [bInts, bDecimals] = b.toString().split(".");

  if (
    Number(aInts) >= Number(bInts) ||
    (Number(aInts) === Number(bInts) && Number(aDecimals) >= Number(bDecimals))
  ) {
    return true;
  } else {
    return false;
  }
};
