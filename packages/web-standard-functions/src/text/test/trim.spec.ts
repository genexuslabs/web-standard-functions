import { trim } from "../trim";
import { testCases } from "./trim-cases";

describe("trim operation", () => {
  for (const t of testCases) {
    it(`should trim "${t[0]}" to equal "${t[1]}"`, () => {
      expect(trim(t[0])).toBe(t[1]);
    });
  }
});
