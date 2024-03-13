export class GxBigNumber {
  decimals = 18;
  exponent = 0;
  intNumberAll;
  round = false;
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
            this.round &&
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
            this.round &&
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

  static convertToInt(value): GxBigNumber {
    if (!(value instanceof GxBigNumber)) {
      value = new GxBigNumber(value);
    }
    let str = value.toString().split(".")[0];
    return new GxBigNumber(str);
  }

  static convertToBigDecimal(value) {
    return new GxBigNumber(value);
  }

  static convertBigNumberToNumber(value): number {
    return Number(value.toString());
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
    } else if (GxBigNumber.aMayorb(num1, num2)) {
      return 1;
    } else {
      return -1;
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
}
