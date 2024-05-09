import { replace } from "../replace";
import { testCases } from "./replace-cases";

describe("replace operation", () => {
  for (const t of testCases) {
    it(`replace in "${t[0]}" of "${t[1]}" by ""${t[2]}" to equal "${t[3]}"`, () => {
      expect(replace(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
});
