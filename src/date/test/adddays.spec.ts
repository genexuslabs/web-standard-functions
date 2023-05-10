import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { addDays } from "../addDays";

export const testCases: Array<[
  GxDate | GxDatetime,
  number,
  GxDate | GxDatetime
]> = [
  [new GxDate(1891, 8, 28), 1, new GxDate(1891, 8, 29)],
  [new GxDate(1891, 8, 28), -1, new GxDate(1891, 8, 27)],
  [new GxDate(2018, 0, 31), 1.9, new GxDate(2018, 1, 1)],
  [new GxDate(2018, 0, 31), -1, new GxDate(2018, 0, 30)],
  [new GxDate(2018, 0, 31), 100, new GxDate(2018, 4, 11)],
  [new GxDate(2018, 0, 31), 365, new GxDate(2019, 0, 31)],
  [new GxDate(2018, 0, 31), 1.1, new GxDate(2018, 1, 1)],
  [new GxDatetime(1891, 8, 28), 1, new GxDatetime(1891, 8, 29)],
  [new GxDatetime(1891, 8, 28), -1, new GxDatetime(1891, 8, 27)]
];

describe("addDays operation", () => {
  for (const t of testCases) {
    it(`addDays add ${t[1]} days to "${t[0]}" should be equal to "${addDays(
      t[0],
      t[1]
    )}""${t[2]}"`, () => {
      expect(JSON.stringify(addDays(t[0], t[1]))).toBe(JSON.stringify(t[2]));
    });
  }
});
