import { GxBigNumber } from "../types/gxbignumber";
/**
 * Truncates the given number to the specified number of decimal digits
 * @param {GxBigNumber} value
 * @param {GxBigNumber} digits
 * @returns GxBigNumber
 */
export const truncateBigNumber = (
  value: GxBigNumber,
  digits: GxBigNumber
): GxBigNumber => {
  let [ints, decimals] = value.toString().split(".");
  let num;
  let digitsAux = Number(digits.toString());

  if (Number(digits.intNumberAll) === 0) {
    return ints;
  }

  if (digitsAux < 0) {
    num = BigInt(ints.slice(0, digitsAux).padEnd(ints.length, "0"));
    digitsAux = 0;
  } else {
    num = BigInt(ints + decimals.padEnd(digitsAux, "0").slice(0, digitsAux));
  }
  return GxBigNumber.fromBigInt(num, digitsAux);
};
