import { currentOffset } from "../currentOffset";
import { timezones } from "../timezone";
import { setTimezone } from "../setTimezone";

export const testCases: Array<[timezones, number]> = [
  [timezones.UTC, 0],
  [timezones.Buenos_Aires, -180],
  [timezones.Darwin, 570],
  [timezones.Cape_Verde, -60],
  [timezones.Caracas, -240],
  [timezones.Kabul, 270]
];

describe("getCurrentoffset operation", () => {
  for (const t of testCases) {
    it(`getCurrentoffset for ${t[0]} should be equal to "${t[1]}"`, () => {
      setTimezone(t[0]);
      expect(currentOffset()).toEqual(t[1]);
    });
  }
});
