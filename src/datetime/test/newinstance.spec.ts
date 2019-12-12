import { newInstance } from "../newInstance";
import { EMPTY_DATE_VALUE } from "../../date/core";

export const testCases: Array<
  [number, number, number, number, number, number, Date]
> = [
  [2019, 12, 25, 0, 0, 0, new Date(2019, 11, 25, 0, 0, 0, 0)],
  [2019, 12, 25, 11, 26, 47, new Date(2019, 11, 25, 11, 26, 47, 0)],
  [2019, 13, 25, 0, 0, 0, EMPTY_DATE_VALUE],
  [2019, 2019, 2019, 0, 0, 0, EMPTY_DATE_VALUE]
];

describe("newInstance operation", () => {
  for (const t of testCases) {
    it(`newInstance of ${t[0]}, ${t[1]}, ${t[2]}, ${t[3]}, ${t[4]}, ${
      t[5]
    } should be equal to "${t[6]}"`, () => {
      expect(newInstance(t[0], t[1], t[2], t[3], t[4], t[5]).getTime()).toBe(
        t[6].getTime()
      );
    });
  }
});
