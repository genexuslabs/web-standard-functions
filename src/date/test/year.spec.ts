import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { year } from "../year";

export const testCases: Array<[GxDate | GxDatetime, number]> = [
  [new GxDate(1891, 8, 28), 1891],
  [new GxDate(1968, 7, 9), 1968],
  [new GxDate(2019, 4, 5), 2019],
  [new GxDatetime(1891, 8, 28, 14, 24, 5), 1891]
];

describe("year operation", () => {
  for (const t of testCases) {
    it(`year for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(year(t[0])).toEqual(t[1]);
    });
  }
});
