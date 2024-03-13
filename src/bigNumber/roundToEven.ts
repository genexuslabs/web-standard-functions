import { divide } from "../math/divide";
import { multiply } from "../math/multiply";
import { subtract } from "../math/subtract";
import { GxBigNumber } from "../types/gxbignumber";
import { modBigNumber } from "./mod";
import { roundBigNumber } from "./round";

/**
 * Rounds to even the given number to the specified number of decimal digits
 * @param {GxBigNumber} value
 * @param {GxBigNumber} digits
 * @returns GxBigNumber
 */
export const roundToEvenBigNumber = (
  value: GxBigNumber,
  digits: GxBigNumber
): GxBigNumber => {
  let digitsAux = Number(digits.toString());
  const multiplier = Math.pow(10, digitsAux || 0);

  const valToRound = multiply(value, new GxBigNumber(multiplier));

  let int = new GxBigNumber(valToRound.toString().split(".")[0]);

  const decimalPart = subtract(valToRound, int);

  let rounded = roundBigNumber(valToRound, new GxBigNumber(0));

  if (
    GxBigNumber.compare(decimalPart, new GxBigNumber(0.5)) === 0 &&
    GxBigNumber.compare(
      modBigNumber(rounded, new GxBigNumber(2)),
      new GxBigNumber(0)
    ) !== 0
  ) {
    rounded = subtract(rounded, 1);
  }

  return divide(rounded, multiplier);
};
