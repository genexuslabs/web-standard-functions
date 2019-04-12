import { month } from "../month";

export const testCases: Array<[Date, number]> = [
  [new Date(1891, 8, 28), 9],
  [new Date(1968, 7, 9), 8],
  [new Date(2019, 4, 5), 5]
];

describe("month operation", () => {
  for (const t of testCases) {
    it(`month for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(month(t[0])).toEqual(t[1]);
    });
  }
});
