import { integer } from "../integer";

const testCases: Array<[number, number]> = [
  [0, 0],
  [1, 1],
  [127, 127],
  [-3, -3],
  [0.6, 0],
  [1.3, 1],
  [-2.4, -2],
  [5 / 3, 1]
];

describe("Numeric::integer", () => {
  for (const t of testCases) {
    it(`integer(${t[0]}) should be equal to ${t[1]}`, () => {
      expect(integer(t[0])).toBe(t[1]);
    });
  }
});
