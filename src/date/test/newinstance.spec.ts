import { newInstance } from "../newInstance";
import { EMPTY_DATE_VALUE } from "../core";

export const testCases: Array<[number, number, number, Date]> = [
  [1891, 9, 28, new Date(1891, 8, 28, 0, 0, 0, 0)],
  [1891, 13, 1, EMPTY_DATE_VALUE],
  [1891, 1891, 1891, EMPTY_DATE_VALUE],
  [0, 9, 28, new Date(2000, 8, 28, 0, 0, 0, 0)],
  [12, 9, 28, new Date(2012, 8, 28, 0, 0, 0, 0)],
  [1, 9, 28, new Date(2001, 8, 28, 0, 0, 0, 0)],
  [52, 9, 28, new Date(1952, 8, 28, 0, 0, 0, 0)]
];

describe("newInstance operation", () => {
  for (const t of testCases) {
    it(`newInstance of ${t[0]}, ${t[1]}, ${t[2]} should be equal to "${t[3]}"`, () => {
      expect(newInstance(t[0], t[1], t[2]).getTime()).toBe(t[3].getTime());
    });
  }
});
