import { castToBigNumber } from "../bigNumber/cast";
import { greaterThan } from "../bigNumber/greaterThan";
export const BIG_NUMBER_PRECISION = 28;

export class GxBigNumber {
  decimals = BIG_NUMBER_PRECISION;
  intNumberAll;
  round = false;
  static d: bigint;

  constructor(bigDecimal: string | GxBigNumber | number = 0) {
    if (bigDecimal instanceof GxBigNumber) {
      return bigDecimal;
    }

    if (Number.isNaN(Number(bigDecimal))) {
      this.intNumberAll = NaN;
      this.decimals = NaN;
      return;
    }

    if (bigDecimal.toString().indexOf("e") === -1) {
      const [ints, decimals] = bigDecimal
        .toString()
        .split(".")
        .concat("");

      this.decimals = decimals ? decimals.length : 0;

      this.intNumberAll = BigInt(
        ints + decimals.padEnd(this.decimals, "0").slice(0, this.decimals)
      );
    } else {
      const [coefficient, exponent] = bigDecimal.toString().split("e");

      const [coefficient_i, coefficient_d] = coefficient.toString().split(".");

      const decimals = Number(exponent);

      if (decimals > 0) {
        // Very big
        this.intNumberAll = BigInt(
          coefficient_i +
            (coefficient_d ?? "") +
            "0".repeat(decimals - Number(coefficient_d ?? 0))
        );
        this.decimals = 0;
      } else {
        // Very small
        this.intNumberAll = BigInt(coefficient_i + (coefficient_d ?? ""));
        this.decimals = Math.abs(decimals);
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

      result =
        result.slice(0, -this.decimals) +
        "." +
        result.slice(-this.decimals).replace(/\.?0+$/, "");

      str = str + result;
      return str;
    }
  }

  static fromBigInt(bigInt, decimals) {
    let bd = new GxBigNumber(0);

    if (decimals instanceof GxBigNumber) {
      bd.decimals = Number(decimals.intNumberAll);
    } else {
      bd.decimals = decimals;
    }

    bd.intNumberAll = bigInt;
    return bd;
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

  static normalizePrecision(num: GxBigNumber): GxBigNumber {
    let precision = BIG_NUMBER_PRECISION * 2 + 1;
    let r;

    if (num.toString().indexOf(".") === -1) {
      return num;
    } else {
      if (num.decimals === precision) {
        return num;
      }
      if (num.decimals < precision) {
        let [int, decimal] = num.toString().split(".");
        r = int + "." + decimal.padEnd(precision - num.decimals, "0");
        return new GxBigNumber(r);
      } else {
        r = num.intNumberAll.toString().slice(0, -num.decimals + precision);
        return GxBigNumber.fromBigInt(BigInt(r), precision);
      }
    }
  }

  static convertToInt(value): GxBigNumber {
    if (GxBigNumber.bigNumberIsNaN(value)) {
      return new GxBigNumber(value);
    } else {
      value = castToBigNumber(new GxBigNumber(value));
      let str = value.toString().split(".")[0];
      return new GxBigNumber(str);
    }
  }

  static convertToBigDecimal(value) {
    if (GxBigNumber.bigNumberIsNaN(value)) {
      return new GxBigNumber(value);
    } else {
      return castToBigNumber(new GxBigNumber(value));
    }
  }

  static convertBigNumberToNumber(value): number {
    if (GxBigNumber.bigNumberIsNaN(value)) {
      if (value instanceof GxBigNumber) {
        return Number(value.intNumberAll);
      } else {
        return Number(value);
      }
    } else {
      let strNumber = castToBigNumber(value)
        .toString()
        .slice(0, 15);
      return Number(strNumber);
    }
  }

  static convertBigNumberToString(value) {
    return castToBigNumber(value).toString();
  }

  static bigNumberIsNaN(value): boolean {
    if (value instanceof GxBigNumber) {
      if (Number.isNaN(value.intNumberAll) && Number.isNaN(value.decimals)) {
        return true;
      } else {
        return false;
      }
    } else {
      return Number.isNaN(Number(value));
    }
  }

  static compare(num1, num2) {
    let a = castToBigNumber(new GxBigNumber(num1));
    let b = castToBigNumber(new GxBigNumber(num2));

    let aDecimals;
    let bDecimals;
    let aNumber;
    let bNumber;
    if (a.toString().indexOf(".") !== -1) {
      aDecimals = a
        .toString()
        .split(".")[1]
        .replace(/\.?0+$/, "").length;

      aNumber = a.toString().replace(/\.(?=[^.0]*$)/, "");
    } else {
      aDecimals = 0;
      aNumber = a.toString();
    }

    if (b.toString().indexOf(".") !== -1) {
      bDecimals = b
        .toString()
        .split(".")[1]
        .replace(/\.?0+$/, "").length;

      bNumber = b.toString().replace(/\.(?=[^.0]*$)/, "");
    } else {
      bDecimals = 0;
      bNumber = b.toString();
    }

    if (aNumber === bNumber && aDecimals === bDecimals) {
      return 0;
    } else if (greaterThan(num1, num2)) {
      return 1;
    } else {
      return -1;
    }
  }
}
