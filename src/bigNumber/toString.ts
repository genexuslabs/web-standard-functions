import { add } from "../math/add";
import { GxBigNumber } from "../types/gxbignumber";
import { roundBigNumber } from "./round";

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

  let int = value
    .toString()
    .split(".")
    .concat("")[0];
  let decimal = value
    .toString()
    .split(".")
    .concat("")[1]
    .slice(0, add(decimals, new GxBigNumber(1)));

  let strNum;
  if (decimal !== "") {
    strNum = roundBigNumber(value, decimals).toString();
  } else {
    strNum = int;
  }

  if (decimalsAux !== 0) {
    let strNumint = strNum.split(".").concat("")[0];
    let strNumdecimal = strNum.split(".").concat("")[1];

    if (strNumdecimal !== "") {
      strNum = (
        strNumint +
        "." +
        strNumdecimal.padEnd(decimalsAux, "0")
      ).padStart(charactersAux);
    } else {
      strNum = (strNumint + "." + "".padEnd(decimalsAux, "0")).padStart(
        charactersAux
      );
    }
  } else {
    strNum = strNum.padStart(charactersAux);
  }

  return strNum;
};
