import { minute } from "../minute";

export const testCases: Array<[Date, number]> = [
  [new Date(1891, 8, 28, 1, 0), 0],
  [new Date(1891, 8, 28, 1, 1), 1],
  [new Date(1891, 8, 28, 1, 15), 15],
  [new Date(1891, 8, 28, 1, 60), 0],
  [new Date(1891, 8, 28, 1, 61), 1]
];

describe("minute operation", () => {
  for (const t of testCases) {
    it(`minute for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(minute(t[0])).toEqual(t[1]);
    });
  }
});
