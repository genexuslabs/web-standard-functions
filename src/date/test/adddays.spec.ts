import { addDays } from "../addDays";

export const testCases: Array<[Date, number, Date]> = [
  [ new Date(1891,8,28), 1, new Date(1891,8,29)],
  [ new Date(1891,8,28), -1, new Date(1891,8,27)],
  [ new Date(2018,0,31), 1.9, new Date(2018,1,1)],
  [ new Date(2018,0,31), -1, new Date(2018,0,30)],
  [ new Date(2018,0,31), 100, new Date(2018,4,11)],
  [ new Date(2018,0,31), 365, new Date(2019,0,31)],
  [ new Date(2018,0,31), 1.1, new Date(2018,1,1)]
];

describe("addDays operation", () => {
  for (const t of testCases) {
    it(`addDays add ${t[1]} days to "${t[0]}" should be equal to "${t[2]}"`, () => {
      expect(addDays(t[0], t[1])).toEqual(t[2]);
    });
  }
});
