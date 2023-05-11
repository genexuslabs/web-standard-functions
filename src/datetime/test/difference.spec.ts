import { GxDatetime } from "../../types/gxdatetime";
import { difference } from "../difference";

export const testCases: Array<[GxDatetime, GxDatetime, number]> = [
  [new GxDatetime(1891, 8, 28, 1), new GxDatetime(1891, 8, 28, 1, 0), 0],
  [new GxDatetime(1891, 8, 28, 1), new GxDatetime(1891, 8, 28, 1, 10), -600],
  [new GxDatetime(1891, 8, 28, 1), new GxDatetime(1891, 8, 28, 2, 10), -4200],
  [new GxDatetime(1891, 8, 28, 1), new GxDatetime(1891, 8, 28, 2, 0), -3600],
  [new GxDatetime(1891, 8, 28, 2, 0), new GxDatetime(1891, 8, 28, 1), 3600]
];

describe("difference operation", () => {
  for (const t of testCases) {
    it(`difference for "${t[0]}, ${t[1]}" should be equal to "${t[2]}"`, () => {
      expect(difference(t[0], t[1])).toEqual(t[2]);
    });
  }
});
