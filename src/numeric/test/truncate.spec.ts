import { truncate } from "../truncate";

const testCases: Array<[number, number, number]> = [
  [1.5, 0, 1],
  [1.4, 0, 1],
  [1.25, 1, 1.2],
  [1.24, 1, 1.2],
  [125.11, -1, 120]
];

describe("Numeric::truncate", () => {
  for (const t of testCases) {
    it(`truncate(${t[0]}, ${t[1]}) should be equal to ${t[2]}`, () => {
      expect(truncate(t[0], t[1])).toBe(t[2]);
    });
  }
});
