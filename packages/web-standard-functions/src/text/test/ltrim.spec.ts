import { ltrim } from "../lTrim";
import { testCases } from "./ltrim-cases";

describe("ltrim operation", () => {
  for (const t of testCases) {
    it(`should trim "${t[0]}" to equal "${t[1]}"`, () => {
      expect(ltrim(t[0])).toBe(t[1]);
    });
  }
});
