import { startsWith } from "../startsWith";
import { testCases } from "./startswith-cases";

describe("startswith operation", () => {
  for (const t of testCases) {
    it(`"${t[0]}" starts with "${t[1]}" should be equal to "${t[2]}"`, () => {
      expect(startsWith(t[0], t[1])).toBe(t[2]);
    });
  }
});
