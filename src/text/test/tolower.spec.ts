import { toLower } from "../toLower";
import { testCases } from "./tolower-cases";

describe("toLower operation", () => {
  for (const t of testCases) {
    it(`toLower in "${t[0]}" to equal "${t[1]}"`, () => {
      expect(toLower(t[0])).toBe(t[1]);
    });
  }
});
