import { divide } from "../math/divide";
import { mod } from "../math/mod";
import { multiply } from "../math/multiply";
import { subtract } from "../math/subtract";
import { padLeft } from "../text/padLeft";

export class GxBigNumber {
  decimals = 18;
  exponent = 0;
  intNumberAll;
  static d: bigint;

  constructor(bigDecimal: string | GxBigNumber | number = 0) {
    if (bigDecimal instanceof GxBigNumber) {
      return bigDecimal;
    }

    if (Number.isNaN(bigDecimal)) {
      this.intNumberAll = NaN;
      this.decimals = NaN;
      this.exponent = NaN;
      return;
    }

    if (bigDecimal.toString().indexOf("e") === -1) {
      let [ints, decimals] = bigDecimal
        .toString()
        .split(".")
        .concat("");
      if (decimals === "") {
        this.decimals = 0;
      } else {
        this.decimals = decimals.length;
      }
      this.intNumberAll = BigInt(
        ints + decimals.padEnd(this.decimals, "0").slice(0, this.decimals)
      );
      GxBigNumber.d = BigInt("1" + "0".repeat(this.decimals));
    } else {
      let [ints, decimals] = bigDecimal
        .toString()
        .split(".")
        .concat("");

      if (Number(decimals.split("e").concat("")[1]) < 0) {
        this.decimals = decimals.split("e").concat("")[0].length;
        this.exponent = Number(decimals.split("e").concat("")[1]);
      } else {
        this.decimals = decimals.split("e").concat("")[0].length;
        this.exponent = Number(decimals.split("e").concat("")[1]);
      }

      if (this.decimals > 0) {
        this.intNumberAll =
          BigInt(
            ints +
              decimals
                .split("e")
                .concat("")[0]
                .padEnd(this.decimals, "0")
                .slice(0, this.decimals)
          ) +
          BigInt(
            GxBigNumber.round &&
              decimals.split("e").concat("")[0][this.decimals] >= "5"
          );
        GxBigNumber.d = BigInt("1" + "0".repeat(this.decimals));
      } else {
        this.intNumberAll =
          BigInt(
            ints +
              decimals
                .split("e")
                .concat("")[0]
                .padEnd(this.decimals, "0")
          ) +
          BigInt(
            GxBigNumber.round &&
              decimals.split("e").concat("")[0][this.decimals] >= "5"
          );
        GxBigNumber.d = BigInt("1" + "0".repeat(Math.abs(this.decimals)));
      }
    }
  }

  serialize() {
    return this.toString();
  }

  deserialize(x) {
    return new GxBigNumber(x);
  }

  toString() {
    if (Number.isNaN(this.intNumberAll)) {
      return "";
    }

    if (this.decimals === 0) {
      return this.intNumberAll.toString();
    } else if (
      this.intNumberAll
        .toString()
        .slice(-this.decimals)
        .replace(/0/g, "") === ""
    ) {
      return this.intNumberAll
        .toString()
        .padStart(this.decimals + 1, "0")
        .slice(0, -this.decimals);
    } else {
      let result;
      let str = "";

      if (this.intNumberAll.toString().includes("-")) {
        result = this.intNumberAll.toString().padStart(this.decimals + 2, "0");

        str = "-";
        result = result.toString().replace("-", "");
      } else {
        result = this.intNumberAll.toString().padStart(this.decimals + 1, "0");
      }

      if (this.exponent !== 0) {
        console.log("entro a exponent");
        if (this.exponent < 0) {
          result = result.slice(0, this.decimals + 1);
          result =
            "0" +
            "." +
            result
              .padStart(Math.abs(this.exponent) + this.decimals, "0")
              .replace(/\.?0+$/, "");
        } else {
          result =
            result.slice(0, -this.decimals) +
            "." +
            result.slice(-this.decimals).replace(/\.?0+$/, "");
        }
      } else {
        result =
          result.slice(0, -this.decimals) +
          "." +
          result.slice(-this.decimals).replace(/\.?0+$/, "");
      }
      str = str + result;
      return str;
    }
  }

  static fromBigInt(bigInt, decimals) {
    let bd = new GxBigNumber(0);
    bd.intNumberAll = bigInt;
    bd.decimals = decimals;
    return bd;
  }

  static toStringGx(
    value: GxBigNumber,
    characters: number,
    decimals: number
  ): string {
    if (Number.isNaN(value.intNumberAll)) {
      return "";
    }

    if (decimals === 0) {
      return value.toString().padStart(characters);
    }

    let strNum = value.toString();
    let int = strNum.split(".").concat("")[0];
    let decimal = strNum.split(".").concat("")[1];

    strNum = (
      int +
      "." +
      decimal.slice(0, decimals).padEnd(decimals, "0")
    ).padStart(characters);

    return strNum;
  }

