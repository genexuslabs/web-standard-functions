import { toUniversalTime } from "../toUniversalTime";
import { timezones } from "../timezone";
import { setTimezone } from "../setTimezone";
import { GxDatetime } from "../../types/gxdatetime";

export const testCases: Array<[timezones, GxDatetime, GxDatetime]> = [
  [
    timezones.Buenos_Aires,
    new GxDatetime(2019, 8, 28, 2, 0, 0, 0),
    new GxDatetime(2019, 8, 28, 5, 0, 0, 0)
  ],
  [
    timezones.Darwin,
    new GxDatetime(2019, 8, 28, 2, 0, 0, 0),
    new GxDatetime(2019, 8, 27, 16, 30, 0, 0)
  ],
  [
    timezones.Cape_Verde,
    new GxDatetime(2019, 8, 28, 2, 0, 0, 0),
    new GxDatetime(2019, 8, 28, 3, 0, 0, 0)
  ],
  [
    timezones.Caracas,
    new GxDatetime(2019, 8, 28, 2, 0, 0, 0),
    new GxDatetime(2019, 8, 28, 6, 0, 0, 0)
  ],
  [
    timezones.Kabul,
    new GxDatetime(2019, 8, 28, 6, 30, 0, 0),
    new GxDatetime(2019, 8, 28, 2, 0, 0, 0)
  ]
];

describe("toUniversalTime operation", () => {
  for (const t of testCases) {
    it(`toUniversalTime for timezone ${t[0]} of ${t[1]} should be equal to ${t[2]}`, () => {
      setTimezone(t[0]);
      expect(toUniversalTime(t[1])).toEqual(t[2]);
    });
  }
});
