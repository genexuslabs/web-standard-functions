import { BIG_NUMBER_PRECISION, GxBigNumber } from "../types/gxbignumber";
import { roundBigNumber } from "./round";

export const castToBigNumber = (num1: number | GxBigNumber | string) => {
  const a = new GxBigNumber(num1);
  return roundBigNumber(a, new GxBigNumber(BIG_NUMBER_PRECISION));
};
