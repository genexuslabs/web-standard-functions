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
    return new GxBigDecimal(num1 * num2);
  }

  static divide(num1, num2) {
    return new GxBigDecimal(num1 / num2);
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
