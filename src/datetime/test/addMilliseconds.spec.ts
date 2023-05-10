import { GxDatetime } from "../../types/gxdatetime";
import { addMilliseconds } from "../addMilliseconds";

export const testCases: Array<[GxDatetime, number, GxDatetime]> = [
  [
    new GxDatetime(2019, 8, 28, 2, 1, 1, 0),
    1000,
    new GxDatetime(2019, 8, 28, 2, 1, 2, 0)
  ],
  [
    new GxDatetime(2019, 8, 28, 2, 1, 1, 0),
    1010,
    new GxDatetime(2019, 8, 28, 2, 1, 2, 10)
  ],
  [
    new GxDatetime(2019, 8, 28, 2, 1, 1, 0),
    6000,
    new GxDatetime(2019, 8, 28, 2, 1, 7, 0)
  ],
  [
    new GxDatetime(2019, 8, 28, 2, 1, 1, 0),
    14400000,
    new GxDatetime(2019, 8, 28, 6, 1, 1, 0)
  ]
];

describe("addMilliseconds operation", () => {
  for (const t of testCases) {
    it(`addMilliseconds for ${t[0]} add ${t[1]} should be equal to ${t[2]}`, () => {
      expect(JSON.stringify(addMilliseconds(t[0], t[1]))).toEqual(
        JSON.stringify(t[2])
      );
    });
  }
});
