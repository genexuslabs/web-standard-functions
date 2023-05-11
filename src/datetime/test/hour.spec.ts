import { GxDatetime } from "../../types/gxdatetime";
import { hour } from "../hour";

export const testCases: Array<[GxDatetime, number]> = [
  [new GxDatetime(1891, 8, 28, 1), 1],
  [new GxDatetime(1891, 8, 28, 12), 12],
  [new GxDatetime(1891, 8, 28, 15), 15],
  [new GxDatetime(1891, 8, 28, 20), 20],
  [new GxDatetime(1891, 8, 28, 24), 0],
  [new GxDatetime(1891, 8, 28, 25), 1]
];

describe("hour operation", () => {
  for (const t of testCases) {
    it(`hour for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(hour(t[0])).toEqual(t[1]);
    });
  }
});
