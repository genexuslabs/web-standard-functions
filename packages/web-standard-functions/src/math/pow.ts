import { defineBinaryOperation } from "./operation";

/**
 * Returns `operand1` raised to the power `operand2`
 * @param operand1 First operand
 * @param operand2 Second operand
 */
export const pow = defineBinaryOperation("pow");
