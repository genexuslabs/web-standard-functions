import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { isEmpty } from "../isEmpty";

export const testCases: Array<[GxDate | GxDatetime, boolean]> = [
  [new GxDate(1891, 8, 28), false],
  [new GxDate(0, 0, 0), true],
  [new GxDatetime(1891, 8, 28, 4, 2, 1, 3), false],
  [new GxDatetime(0, 0, 0), true]
];

describe("isEmpty operation", () => {
  for (const t of testCases) {
    it(`isempty for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(isEmpty(t[0])).toBe(t[1]);
    });
  }
});
