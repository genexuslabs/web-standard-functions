import { GxBigNumber } from "../../types/gxBigNumber";
import { round } from "../round";

const testCases: Array<[number, number, number]> = [
  [1.5, 0, 2],
  [1.4, 0, 1],
  [1.25, 1, 1.3],
  [1.24, 1, 1.2],
  [125.11, -1, 130],
  [125.11, -2, 100],
  [0.6, 0, 1]
];

describe("Numeric::round", () => {
  for (const t of testCases) {
    it(`round(${t[0]}, ${t[1]}) should be equal to ${t[2]}`, () => {
      expect(round(t[0], t[1])).toBe(t[2]);
    });
  }
});

describe("Numeric::round", () => {
  for (const t of testCases) {
    it(`round(${t[0]}, ${t[1]}) should be equal to ${t[2]}`, () => {
      expect(GxBigNumber.round(new GxBigNumber(t[0]), t[1]).toString()).toBe(
        t[2].toString()
      );
    });
  }
});
