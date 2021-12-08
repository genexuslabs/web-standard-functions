import { second } from "../second";

export const testCases: Array<[Date, number]> = [
  [new Date(1891, 8, 28, 1, 0, 0), 0],
  [new Date(1891, 8, 28, 1, 0, 1), 1],
  [new Date(1891, 8, 28, 1, 0, 15), 15],
  [new Date(1891, 8, 28, 1, 0, 20), 20],
  [new Date(1891, 8, 28, 1, 0, 60), 0],
  [new Date(1891, 8, 28, 1, 0, 61), 1]
];

describe("second operation", () => {
  for (const t of testCases) {
    it(`second for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(second(t[0])).toEqual(t[1]);
    });
  }
});
