import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { dayOfWeek } from "../dayOfWeek";

export const testCases: Array<[GxDate | GxDatetime, number]> = [
  [new GxDate(1891, 8, 28), 2],
  [new GxDate(1968, 7, 9), 6],
  [new GxDate(2019, 3, 5), 6],
  [new GxDate(2019, 3, 6), 7],
  [new GxDate(2019, 3, 7), 1],
  [new GxDatetime(1891, 8, 28, 14, 34, 23, 5), 2],
  [new GxDatetime(1968, 7, 9, 14, 34), 6]
];

describe("dayOfWeek operation", () => {
  for (const t of testCases) {
    it(`dayOfWeek for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(dayOfWeek(t[0])).toEqual(t[1]);
    });
  }
});
