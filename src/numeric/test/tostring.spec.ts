import { GxBigNumber } from "../../types/gxbignumber";
import { toString } from "../toString";
import { toStringBigNumber } from "../../bigNumber/toString";

const testCases: Array<[number, number, number, string]> = [
  [0, 10, 2, "      0.00"],
  [1, 10, 2, "      1.00"],
  [127, 10, 2, "    127.00"],
  [-3, 10, 2, "     -3.00"],
  [0.6, 10, 2, "      0.60"],
  [1.3, 10, 2, "      1.30"],
  [-2.4, 10, 2, "     -2.40"],
  [4, 10, 0, "         4"],
  [4, 10, 6, "  4.000000"],
  [4.2, 10, 6, "  4.200000"],
  [4.234, 10, 6, "  4.234000"],
  [1, 1, 0, "1"],
  [1.23456789, 12, 5, "     1.23457"],
  [-1.23456789, 12, 5, "    -1.23457"],
  [111111, 6, 2, "111111.00"],
  [1.23456, 12, 6, "    1.234560"]
];

describe("Numeric::toString", () => {
  for (const t of testCases) {
    it(`toString(${t[0]}) should be equal to ${t[3]}`, () => {
      expect(toString(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
});

describe("Numeric::toString", () => {
  for (const t of testCases) {
    it(`toString(${t[0]}) should be equal to ${t[3]}`, () => {
      expect(
        toStringBigNumber(
          new GxBigNumber(t[0]),
          new GxBigNumber(t[1]),
          new GxBigNumber(t[2])
        )
      ).toBe(t[3]);
    });
  }
});
