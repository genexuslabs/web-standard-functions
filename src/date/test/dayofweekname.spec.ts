import { dayOfWeekName } from "../dayOfWeekName";

export const testCases: Array<[Date, string, string]> = [
  [new Date(1891, 8, 28), "eng", "Monday"],
  [new Date(1968, 7, 9), "eng", "Friday"],
  [new Date(2019, 3, 3), "eng", "Wednesday"],
  [new Date(1891, 8, 28), "spa", "lunes"],
  [new Date(1968, 7, 9), "spa", "viernes"],
  [new Date(2019, 3, 3), "spa", "miércoles"]
];

describe("dayOfWeekName operation", () => {
  for (const t of testCases) {
    it(`dayOfWeekName for "${t[0]}" with lang "${t[1]}" should be equal to "${
      t[2]
    }"`, () => {
      expect(dayOfWeekName(t[0], t[1])).toEqual(t[2]);
    });
  }
});
