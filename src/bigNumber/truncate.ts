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

  if (Number(digits.intNumberAll) === 0) {
    return ints;
  }

  if (Number(digits.intNumberAll) < 0) {
    num = BigInt(ints.slice(0, digits.toString()).padEnd(ints.length, "0"));
    digits = new GxBigNumber(0);
  } else {
    num = BigInt(
      ints + decimals.padEnd(digits.toString(), "0").slice(0, digits.toString())
    );
  }
  return GxBigNumber.fromBigInt(num, digits);
};
