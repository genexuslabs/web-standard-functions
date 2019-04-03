import { subString } from "../subString";
import { testCases } from "./substring-cases";

describe("substring operation", () => {
  for (const t of testCases) {
    it(`substring in "${t[0]}" from "${t[1]}" length ""${t[2]}" to equal "${
      t[3]
    }"`, () => {
      expect(subString(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
});
