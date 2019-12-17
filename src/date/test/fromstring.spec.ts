import { fromString } from "../fromString";
import { EMPTY_DATE_VALUE } from "../core";

export const testCases: Array<[string, Date]> = [
  ["28091891", new Date(1891, 8, 28)],
  ["2891891", new Date(1891, 8, 28)],
  ["28/09/1891", new Date(1891, 8, 28)],
  ["28/9/1891", new Date(1891, 8, 28)],
  ["28-9-1891", EMPTY_DATE_VALUE],
  ["TEXTO", EMPTY_DATE_VALUE]
];

describe("fromString operation", () => {
  for (const t of testCases) {
    it(`fromString of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(fromString(t[0])).toEqual(t[1]);
    });
  }
});
