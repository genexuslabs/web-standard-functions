import { GxBigNumber } from "../../types/gxbignumber";
import { truncate } from "../truncate";
import { truncateBigNumber } from "../../bigNumber/truncate";

const testCases: Array<[number, number, number]> = [
  [1.5, 0, 1],
  [1.4, 0, 1],
  [1.25, 1, 1.2],
  [1.24, 1, 1.2],
  [125.11, -1, 120],
  [0, 0, 0],
  [123, 0, 123]
];

describe("Numeric::truncate", () => {
  for (const t of testCases) {
    it(`truncate(${t[0]}, ${t[1]}) should be equal to ${t[2]}`, () => {
      expect(truncate(t[0], t[1])).toBe(t[2]);
    });
  }
});

const testCases2: Array<[string, string, string]> = [
  ["1.5", "0", "1"],
  ["1.4", "0", "1"],
  ["1.25", "1", "1.2"],
  ["1.24", "1", "1.2"],
  ["125.11", "-1", "120"],
  ["0", "0", "0"],
  ["123", "0", "123"]
];
describe("Numeric::truncateBD", () => {
  for (const t of testCases2) {
    it(`truncate(${t[0]}, ${t[1]}) should be equal to ${t[2]}`, () => {
      expect(
        truncateBigNumber(
          new GxBigNumber(t[0]),
          new GxBigNumber(t[1])
        ).toString()
      ).toBe(t[2]);
    });
  }
});