  static str(
    value: GxBigNumber,
    length: number = 10,
    decimals: number = 0
  ): string {
    let strNum = value.toString();

    let int = strNum.split(".").concat("")[0];
    let decimal = strNum
      .split(".")
      .concat("")[1]
      .slice(0, decimals + 1);

    let result;
    if (decimal !== "") {
      if (int.indexOf("-") !== -1) {
        result =
          "-" +
          GxBigNumber.round(
            new GxBigNumber(int.replace("-", "") + "." + decimal),
            decimals
          ).toString();
      } else {
        result = GxBigNumber.round(
          new GxBigNumber(int + "." + decimal),
          decimals
        ).toString();
      }
    } else {
      result = int;
    }

    let res;
    if (result.length > length) {
      if (decimals === 0) {
        res = padLeft("", length, "*");
      } else {
        res = GxBigNumber.str(value, length, 0);
      }
    } else {
      res = padLeft(result, length, " ");
    }

    return res;
  }

  getintNumberAll(bigDecimal: GxBigNumber) {
    return bigDecimal.intNumberAll;
  }

  normalizeDecimals(num) {
    if (num instanceof GxBigNumber) {
      if (this.decimals < num.decimals) {
        this.intNumberAll = BigInt(
          this.intNumberAll + "0".repeat(num.decimals - this.decimals)
        );
        this.decimals = num.decimals;
      } else if (num.decimals < this.decimals) {
        num.intNumberAll = BigInt(
          num.intNumberAll + "0".repeat(this.decimals - num.decimals)
        );
        num.decimals = this.decimals;
      }
      return this.getintNumberAll(num);
    }
  }

  static convertToDecimal(value) {
    if (!(value instanceof GxBigNumber)) {
      value = new GxBigNumber(value);
    }
    if (Number.isNaN(value.intNumberAll)) {
      return NaN;
    }
    let str = value.toString().substring(0, 15);
    return Number(str);
  }

  static convertToInt(value) {
    if (!(value instanceof GxBigNumber)) {
      value = new GxBigNumber(value);
    }
    if (Number.isNaN(value.intNumberAll)) {
      return NaN;
    }
    let str = value.toString().split(".")[0];
    return Number(str);
  }

  static convertToBigDecimal(value) {
    return new GxBigNumber(value);
  }

  static compare(num1, num2) {
    let a;
    let b;

    if (!(num1 instanceof GxBigNumber)) {
      a = new GxBigNumber(num1);
    } else {
      a = num1;
    }
    if (!(num2 instanceof GxBigNumber)) {
      b = new GxBigNumber(num2);
    } else {
      b = num2;
    }

    if (
      a.toString().replace(/\.(?=[^.0]*$)/, "") ===
      b.toString().replace(/\.(?=[^.0]*$)/, "")
    ) {
      return true;
    } else {
      return false;
    }
  }

  static aMayorb(a, b): boolean {
    let [aInts, aDecimals] = a.toString().split(".");
    let [bInts, bDecimals] = b.toString().split(".");

    if (
      Number(aInts) > Number(bInts) ||
      (Number(aInts) === Number(bInts) && Number(aDecimals) > Number(bDecimals))
    ) {
      return true;
    } else {
      return false;
    }
  }

  static negate(num) {
    return -num;
  }

  static isEmpty(value: GxBigNumber) {
    if (value.intNumberAll === BigInt(0)) {
      return true;
    } else {
      return false;
    }
  }

  static setEmpty(): GxBigNumber {
    return new GxBigNumber(0);
  }

  static truncate(value: GxBigNumber, digits: number) {
    const multiplier = Math.pow(10, digits || 0);
    let [ints, decimals] = value.toString().split(".");
    let num = BigInt(ints + decimals.padEnd(digits, "0").slice(0, digits));

    return GxBigNumber.fromBigInt(num, digits).toString();
  }

  static round(value, digits) {
    let result: GxBigNumber;

    if (digits === 0) {
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
      if (digits > 0) {
        let ints = value.toString().split(".")[0];
        let decimals = value.toString().split(".")[1];
        let num;
        if (ints.indexOf("-") !== -1) {
          ints = ints.replace("-", "");
          console.log(ints);
          console.log(decimals.padEnd(digits, "0").slice(0, digits));
          num =
            "-" +
            (BigInt(ints + decimals.padEnd(digits, "0").slice(0, digits)) +
              BigInt(decimals[digits] >= "5"));
        } else {
          num =
            BigInt(ints + decimals.padEnd(digits, "0").slice(0, digits)) +
            BigInt(decimals[digits] >= "5");
        }

        result = GxBigNumber.fromBigInt(num, digits);
      } else {
        let ints = value.toString().split(".")[0];
        let aux1 = ints.slice(0, digits);
        let aux2 = BigInt(ints[ints.length + digits] >= "5");

        let num;
        if (ints.indexOf("-") !== -1) {
          ints = ints.replace("-", "");
          num =
            "-" +
            BigInt(
              BigInt(ints.slice(0, digits)) +
                BigInt(ints[ints.length + digits] >= "5")
            )
              .toString()
              .padEnd(value.toString().split(".")[0].length - 1, "0");
        } else {
          num = BigInt(
            BigInt(ints.slice(0, digits)) +
              BigInt(ints[ints.length + digits] >= "5")
          )
            .toString()
            .padEnd(value.toString().split(".")[0].length, "0");
        }

        result = GxBigNumber.fromBigInt(num, 0);
      }
    }

    return result;
  }

