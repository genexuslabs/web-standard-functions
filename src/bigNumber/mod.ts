import { GxBigNumber } from "../types/gxbignumber";

/**
 * @param {GxBigNumber} dividend
 * @param {GxBigNumber} divisor
 * @returns GxBigNumber
 */
export const modBigNumber = (
  dividend: GxBigNumber,
  divisor: GxBigNumber
): GxBigNumber => {
  let dividendAux = 0;
  let divisorAux = 0;
  if (dividend instanceof GxBigNumber) {
    dividendAux = Number(dividend.toString());
  }
  if (divisor instanceof GxBigNumber) {
    divisorAux = Number(divisor.toString());
  }

  if (divisorAux === 0) {
    return new GxBigNumber(NaN);
  } else {
    if (dividendAux >= 0) {
      return new GxBigNumber(
        Math.trunc(Math.abs(dividendAux) % Math.abs(divisorAux))
      );
    } else {
      return new GxBigNumber(
        -Math.trunc(Math.abs(dividendAux) % Math.abs(divisorAux))
      );
    }
  }
};
