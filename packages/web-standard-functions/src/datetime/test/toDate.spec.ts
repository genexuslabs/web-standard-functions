import { toDate } from "../toDate";

export const testCases: Array<[Date, Date]> = [
  [new Date(2019, 8, 28, 2, 1, 1, 0), new Date(2019, 8, 28, 0, 0, 0, 0)],
  [new Date(2019, 8, 28, 9, 9, 9, 9), new Date(2019, 8, 28, 0, 0, 0, 0)]
];

describe("toDate operation", () => {
  for (const t of testCases) {
    it(`toDate for ${t[0]} should be equal to ${t[1]}`, () => {
      expect(toDate(t[0])).toEqual(t[1]);
    });
  }
});
