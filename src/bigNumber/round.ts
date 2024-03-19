import { GxBigNumber } from "../types/gxbignumber";
/**
 * Rounds the given number to the specified number of decimal digits
 * @param {GxBigNumber} value
 * @param {GxBigNumber} digits
 * @returns GxBigNumber
 */
export const roundBigNumber = (
  value: GxBigNumber,
  digits: GxBigNumber
): GxBigNumber => {
  let result: GxBigNumber;
  let digitsAux = Number(digits.toString());

  if (digitsAux === 0) {
    let num2;
    let ints = value.toString().split(".")[0];
    let decimals = value.toString().split(".")[1];
    if (ints.indexOf("-") !== -1) {
      ints = ints.replace("-", "");

      if (ints === "0") {
        num2 = BigInt(decimals[0] >= "5").toString();
      } else {
        num2 =
          "-" + BigInt(BigInt(ints) + BigInt(decimals[0] >= "5")).toString();
      }
    } else {
      if (ints === "0") {
        num2 = BigInt(decimals[0] >= "5").toString();
      } else {
        num2 = BigInt(BigInt(ints) + BigInt(decimals[0] >= "5")).toString();
      }
    }

    result = new GxBigNumber(num2);
  } else {
    if (digitsAux > 0) {
      let ints = value.toString().split(".")[0];
      let decimals = value.toString().split(".")[1];
      let num;
      if (ints.indexOf("-") !== -1) {
        ints = ints.replace("-", "");
        num =
          "-" +
          BigInt(
            BigInt(ints + decimals.padEnd(digitsAux, "0").slice(0, digitsAux)) +
              BigInt(decimals[digitsAux] >= "5")
          ).toString();
      } else {
        num = BigInt(
          BigInt(ints + decimals.padEnd(digitsAux, "0").slice(0, digitsAux)) +
            BigInt(decimals[digitsAux] >= "5")
        ).toString();
      }

      result = GxBigNumber.fromBigInt(num, digits);
    } else {
      let ints = value.toString().split(".")[0];
      let aux1 = ints.slice(0, digitsAux);
      let aux2 = BigInt(ints[ints.length + digitsAux] >= "5");

      let num;
      if (ints.indexOf("-") !== -1) {
        ints = ints.replace("-", "");
        num =
          "-" +
          BigInt(
            BigInt(ints.slice(0, digitsAux)) +
              BigInt(ints[ints.length + digitsAux] >= "5")
          )
            .toString()
            .padEnd(value.toString().split(".")[0].length - 1, "0");
      } else {
        num = BigInt(
          BigInt(ints.slice(0, digitsAux)) +
            BigInt(ints[ints.length + digitsAux] >= "5")
        )
          .toString()
          .padEnd(value.toString().split(".")[0].length, "0");
      }

      result = GxBigNumber.fromBigInt(num, 0);
    }
  }

  return result;
};