  static roundToEven = (value: GxBigNumber, digits: number): GxBigNumber => {
    const multiplier = Math.pow(10, digits || 0);

    const valToRound = multiply(value, multiplier);

    let int = new GxBigNumber(valToRound.toString().split(".")[0]);

    const decimalPart = subtract(valToRound, int);

    let rounded = GxBigNumber.round(valToRound, 0);

    if (
      GxBigNumber.compare(decimalPart, new GxBigNumber(0.5)) &&
      mod(rounded, 2) !== 0
    ) {
      rounded = subtract(rounded, 1);
    }

    return divide(rounded, multiplier);
  };

  static abs = (value: GxBigNumber): GxBigNumber => {
    return new GxBigNumber(value.toString().replace("-", ""));
  };

  static toFormattedString = (value: GxBigNumber, picture: string): string => {
    let result: string = "";

    // *****Decimals******* //
    let decimalValue = value.toString().split(".")[1];
    let decimalPicture = picture.toString().split(".")[1];
    let resultDecimal: string = "";

    if (decimalValue !== undefined && decimalPicture !== undefined) {
      decimalPicture = decimalPicture.replace(")", "");

      if (decimalValue.length < decimalPicture.length) {
        resultDecimal +=
          "." +
          decimalValue +
          "0".repeat(decimalPicture.length - decimalValue.length);
      } else {
        resultDecimal += "." + decimalValue;
      }
    }

    if (decimalValue === undefined && decimalPicture !== undefined) {
      resultDecimal += "." + "0".repeat(decimalPicture.length);
    }

    // *****Integers***** //
    let integerValue = GxBigNumber.abs(value)
      .toString()
      .split(".")[0];
    let integerPicture =
      picture
        .toString()
        .split(".")[0]
        .replace("(", "")
        .replace("DB", "")
        .replace("+", "") + ".";
    let valueLength = integerValue.toString().length;

    for (let i = integerPicture.length; i >= 0; i--) {
      switch (integerPicture.slice(i, i + 1)) {
        case "9":
          if (valueLength < 0) {
            result += 0;
            --valueLength;
          } else {
            if (i === 0 && picture.length < value.toString().length) {
              result += Math.abs(Number(integerValue))
                .toString()
                .slice(0, valueLength + 1)
                .split("")
                .reverse()
                .join("");
            } else {
              result += Math.abs(Number(integerValue))
                .toString()
                .slice(valueLength, valueLength + 1);
              --valueLength;
            }
          }
          break;

        case "Z":
          if (
            Math.abs(Number(integerValue))
              .toString()
              .slice(valueLength, valueLength + 1) !== "" &&
            valueLength >= 0
          ) {
            result += Math.abs(Number(integerValue))
              .toString()
              .slice(valueLength, valueLength + 1);
            --valueLength;
          } else {
            if (
              integerPicture
                .toString()
                .slice(0, i + 1)
                .indexOf("9") !== -1
            ) {
              result += 0;
            } else {
              result += " ";
            }
          }
          break;

        case ".":
          result +=
            Math.abs(Number(integerValue))
              .toString()
              .slice(valueLength, valueLength + 1) +
            resultDecimal
              .split("")
              .reverse()
              .join("");
          --valueLength;
          break;

        case ",":
          if (
            Math.abs(Number(integerValue))
              .toString()
              .slice(valueLength, valueLength + 1) !== ""
          ) {
            result += ",";
          } else {
            if (
              integerPicture
                .toString()
                .slice(0, i + 1)
                .indexOf("9") !== -1
            ) {
              result += ",";
            } else {
              result += " ";
            }
          }
          break;

        default:
          break;
      }
    }

    // ****signs***** //
    let brackets = picture.indexOf("(");
    let DB = picture.indexOf("DB");
    let positive = picture.indexOf("+");
    result = result
      .split("")
      .reverse()
      .join("");

    if (brackets !== -1) {
      if (value.toString().charAt(0) === "-") {
        result = "(" + result + ")";
      } else {
        result = " " + result;
      }
    }

    if (DB !== -1) {
      if (value.toString().charAt(0) === "-") {
        result = "-DB" + result;
      } else {
        result = "CR" + result;
      }
    }

    if (positive !== -1) {
      if (value.toString().charAt(0) === "-") {
        result = "-" + result;
      } else {
        result = "+" + result;
      }
    }

    return result;
  };
}
