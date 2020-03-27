import { fromString } from "../fromString";

const testCases: Array<[string, number]> = [
  ["0", 0],
  ["1", 1],
  ["127", 127],
  ["-3", -3],
  ["0.6", 0.6],
  ["1.3", 1.3],
  ["-2.4", -2.4]
];

describe("Numeric::fromString", () => {
  for (const t of testCases) {
    it(`fromString(${t[0]}) should be equal to ${t[1]}`, () => {
      expect(fromString(0, t[0])).toBe(t[1]);
    });
  }
});
