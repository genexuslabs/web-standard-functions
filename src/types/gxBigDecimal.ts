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
    if (decimals === "") {
      this.decimals = 0;
    } else {
      this.decimals = decimals.length;
    }
    this.intNumberAll =
      BigInt(
        ints + decimals.padEnd(this.decimals, "0").slice(0, this.decimals)
      ) + BigInt(GxBigDecimal.round && decimals[this.decimals] >= "5");
    GxBigDecimal.d = BigInt("1" + "0".repeat(this.decimals));
  }

  toString() {
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
      let result = this.intNumberAll
        .toString()
        .padStart(this.decimals + 1, "0");

      if (result.toString().includes("-")) {
        result = "-" + result.toString().replace("-", "");
      }

      return (
        result.slice(0, -this.decimals) +
        "." +
        result.slice(-this.decimals).replace(/\.?0+$/, "")
      );
    }
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

  static divide(num1, num2, decimal?) {
    let a;
    let b;
    let d = 0;

    if (!decimal) {
      decimal = 18;
    }

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
    if (a.decimals === 0 && b.decimals === 0) {
      decimal = 0;
    }

    let rep;
    if (a.decimals === 0) {
      if (b.intNumberAll.toString().length > 18) {
        rep = b.intNumberAll.toString().length * 2 + 1;
        d = rep - b.decimals;
      } else {
        rep = 18;
        d = rep - b.decimals;
      }
    } else {
      if (b.intNumberAll.toString().length > 18) {
        rep = b.intNumberAll.toString().length * 2 + 1;
        d = rep + a.decimals - b.decimals;
      } else {
        rep = 18 * 2 + 1;
        d = rep + a.decimals - b.decimals;
      }
    }

    let d1 = a.intNumberAll * BigInt("1" + "0".repeat(rep));
    let d2 = b.intNumberAll;

    let r = d1 / d2;
    if (decimal !== 0) {
      r = BigInt(r.toString().slice(0, -d + decimal));
    } else {
      decimal = d;
    }
    return GxBigDecimal.fromBigInt(r, decimal);
  }

  getintNumberAll(bigDecimal: GxBigDecimal) {
    return bigDecimal.intNumberAll;
  }

  normalizeDecimals(num) {
    if (num instanceof GxBigDecimal) {
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
    if (!(value instanceof GxBigDecimal)) {
      value = new GxBigDecimal(value);
    }
    let str = value.toString().substring(0, 15);
    return Number(str);
  }

  static convertToInt(value) {
    if (!(value instanceof GxBigDecimal)) {
      value = new GxBigDecimal(value);
    }
    let str = value.toString().split(".")[0];
    return Number(str);
  }

  static convertToBigDecimal(value) {
    return new GxBigDecimal(value);
  }

  static compare(num1, num2) {
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

    if (
      a.toString().replace(/\.(?=[^.0]*$)/, "") ===
      b.toString().replace(/\.(?=[^.0]*$)/, "")
    ) {
      return true;
    } else {
      return false;
    }
  }

  static negate(num) {
    return -num;
  }
}
