import { now } from "../now";
import { difference } from "../difference";
import { timezones } from "../timezone";
import { setTimezone } from "../setTimezone";
import { addMinutes } from "../addMinutes";

export const testCases: Array<[timezones, number]> = [
  [timezones.Buenos_Aires, 180 * 60],
  [timezones.Darwin, -570 * 60],
  [timezones.Cape_Verde, 60 * 60],
  [timezones.Caracas, 240 * 60],
  [timezones.Kabul, -270 * 60]
];

describe("now operation", () => {
  for (const t of testCases) {
    const execElapseTolerance = 1;
    setTimezone(timezones.UTC);
    let nowAtUTC = now();
    setTimezone(t[0]);
    let nowLocal = now();

    it(`now at "${
      t[0]
    }" is ${nowLocal.toISOString()}\t at UTC is ${nowAtUTC.toISOString()}\t difference should be ${t[1] /
      100} minutes (+/- ${execElapseTolerance} secs)`, () => {
      let dif = Math.abs(difference(nowAtUTC, nowLocal) - t[1]);

      expect(dif >= 0 && dif < execElapseTolerance).toBeTruthy();
    });
  }
});
