import { GxBigNumber } from "../../types/gxbignumber";
import { isEmpty } from "../isEmpty";

const testCases: Array<[number, boolean]> = [
  [0, true],
  [1, false],
  [0.6, false],
  [-2.4, false]
];

describe("Numeric::isEmtpy", () => {
  for (const t of testCases) {
    it(`isEmpty(${t[0]}) should be equal to ${t[1]}`, () => {
      expect(isEmpty(t[0])).toBe(t[1]);
    });
  }
});

describe("Numeric::isEmtpy", () => {
  for (const t of testCases) {
    it(`isEmpty(${t[0]}) should be equal to ${t[1]}`, () => {
      expect(GxBigNumber.isEmpty(new GxBigNumber(t[0]))).toBe(t[1]);
    });
  }
});
