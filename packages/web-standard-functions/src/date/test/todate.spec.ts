import { toDate } from "../toDate";

export const testCases: Array<[Date, Date]> = [
  [new Date(1891, 8, 28), new Date(1891, 8, 28)],
  [new Date(2018, 0, 1), new Date(2018, 0, 1)],
  [new Date(2018, 0, 30), new Date(2018, 0, 30)],
  [new Date(2018, 0, 31), new Date(2018, 0, 31)]
];

describe("toDate operation", () => {
  for (const t of testCases) {
    it(`toDate of ${t[1]} should be equal to "${t[1]}"`, () => {
      expect(toDate(t[0])).toEqual(t[1]);
    });
  }
});
