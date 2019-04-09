import { day } from "../day";

export const testCases: Array<[Date, number]> = [
  [ new Date(1891,8,28), 28],
  [ new Date(1968,7,9), 9],
  [ new Date(2019,4,5), 5]
];

describe("day operation", () => {
  for (const t of testCases) {
    it(`day for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(day(t[0])).toEqual(t[1]);
    });
  }
});
