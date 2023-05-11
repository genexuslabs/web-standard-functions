import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { monthName } from "../monthName";

export const testCases: Array<[GxDate | GxDatetime, string, string]> = [
  [new GxDate(1891, 8, 28), "eng", "September"],
  [new GxDate(1968, 7, 9), "eng", "August"],
  [new GxDate(2019, 3, 3), "eng", "April"],
  [new GxDate(1891, 8, 28), "spa", "Septiembre"],
  [new GxDate(1968, 7, 9), "spa", "Agosto"],
  [new GxDate(2019, 3, 3), "spa", "Abril"],
  [new GxDate(1891, 8, 28), "por", "Setembro"],
  [new GxDate(1968, 7, 9), "por", "Agosto"],
  [new GxDate(2019, 3, 3), "por", "Abril"],
  [new GxDate(1891, 8, 28), "ita", "Settembre"],
  [new GxDate(1968, 7, 9), "ita", "Agosto"],
  [new GxDate(2019, 3, 3), "ita", "Aprile"],
  [new GxDate(1891, 8, 28), "chs", "九月"],
  [new GxDate(1968, 7, 9), "chs", "八月"],
  [new GxDate(2019, 3, 3), "chs", "四月"],
  [new GxDate(1891, 8, 28), "cht", "9月"],
  [new GxDate(1968, 7, 9), "cht", "8月"],
  [new GxDate(2019, 3, 3), "cht", "4月"],
  [new GxDate(1891, 8, 28), "jap", "9"],
  [new GxDate(1968, 7, 9), "jap", "8"],
  [new GxDate(2019, 3, 3), "jap", "4"],
  [new GxDatetime(1891, 8, 28), "eng", "September"],
  [new GxDatetime(1968, 7, 9), "eng", "August"],
  [new GxDatetime(2019, 3, 3), "eng", "April"]
];

describe("monthName operation", () => {
  for (const t of testCases) {
    it(`monthName for "${t[0]}" with lang "${t[1]}" should be equal to "${t[2]}"`, () => {
      expect(monthName(t[0], t[1])).toEqual(t[2]);
    });
  }
});
