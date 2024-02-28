import { GxBigNumber } from "../types/gxbignumber";

export const pow = (operand1, operand2): GxBigNumber => {
  let num1 = Number(operand1.toString());
  let num2 = Number(operand2.toString());
  return new GxBigNumber(num1 ** num2);
};
