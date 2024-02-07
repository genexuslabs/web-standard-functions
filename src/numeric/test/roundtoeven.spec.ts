import { GxBigDecimal } from "../../types/gxBigDecimal";
import { roundToEven } from "../roundToEven";

const testCases: Array<[number, number, number]> = [
  [1.5, 0, 2],
  [2.5, 0, 2],
  [2.51, 0, 3],
  [2.6, 0, 3],
  [1.25, 1, 1.2],
  [1.24, 1, 1.2],
  [125, -1, 120],
  [135, -1, 140],
  [125.11, -1, 130],
  [135.11, -1, 140],
  [0.123456789123, 8, 0.12345679]
];

describe("Numeric::roundToEven", () => {
  for (const t of testCases) {
    it(`roundToEven(${t[0]}, ${t[1]}) should be equal to ${t[2]}`, () => {
      expect(roundToEven(t[0], t[1])).toBe(t[2]);
    });
  }
});

describe("Numeric::roundToEven", () => {
  for (const t of testCases) {
    it(`roundToEven(${t[0]}, ${t[1]}) should be equal to ${t[2]}`, () => {
      expect(
        GxBigDecimal.roundToEven(new GxBigDecimal(t[0]), t[1]).toString()
      ).toBe(t[2].toString());
    });
  }
});
