import { toString } from "../toString";
import { EMPTY_DATE_VALUE } from "../core";
export const testCases: Array<[Date, string]> = [
  [new Date(1891, 8, 28), "28/9/1891"],
  [new Date(2018, 0, 1), "1/1/2018"],
  [new Date(2018, 0, 30), "30/1/2018"],
  [EMPTY_DATE_VALUE, ""],
  [new Date(2018, 0, 31), "31/1/2018"]
];

describe("toString operation", () => {
  for (const t of testCases) {
    it(`toString of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0])).toEqual(t[1]);
    });
  }
});
