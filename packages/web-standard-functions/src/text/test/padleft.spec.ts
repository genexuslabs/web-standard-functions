import { padLeft } from "../padLeft";
import { testCases } from "./padleft-cases";

describe("padLeft operation", () => {
  for (const t of testCases) {
    it(`should padLeft "${t[0]}" to length "${t[0]}" using "${t[2]}" should be equal to "${t[3]}"`, () => {
      expect(padLeft(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
});
