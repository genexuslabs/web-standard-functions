import { length } from "../length";
import { testCases } from "./length-cases";

describe("length of operation", () => {
  for (const t of testCases) {
    it(`length of "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(length(t[0])).toBe(t[1]);
    });
  }
});