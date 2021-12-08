import { toString } from "../toString";

const testCases: Array<[number, string]> = [
  [0, "0"],
  [1, "1"],
  [127, "127"],
  [-3, "-3"],
  [0.6, "0.6"],
  [1.3, "1.3"],
  [-2.4, "-2.4"]
];

describe("Numeric::toString", () => {
  for (const t of testCases) {
    it(`toString(${t[0]}) should be equal to ${t[1]}`, () => {
      expect(toString(t[0])).toBe(t[1]);
    });
  }
});
