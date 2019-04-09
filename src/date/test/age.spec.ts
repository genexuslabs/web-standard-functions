import { age } from "../age";

export const testCases: Array<[Date, Date, number]> = [
  [ new Date(1891,8,28), new Date(2019,8,28), 127],
  [ new Date(1968,7,9), new Date(2019,4,5), 50],
  [ new Date(2019,4,5), new Date(1968,8,9), -50],
  [ new Date(2018,4,5), new Date(2019,4,5), 1],
  [ new Date(2018,3,5), new Date(2019,4,5), 1],
  [ new Date(2019,4,1), new Date(2019,4,5), 0]
];

describe("age operation", () => {
  for (const t of testCases) {
    it(`age at ${t[1]} from "${t[0]}" should be equal to "${t[2]}"`, () => {
      expect(age(t[0], t[1])).toEqual(t[2]);
    });
  }
});
