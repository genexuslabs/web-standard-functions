import { GxBigNumber } from "../types/gxbignumber";
import { divide } from "./divide";

export const idiv = (num1, num2) => {
  return GxBigNumber.convertToInt(divide(num1, num2));
};
