import { contains } from "../contains";
import { testCases } from "./contains-cases";

describe("contains operation", () => {
  for (const t of testCases) {
    it(`"${t[0]}" contains of "${t[1]}" should be equal to "${t[2]}"`, () => {
      expect(contains(t[0], t[1])).toBe(t[2]);
    });
  }
});
