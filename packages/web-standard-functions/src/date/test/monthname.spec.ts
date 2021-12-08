import { monthName } from "../monthName";

export const testCases: Array<[Date, string, string]> = [
  [new Date(1891, 8, 28), "eng", "September"],
  [new Date(1968, 7, 9), "eng", "August"],
  [new Date(2019, 3, 3), "eng", "April"],
  [new Date(1891, 8, 28), "spa", "septiembre"],
  [new Date(1968, 7, 9), "spa", "agosto"],
  [new Date(2019, 3, 3), "spa", "abril"],
  [new Date(1891, 8, 28), "por", "setembro"],
  [new Date(1968, 7, 9), "por", "agosto"],
  [new Date(2019, 3, 3), "por", "abril"],
  [new Date(1891, 8, 28), "ita", "settembre"],
  [new Date(1968, 7, 9), "ita", "agosto"],
  [new Date(2019, 3, 3), "ita", "aprile"],
  [new Date(1891, 8, 28), "chs", "九月"],
  [new Date(1968, 7, 9), "chs", "八月"],
  [new Date(2019, 3, 3), "chs", "四月"],
  [new Date(1891, 8, 28), "cht", "9月"],
  [new Date(1968, 7, 9), "cht", "8月"],
  [new Date(2019, 3, 3), "cht", "4月"],
  [new Date(1891, 8, 28), "jap", "9"],
  [new Date(1968, 7, 9), "jap", "8"],
  [new Date(2019, 3, 3), "jap", "4"]
];

describe("monthName operation", () => {
  for (const t of testCases) {
    it(`monthName for "${t[0]}" with lang "${t[1]}" should be equal to "${t[2]}"`, () => {
      expect(monthName(t[0], t[1])).toEqual(t[2]);
    });
  }
});
