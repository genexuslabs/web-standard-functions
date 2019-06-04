import { fromTimezone } from "../fromTimezone";
import { timezones } from "../timezone";
import { getTimezone } from "../getTimezone";
import { setTimezone } from "../setTimezone";

export const testCases: Array<[timezones, Date, Date]> = [
  [
    //Montevideo 2012 in DST
    timezones.Buenos_Aires,
    new Date(2012, 11, 28, 2, 0, 0, 0),
    new Date(2012, 11, 28, 3, 0, 0, 0)
  ],
  [
    //Montevideo 2018 No DST
    timezones.Buenos_Aires,
    new Date(2018, 11, 28, 2, 0, 0, 0),
    new Date(2018, 11, 28, 2, 0, 0, 0)
  ],
  [
    timezones.Buenos_Aires,
    new Date(2019, 8, 28, 2, 0, 0, 0),
    new Date(2019, 8, 28, 2, 0, 0, 0)
  ],
  [
    timezones.Darwin,
    new Date(2019, 8, 28, 2, 0, 0, 0),
    new Date(2019, 8, 27, 13, 30, 0, 0)
  ],
  [
    timezones.Cape_Verde,
    new Date(2019, 8, 28, 2, 0, 0, 0),
    new Date(2019, 8, 28, 0, 0, 0, 0)
  ],
  [
    timezones.Caracas,
    new Date(2019, 8, 28, 2, 0, 0, 0),
    new Date(2019, 8, 28, 3, 0, 0, 0)
  ],
  [
    timezones.Kabul,
    new Date(2019, 8, 28, 2, 0, 0, 0),
    new Date(2019, 8, 27, 18, 30, 0, 0)
  ]
];

describe("fromTimezone operation", () => {
  setTimezone(timezones.Montevideo);
  for (const t of testCases) {
    it(`fromTimezone for timezone ${t[0]} of ${
      t[1]
    } at CTZ "${getTimezone()}" should be equal to ${t[2]}`, () => {
      expect(fromTimezone(t[1], t[0])).toEqual(t[2]);
    });
  }
});
