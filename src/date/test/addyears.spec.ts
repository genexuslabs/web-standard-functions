import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { addYears } from "../addYears";

export const testCases: Array<[
  GxDate | GxDatetime,
  number,
  GxDate | GxDatetime
]> = [
  [new GxDate(1891, 8, 28), 1, new GxDate(1892, 8, 28)],
  [new GxDate(1890, 8, 28), -1, new GxDate(1889, 8, 28)],
  [new GxDate(2018, 0, 31), 1.9, new GxDate(2019, 0, 31)],
  [new GxDate(2018, 0, 31), -1, new GxDate(2017, 0, 31)],
  [new GxDate(2018, 0, 31), 100, new GxDate(2118, 0, 31)],
  [new GxDate(2018, 0, 31), 365, new GxDate(2383, 0, 31)],
  [new GxDate(2018, 0, 31), 1.9, new GxDate(2019, 0, 31)],
  [new GxDatetime(1891, 8, 28, 14, 45), 1, new GxDatetime(1892, 8, 28, 14, 45)],
  [
    new GxDatetime(1890, 8, 28, 14, 45, 22),
    -1,
    new GxDatetime(1889, 8, 28, 14, 45, 22)
  ]
];

describe("addYears operation", () => {
  for (const t of testCases) {
    it(`addYears add ${t[1]} years to "${t[0]}" should be equal to "${t[2]}"`, () => {
      expect(JSON.stringify(addYears(t[0], t[1]))).toEqual(
        JSON.stringify(t[2])
      );
    });
  }
});
