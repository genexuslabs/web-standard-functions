import { toString } from "../toString";
import { testCases } from "./tostring-cases";

describe("boolean at operation", () => {
  for (const t of testCases) {
    it(`toString(${t[0]}) should be equal to "${t[1]}"`, () => {
      expect(toString(t[0])).toBe(t[1]);
    });
  }
});