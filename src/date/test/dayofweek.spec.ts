import { dayOfWeek } from "../dayOfWeek";

export const testCases: Array<[Date, number]> = [
  [ new Date(1891,8,28), 2],
  [ new Date(1968,7,9), 6],
  [ new Date(2019,3,5), 6]
];

describe("dayOfWeek operation", () => {
  for (const t of testCases) {
    it(`dayOfWeek for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(dayOfWeek(t[0])).toEqual(t[1]);
    });
  }
});
