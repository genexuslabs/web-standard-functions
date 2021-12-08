import { padRight } from "../padRight";
import { testCases } from "./padright-cases";

describe("padRight operation", () => {
  for (const t of testCases) {
    it(`should padRight "${t[0]}" to length "${t[0]}" using "${t[2]}" should be equal to "${t[3]}"`, () => {
      expect(padRight(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
});
