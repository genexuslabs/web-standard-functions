import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { addMonths } from "../addMonths";

export const testCases: Array<[
  GxDate | GxDatetime,
  number,
  GxDate | GxDatetime
]> = [
  [new GxDate(1891, 8, 28), 1, new GxDate(1891, 9, 28)],
  [new GxDate(1891, 8, 28), -1, new GxDate(1891, 7, 28)],
  [new GxDate(2018, 0, 31), 1.9, new GxDate(2018, 1, 28)],
  [new GxDate(2018, 0, 31), -1, new GxDate(2017, 11, 31)],
  [new GxDate(2018, 0, 31), 100, new GxDate(2026, 4, 31)],
  [new GxDate(2018, 0, 31), 365, new GxDate(2048, 5, 30)],
  [new GxDate(2018, 0, 31), 1.9, new GxDate(2018, 1, 28)],
  [new GxDatetime(1891, 8, 28, 15, 24), 1, new GxDatetime(1891, 9, 28, 15, 24)],
  [
    new GxDatetime(1891, 8, 28, 15, 24, 30),
    -1,
    new GxDatetime(1891, 7, 28, 15, 24, 30)
  ]
];

describe("addMonth operation", () => {
  for (const t of testCases) {
    it(`addMonth add ${t[1]} months to "${t[0]}" should be equal to "${t[2]}"`, () => {
      expect(JSON.stringify(addMonths(t[0], t[1]))).toEqual(
        JSON.stringify(t[2])
      );
    });
  }
});
