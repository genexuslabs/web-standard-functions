import { toUniversalTime } from "../toUniversaltime";
import { timezones } from "../timezone";
import { setTimezone } from "../setTimezone";

export const testCases: Array<[timezones, Date, Date]> = [
  [
    timezones.Buenos_Aires,
    new Date(2019, 8, 28, 2, 0, 0, 0),
    new Date(2019, 8, 28, 5, 0, 0, 0)
  ],
  [
    timezones.Darwin,
    new Date(2019, 8, 28, 2, 0, 0, 0),
    new Date(2019, 8, 27, 16, 30, 0, 0)
  ],
  [
    timezones.Cape_Verde,
    new Date(2019, 8, 28, 2, 0, 0, 0),
    new Date(2019, 8, 28, 3, 0, 0, 0)
  ],
  [
    timezones.Caracas,
    new Date(2019, 8, 28, 2, 0, 0, 0),
    new Date(2019, 8, 28, 6, 0, 0, 0)
  ],
  [
    timezones.Kabul,
    new Date(2019, 8, 28, 6, 30, 0, 0),
    new Date(2019, 8, 28, 2, 0, 0, 0)
  ]
];

describe("toUniversaltime operation", () => {
  for (const t of testCases) {
    it(`toUniversaltime for timezone ${t[0]} of ${t[1]} should be equal to ${
      t[2]
    }`, () => {
      setTimezone(t[0]);
      expect(toUniversalTime(t[1])).toEqual(t[2]);
    });
  }
});
