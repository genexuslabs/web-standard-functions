import { year } from "../year";

export const testCases: Array<[Date, number]> = [
  [new Date(1891, 8, 28), 1891],
  [new Date(1968, 7, 9), 1968],
  [new Date(2019, 4, 5), 2019]
];

describe("year operation", () => {
  for (const t of testCases) {
    it(`year for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(year(t[0])).toEqual(t[1]);
    });
  }
});
