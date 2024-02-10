import { GxBigNumber } from "../../types/gxBigNumber";
import { str } from "../str";

const testCases1: Array<[number, string]> = [
  [0, "         0"],
  [1, "         1"],
  [127, "       127"],
  [-3, "        -3"],
  [0.6, "         1"],
  [1.3, "         1"],
  [-2.4, "        -2"]
];

describe("Core::str without optional parameters", () => {
  for (const t of testCases1) {
    it(`str(${t[0]}) should be equal to ${t[1]}`, () => {
      expect(str(t[0])).toBe(t[1]);
    });
  }
});

describe("Core::str without optional parameters", () => {
  for (const t of testCases1) {
    it(`str(${t[0]}) should be equal to ${t[1]}`, () => {
      expect(GxBigNumber.str(new GxBigNumber(t[0]))).toBe(t[1]);
    });
  }
});

const testCases2: Array<[number, number, number, string]> = [
  [-1.25, 10, 2, "     -1.25"],
  [-1.25, 2, 1, "-1"],
  [-1.25, 5, 1, " -1.3"],
  [-1.25, 5, 2, "-1.25"],
  [123456.12, 5, 2, "*****"],
  [1234.4, 5, 1, " 1234"]
];

describe("Core::str with length and decimals", () => {
  for (const t of testCases2) {
    it(`str(${t[0]}, ${t[1]}, ${t[2]}) should be equal to ${t[3]}`, () => {
      expect(str(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
});

describe("Core::str with length and decimals", () => {
  for (const t of testCases2) {
    it(`str(${t[0]}, ${t[1]}, ${t[2]}) should be equal to ${t[3]}`, () => {
      expect(GxBigNumber.str(new GxBigNumber(t[0]), t[1], t[2])).toBe(t[3]);
    });
  }
});
