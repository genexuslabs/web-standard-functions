import { toNumeric } from "../toNumeric";
import { testCases } from "./tonumeric-cases";

describe("toNumeric operation", () => {
  for (const t of testCases) {
    it(`toNumeric of "${t[0]}" decimalPoint "${t[1]}" to equal "${
      t[2]
    }"`, () => {
      expect(toNumeric(t[0], t[1])).toBe(t[2]);
    });
  }
});
