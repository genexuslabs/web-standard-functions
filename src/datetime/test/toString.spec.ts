import { toString } from "../toString";
import { EMPTY_DATE_VALUE } from "../../date/core";

export const testCases: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "01/01/2018 13:05:27"],
  [new Date(2018, 0, 30, 9, 9, 9), "30/01/2018 09:09:09"],
  [new Date(2018, 0, 30, 9, 9), "30/01/2018 09:09:00"],
  [EMPTY_DATE_VALUE, ""]
];

export const testCases2: Array<[Date, string, number, number]> = [
  [new Date(2018, 0, 1, 13, 5, 27, 450), "13:05:27.450", 0, 12],
  [EMPTY_DATE_VALUE, "", 0, 12],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/18 13:05:27.450", 8, 12],
  [EMPTY_DATE_VALUE, "", 8, 12],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018 13:05:27.450", 10, 12],
  [EMPTY_DATE_VALUE, "", 10, 12],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018", 10, 0],
  [EMPTY_DATE_VALUE, "", 10, 0],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "13:05", 10, 2],
  [EMPTY_DATE_VALUE, "", 10, 2],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018 13:05", 10, 5],
  [EMPTY_DATE_VALUE, "", 10, 5],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018 13:05:27", 10, 8],
  [EMPTY_DATE_VALUE, "", 10, 8],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018 13:05:27.450", 10, 12],
  [EMPTY_DATE_VALUE, "", 10, 12]
];

describe("toString operation", () => {
  for (const t of testCases) {
    it(`toString of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0])).toEqual(t[1]);
    });
  }

  for (const t of testCases2) {
    it(`toString of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], t[2], t[3])).toEqual(t[1]);
    });
  }
});
