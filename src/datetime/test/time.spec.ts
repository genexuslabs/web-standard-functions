import { GxDatetime } from "../../types/gxdatetime";
import { timeImpl, time_format } from "../time";

export const testCases: Array<[time_format, GxDatetime, String]> = [
  [
    time_format.format_12,
    new GxDatetime(1891, 8, 28, 13, 10, 10, 10),
    "1:10:10 PM"
  ],
  [
    time_format.format_24,
    new GxDatetime(2019, 8, 28, 13, 10, 10, 10),
    "13:10:10"
  ],
  [
    time_format.format_12,
    new GxDatetime(1891, 8, 28, 10, 10, 10, 10),
    "10:10:10 AM"
  ],
  [
    time_format.format_24,
    new GxDatetime(2019, 8, 28, 10, 10, 10, 10),
    "10:10:10"
  ]
];

describe("time operation", () => {
  for (const t of testCases) {
    it(`time for ${t[1]} with format ${t[0]} should be equal to "${t[2]}"`, () => {
      expect(timeImpl(t[0], t[1])).toEqual(t[2]);
    });
  }
});
