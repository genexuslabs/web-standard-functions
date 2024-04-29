import { abs } from "../abs";

const testCases: Array<[number, number]> = [
  [0, 0],
  [1, 1],
  [-1, 1],
  [127, 127],
  [-127, 127],
  [0.6, 0.6],
  [-0.6, 0.6],
  [-2.4, 2.4],
  [-5 / 3, 5 / 3]
];

describe("Numeric::abs", () => {
  for (const t of testCases) {
    it(`abs(${t[0]}) should be equal to ${t[1]}`, () => {
      expect(abs(t[0])).toBe(t[1]);
    });
  }
});
