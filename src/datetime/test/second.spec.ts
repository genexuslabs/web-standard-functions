import { GxDatetime } from "../../types/gxdatetime";
import { second } from "../second";

export const testCases: Array<[GxDatetime, number]> = [
  [new GxDatetime(1891, 8, 28, 1, 0, 0), 0],
  [new GxDatetime(1891, 8, 28, 1, 0, 1), 1],
  [new GxDatetime(1891, 8, 28, 1, 0, 15), 15],
  [new GxDatetime(1891, 8, 28, 1, 0, 20), 20],
  [new GxDatetime(1891, 8, 28, 1, 0, 60), 0],
  [new GxDatetime(1891, 8, 28, 1, 0, 61), 1]
];

describe("second operation", () => {
  for (const t of testCases) {
    it(`second for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(second(t[0])).toEqual(t[1]);
    });
  }
});
