import { lastIndexOf } from "../lastIndexOf";
import { testCases } from "./lastindexof-cases";

describe("lastIndexOf operation", () => {
  for (const t of testCases) {
    it(`"${t[0]}" last index of "${t[1]}" from ${t[2]} should be equal to "${t[3]}"`, () => {
      expect(lastIndexOf(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
});
