import { matches } from "../matches";
import { testCases } from "./matches-cases";

describe("matches operation", () => {
  for (const t of testCases) {
    it(`"${t[0]}" matches with "${t[1]}" should be equal to "${t[2]}"`, () => {
      expect(matches(t[0], t[1])[0]).toBe(t[2]);
      expect(matches(t[0], t[1]).length).toBe(t[3]);
    });
  }
});
