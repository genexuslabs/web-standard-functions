import { indexOf } from "../indexOf";
import { testCases } from "./indexof-cases";

describe("indexOf operation", () => {
  for (const t of testCases) {
    it(`"${t[0]}" last index of "${t[1]}" from ${t[2]} should be equal to "${
      t[3]
    }"`, () => {
      expect(indexOf(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
});
