import { endsWith } from "../endsWith";
import { testCases } from "./endswith-cases";

describe("endswith operation", () => {
  for (const t of testCases) {
    it(`"${t[0]}" ends with "${t[1]}" should be equal to "${t[2]}"`, () => {
      expect(endsWith(t[0], t[1])).toBe(t[2]);
    });
  }
});
