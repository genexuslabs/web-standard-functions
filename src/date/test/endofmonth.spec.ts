import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { endOfMonth } from "../endOfMonth";

export const testCases: Array<[GxDate | GxDatetime, GxDate | GxDatetime]> = [
  [new GxDate(1891, 8, 28), new GxDate(1891, 8, 30)],
  [new GxDate(2018, 0, 1), new GxDate(2018, 0, 31)],
  [new GxDate(2018, 0, 30), new GxDate(2018, 0, 31)],
  [new GxDate(2018, 0, 31), new GxDate(2018, 0, 31)],
  [new GxDate(2018, 0, 30, 14, 35), new GxDate(2018, 0, 31, 14, 35)],
  [new GxDate(2018, 0, 31, 18, 23, 45), new GxDate(2018, 0, 31, 18, 23, 45)]
];

describe("endOfMonth operation", () => {
  for (const t of testCases) {
    it(`endOfMonth of ${t[1]} should be equal to "${t[1]}"`, () => {
      expect(JSON.stringify(endOfMonth(t[0]))).toEqual(JSON.stringify(t[1]));
    });
  }
});
