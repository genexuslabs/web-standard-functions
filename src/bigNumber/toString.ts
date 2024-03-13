import { GxBigNumber } from "../types/gxbignumber";

/**
 * Converts the give number to string
 * @param {GxBigNumber} value
 * @param {GxBigNumber} characters
 * @param {GxBigNumber} decimals
 * @returns string
 */
export const toStringBigNumber = (
  value: GxBigNumber,
  characters: GxBigNumber,
  decimals: GxBigNumber
): string => {
  let decimalsAux = Number(decimals.intNumberAll);
  let charactersAux = Number(characters.intNumberAll);

  if (Number.isNaN(value.intNumberAll)) {
    return "";
  }

  if (decimalsAux === 0) {
    return value.toString().padStart(charactersAux);
  }

  let strNum = value.toString();
  let int = strNum.split(".").concat("")[0];
  let decimal = strNum.split(".").concat("")[1];

  strNum = (
    int +
    "." +
    decimal.slice(0, decimalsAux).padEnd(decimalsAux, "0")
  ).padStart(charactersAux);

  return strNum;
};
