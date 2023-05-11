import { set } from "../set";
import { EMPTY_DATE_VALUE } from "../core";
import { GxDate } from "../../types/gxdate";

export const testCases: Array<[GxDate, number, number, number, GxDate]> = [
  [
    new GxDate(2015, 3, 2, 0, 0, 0, 0),
    1891,
    9,
    28,
    new GxDate(1891, 8, 28, 0, 0, 0, 0)
  ],
  [
    new GxDate(2015, 3, 2, 0, 0, 0, 0),
    1891,
    13,
    1,
    new GxDate(EMPTY_DATE_VALUE)
  ],
  [
    new GxDate(2015, 3, 2, 0, 0, 0, 0),
    1891,
    1891,
    1891,
    new GxDate(EMPTY_DATE_VALUE)
  ]
];

describe("set operation", () => {
  for (const t of testCases) {
    it(`set ${t[0]} year ${t[1]} month ${t[2]} day ${t[3]} should be equal to "${t[4]}"`, () => {
      expect(set(t[0], t[1], t[2], t[3]).getTime()).toBe(t[4].getTime());
    });
  }
});
