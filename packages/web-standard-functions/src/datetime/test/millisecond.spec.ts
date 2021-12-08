import { millisecond } from "../millisecond";

export const testCases: Array<[Date, number]> = [
  [new Date(1891, 8, 28, 1, 0, 0, 0), 0],
  [new Date(1891, 8, 28, 1, 0, 0, 1), 1],
  [new Date(1891, 8, 28, 1, 0, 0, 15), 15],
  [new Date(1891, 8, 28, 1, 0, 0, 20), 20],
  [new Date(1891, 8, 28, 1, 0, 0, 1000), 0],
  [new Date(1891, 8, 28, 1, 0, 0, 1001), 1]
];

describe("millisecond operation", () => {
  for (const t of testCases) {
    it(`millisecond for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(millisecond(t[0])).toEqual(t[1]);
    });
  }
});
