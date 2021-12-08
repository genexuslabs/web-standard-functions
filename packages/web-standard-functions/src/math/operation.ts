import BigNumber from "bignumber.js";

/**
 * Returns a new binary operation called `operationName` with operands `operand1` and `operand2`
 * @param operationName Name of the BigNumber mathematical binary operation
 */
export function defineBinaryOperation(
  operationName: string
): (operand1: string | number, operand2: string | number) => string | number {
  return (
    operand1: string | number,
    operand2: string | number
  ): string | number => binaryOperation(operationName, operand1, operand2);
}

/**
 * Returns a new unary operation called `operationName` with one operand called `operand`
 * @param operationName Name of the BigNumber mathematical unary operation
 */
export function defineUnaryOperation(
  operationName: string
): (operand: string | number) => string | number {
  return (operand: string | number): string | number =>
    unaryOperation(operationName, operand);
}

/**
 * Performs a BigNumber's binary operation called `operationName` on operands `operand1` and `operand2`
 * @param operationName Name of the BigNumber mathematical operation
 * @param operand1 First operand
 * @param operand2 Second operand
 */
function binaryOperation(
  operationName: string,
  operand1: string | number,
  operand2: string | number
): string | number {
  intiBigNumberConfig();

  const operand1BigN = new BigNumber(operand1);
  const operand2BigN = new BigNumber(operand2);

  return operand1BigN[operationName](operand2BigN).toFormat();
}

/**
 * Performs a BigNumber's unary operation called `operationName` on operand `operand`
 * @param operationName Name of the BigNumber mathematical operation
 * @param operand Operation operand
 */
function unaryOperation(operationName: string, operand: string | number) {
  intiBigNumberConfig();

  const operandBigN = new BigNumber(operand);

  return operandBigN[operationName]().toFormat();
}

function intiBigNumberConfig() {
  BigNumber.config({
    FORMAT: {
      decimalSeparator: ".",
      groupSeparator: ","
    }
  });
}
