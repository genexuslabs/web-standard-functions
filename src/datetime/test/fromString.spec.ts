import { fromString } from "../fromString";
import { EMPTY_DATE_VALUE } from "../../date/core";

export const testCases: Array<[string, Date]> = [
  ["17122019 11:15", new Date(2019, 11, 17, 11, 15)],
  ["1722019 11:15", new Date(2019, 1, 17, 11, 15)],
  ["17122019 11:15:37", new Date(2019, 11, 17, 11, 15, 37)],
  ["17/12/2019 11:15", new Date(2019, 11, 17, 11, 15)],
  ["17/2/2019 11:15", new Date(2019, 1, 17, 11, 15)],
  ["17/12/2019 11:15:37", new Date(2019, 11, 17, 11, 15, 37)],
  ["17122019", EMPTY_DATE_VALUE],
  ["17-12-2019 11:15", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

describe("fromString operation", () => {
  for (const t of testCases) {
    it(`fromString of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0])).toEqual(t[1]);
    });
  }
});
