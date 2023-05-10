import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { month } from "../month";

export const testCases: Array<[GxDate | GxDatetime, number]> = [
  [new GxDate(1891, 8, 28), 9],
  [new GxDate(1968, 7, 9), 8],
  [new GxDate(2019, 4, 5), 5],
  [new GxDatetime(1891, 8, 28, 10, 15, 25), 9],
  [new GxDatetime(1968, 7, 9, 10, 15, 25, 30), 8],
  [new GxDatetime(2019, 4, 5), 5]
];

describe("month operation", () => {
  for (const t of testCases) {
    it(`month for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(month(t[0])).toEqual(t[1]);
    });
  }
});
