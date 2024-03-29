import { GxDatetime } from "../../types/gxdatetime";
import { addSeconds } from "../addSeconds";

export const testCases: Array<[GxDatetime, number, GxDatetime]> = [
  [
    new GxDatetime(2019, 8, 28, 2, 1, 1, 0),
    1,
    new GxDatetime(2019, 8, 28, 2, 1, 2, 0)
  ],
  [
    new GxDatetime(2019, 8, 28, 2, 1, 1, 0),
    10,
    new GxDatetime(2019, 8, 28, 2, 1, 11, 0)
  ],
  [
    new GxDatetime(2019, 8, 28, 2, 1, 1, 0),
    6,
    new GxDatetime(2019, 8, 28, 2, 1, 7, 0)
  ],
  [
    new GxDatetime(2019, 8, 28, 2, 1, 1, 0),
    14400,
    new GxDatetime(2019, 8, 28, 6, 1, 1, 0)
  ]
];

describe("addSeconds operation", () => {
  for (const t of testCases) {
    it(`addSeconds for ${t[0]} add ${t[1]} should be equal to ${t[2]}`, () => {
      expect(addSeconds(t[0], t[1])).toEqual(t[2]);
    });
  }
});
