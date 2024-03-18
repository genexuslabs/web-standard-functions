import { GxBigNumber } from "../types/gxbignumber";

export const absBigNumber = (value: GxBigNumber): GxBigNumber => {
  return new GxBigNumber(value.toString().replace("-", ""));
};
