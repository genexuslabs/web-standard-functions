export class GxBigDecimal {
  decimals = 18;
  static round = false;
  intNumberAll;
  static d: bigint;

  constructor(bigDecimal) {
    if (bigDecimal instanceof GxBigDecimal) {
      return bigDecimal;
    }
    let [ints, decimals] = bigDecimal
      .toString()
      .split(".")
      .concat("");
    this.decimals = decimals.length;
    GxBigDecimal.d = BigInt("1" + "0".repeat(this.decimals));
    this.intNumberAll =
      BigInt(
        ints + decimals.padEnd(this.decimals, "0").slice(0, this.decimals)
      ) + BigInt(GxBigDecimal.round && decimals[this.decimals] >= "5");
  }

  // Cuando hace el toString ahi es cuando lo convierte a "decimal" le agrega el punto decimal
  toString() {
    const result = this.intNumberAll
      .toString()
      .padStart(this.decimals + 1, "0");
    return result.slice(0, -this.decimals) + "." + result.slice(-this.decimals);
  }

  static fromBigInt(bigInt, decimals) {
    let bd = new GxBigDecimal(0);
    bd.intNumberAll = bigInt;
    bd.decimals = decimals;
    return bd;
  }

  static add(num1, num2) {
    let a;
    let b;
    if (!(num1 instanceof GxBigDecimal)) {
      a = new GxBigDecimal(num1);
    } else {
      a = num1;
    }
    if (!(num2 instanceof GxBigDecimal)) {
      b = new GxBigDecimal(num2);
    } else {
      b = num2;
    }

    return GxBigDecimal.fromBigInt(
      b.normalizeDecimals(a) + a.normalizeDecimals(b),
      a.decimals
    );
  }

  static subtract(num1, num2) {
    let a;
    let b;
    if (!(num1 instanceof GxBigDecimal)) {
      a = new GxBigDecimal(num1);
    } else {
      a = num1;
    }
    if (!(num2 instanceof GxBigDecimal)) {
      b = new GxBigDecimal(num2);
    } else {
      b = num2;
    }

    return GxBigDecimal.fromBigInt(
      b.normalizeDecimals(a) - a.normalizeDecimals(b),
      a.decimals
    );
  }

  static multiply(num1, num2) {
    let a;
    let b;
    let d = 0;
    if (!(num1 instanceof GxBigDecimal)) {
      a = new GxBigDecimal(num1);
      d = d + a.decimals;
    } else {
      a = num1;
      d = d + num1.decimals;
    }
    if (!(num2 instanceof GxBigDecimal)) {
      b = new GxBigDecimal(num2);
      d = d + b.decimals;
    } else {
      b = num2;
      d = d + num2.decimals;
    }

    return GxBigDecimal.fromBigInt(a.intNumberAll * b.intNumberAll, d);
  }

  static divide(num1, num2) {
    let intNumber = "";
    let decimalNumber = "";
    let d = 0;
    let r;

    intNumber = (num1 / num2)
      .toString()
      .split(".")
      .concat("")[0];
    decimalNumber = (num1 / num2)
      .toString()
      .split(".")
      .concat("")[1];
    d = (num1 / num2)
      .toString()
      .split(".")
      .concat("")[1].length;

    if (intNumber.charAt(0) === "0") {
      if (decimalNumber.charAt(0) === "0") {
        decimalNumber = decimalNumber.slice(1);
        while (decimalNumber.charAt(0) === "0") {
          decimalNumber = decimalNumber.slice(1);
        }
      }
      r = decimalNumber;
    } else {
      r = intNumber + decimalNumber;
    }

    return GxBigDecimal.fromBigInt(r, d);
  }

  getintNumberAll(bigDecimal: GxBigDecimal) {
    return bigDecimal.intNumberAll;
  }

  normalizeDecimals(num) {
    if (num instanceof GxBigDecimal) {
      if (this.decimals < num.decimals) {
        this.decimals = num.decimals;
        this.intNumberAll = BigInt(
          this.intNumberAll + "0".repeat(this.decimals)
        );
      } else if (num.decimals < this.decimals) {
        num.decimals = this.decimals;
        num.intNumberAll = BigInt(num.intNumberAll + "0".repeat(num.decimals));
      }
      return this.getintNumberAll(num);
    } else {
      let b = new GxBigDecimal(num);
      if (this.decimals < b.decimals) {
        this.decimals = b.decimals;
        this.intNumberAll = BigInt(this.intNumberAll + "0".repeat(b.decimals));
      } else if (b.decimals < this.decimals) {
        b.decimals = this.decimals;
        b.intNumberAll = BigInt(b.intNumberAll + "0".repeat(this.decimals));
      }
      return b.intNumberAll;
    }
  }

  static convertToDecimal(value) {
    let str = value.toString().substring(0, 15);
    return Number(str);
  }

  static convertToInt(value) {
    let str = value.toString().split(".")[0];
    return Number(str);
  }

  static convertToBigDecimal(value) {
    return new GxBigDecimal(value);
  }
}
