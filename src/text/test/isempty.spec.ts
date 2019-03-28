import { isEmpty } from "../isEmpty";
import { testCases } from "./isempty-cases";

describe("isEmpty operation", () => {
  for (const t of testCases) {
    it(`"${t[0]}" isEmpty should be equal to "${t[1]}"`, () => {
      expect(isEmpty(t[0])).toBe(t[1]);
    });
  }
});
