import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { toDate } from "../toDate";

export const testCases: Array<[GxDate, GxDate]> = [
  [new GxDate(1891, 8, 28), new GxDate(1891, 8, 28)],
  [new GxDate(2018, 0, 1), new GxDate(2018, 0, 1)],
  [new GxDate(2018, 0, 30), new GxDate(2018, 0, 30)],
  [new GxDate(2018, 0, 31), new GxDate(2018, 0, 31)]
];

describe("toDate operation", () => {
  for (const t of testCases) {
    it(`toDate of ${t[1]} should be equal to "${t[1]}"`, () => {
      expect(toDate(t[0])).toEqual(t[1]);
    });
  }
});
