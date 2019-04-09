import { addMonths } from "../addMonths";

export const testCases: Array<[Date, number, Date]> = [
  [ new Date(1891,8,28), 1, new Date(1891,9,28)],
  [ new Date(1891,8,28), -1, new Date(1891,7,28)],
  [ new Date(2018,0,31), 1.9, new Date(2018,1,28)],
  [ new Date(2018,0,31), -1, new Date(2017,11,31)],
  [ new Date(2018,0,31), 100, new Date(2026,4,31)],
  [ new Date(2018,0,31), 365, new Date(2048,5,30)],
  [ new Date(2018,0,31), 1.9, new Date(2018,1,28)]
];

describe("addMonth operation", () => {
  for (const t of testCases) {
    it(`addMonth add ${t[1]} months to "${t[0]}" should be equal to "${t[2]}"`, () => {
      expect(addMonths(t[0], t[1])).toEqual(t[2]);
    });
  }
});
