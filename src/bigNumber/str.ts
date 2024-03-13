import { add } from "../math/add";
import { padLeft } from "../text/padLeft";
import { GxBigNumber } from "../types/gxbignumber";
import { roundBigNumber } from "./round";

/**
 * Converts the given number to string
 * @param {GxBigNumber} value
 * @param {GxBigNumber} length
 * @param {GxBigNumber} decimals
 * @returns string
 */
export const strBigNumber = (
  value: GxBigNumber,
  length: GxBigNumber = new GxBigNumber(10),
  decimals: GxBigNumber = new GxBigNumber(0)
): string => {
  let strNum = value.toString();
  let decimalsAux = Number(decimals.toString());
  let lengthAux = Number(length.toString());

  let int = strNum.split(".").concat("")[0];
  let decimal = strNum
    .split(".")
    .concat("")[1]
    .slice(0, add(decimals, new GxBigNumber(1)));

  let result;
  if (decimal !== "") {
    if (int.indexOf("-") !== -1) {
      result =
        "-" +
        roundBigNumber(
          new GxBigNumber(int.replace("-", "") + "." + decimal),
          decimals
        ).toString();
    } else {
      result = roundBigNumber(
        new GxBigNumber(int + "." + decimal),
        decimals
      ).toString();
    }
  } else {
    result = int;
  }

  let res;

  if (result.length > lengthAux) {
    if (decimalsAux === 0) {
      res = padLeft("", lengthAux, "*");
    } else {
      res = strBigNumber(value, length, new GxBigNumber(0));
    }
  } else {
    res = padLeft(result, lengthAux, " ");
  }

  return res;
};
