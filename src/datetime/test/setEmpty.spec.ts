import { setEmpty } from "../setEmpty";
import { EMPTY_DATE_VALUE } from "../../date/core";

export const testCases: Array<[Date, Date]> = [
  [new Date(2019, 8, 28, 2, 1, 1, 0), EMPTY_DATE_VALUE],
  [new Date(2019, 8, 28, 9, 9, 9, 9), EMPTY_DATE_VALUE]
];

describe("setEmpty operation", () => {
  for (const t of testCases) {
    it(`setEmpty to ${t[0]} should be equal to ${t[1]}`, () => {
      expect(setEmpty(t[0])).toEqual(t[0]);
    });
  }
});
