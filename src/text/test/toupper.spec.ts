import { toUpper } from "../toUpper";
import { testCases } from "./toupper-cases";

describe("toUpper operation", () => {
  for (const t of testCases) {
    it(`toUpper in "${t[0]}" to equal "${t[1]}"`, () => {
      expect(toUpper(t[0])).toBe(t[1]);
    });
  }
});
