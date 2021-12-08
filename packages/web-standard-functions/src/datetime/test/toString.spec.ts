import { toString } from "../toString";
import { EMPTY_DATE_VALUE } from "../../date/core";

export const testCases: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "1/1/2018 13:05:27"],
  [new Date(2018, 0, 30, 9, 9, 9), "30/1/2018 09:09:09"],
  [EMPTY_DATE_VALUE, ""]
];

describe("toString operation", () => {
  for (const t of testCases) {
    it(`toString of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0])).toEqual(t[1]);
    });
  }
});
