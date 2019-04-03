import { isEmpty } from "../isEmpty";
import { testCases } from "./isempty-cases";

describe("boolean at operation", () => {
  for (const t of testCases) {
    it(`isEmpty(${t[0]}) should be equal to "${t[1]}"`, () => {
      expect(isEmpty(t[0])).toBe(t[1]);
    });
  }
});
