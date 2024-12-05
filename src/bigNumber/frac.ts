import { subtract } from "../math/subtract";
import { GxBigNumber } from "../types/gxbignumber";
import { integerBigNumber } from "./integer";

export const fracBigNumber = (
  target: number | GxBigNumber | string
): GxBigNumber => {
  let intPart = integerBigNumber(target);
  let res = subtract(target, intPart);

  return res;
};
