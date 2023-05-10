import { GxDate } from "../../types/gxdate";
import { GxDatetime } from "../../types/gxdatetime";
import { toDate } from "../toDate";

export const testCases: Array<[GxDatetime, GxDate]> = [
  [
    new GxDatetime(2019, 8, 28, 2, 1, 1, 0),
    new GxDate(2019, 8, 28, 0, 0, 0, 0)
  ],
  [new GxDatetime(2019, 8, 28, 9, 9, 9, 9), new GxDate(2019, 8, 28, 0, 0, 0, 0)]
];

describe("toDate operation", () => {
  for (const t of testCases) {
    it(`toDate for ${t[0]} should be equal to ${t[1]}`, () => {
      expect(JSON.stringify(toDate(t[0]))).toEqual(JSON.stringify(t[1]));
    });
  }
});
