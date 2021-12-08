import { addYears } from "../addYears";

export const testCases: Array<[Date, number, Date]> = [
  [new Date(1891, 8, 28), 1, new Date(1892, 8, 28)],
  [new Date(1890, 8, 28), -1, new Date(1889, 8, 28)],
  [new Date(2018, 0, 31), 1.9, new Date(2019, 0, 31)],
  [new Date(2018, 0, 31), -1, new Date(2017, 0, 31)],
  [new Date(2018, 0, 31), 100, new Date(2118, 0, 31)],
  [new Date(2018, 0, 31), 365, new Date(2383, 0, 31)],
  [new Date(2018, 0, 31), 1.9, new Date(2019, 0, 31)]
];

describe("addYears operation", () => {
  for (const t of testCases) {
    it(`addYears add ${t[1]} years to "${t[0]}" should be equal to "${t[2]}"`, () => {
      expect(addYears(t[0], t[1])).toEqual(t[2]);
    });
  }
});
