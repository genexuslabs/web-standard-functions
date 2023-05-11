import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { day } from "../day";

export const testCases: Array<[GxDate | GxDatetime, number]> = [
  [new GxDate(1891, 8, 28), 28],
  [new GxDate(1968, 7, 9), 9],
  [new GxDate(2019, 4, 5), 5],
  [new GxDatetime(1891, 8, 28, 15, 34, 45), 28],
  [new GxDatetime(1968, 7, 9, 15, 34, 45, 30), 9],
  [new GxDatetime(2019, 4, 5), 5]
];

describe("day operation", () => {
  for (const t of testCases) {
    it(`day for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(day(t[0])).toEqual(t[1]);
    });
  }
});
