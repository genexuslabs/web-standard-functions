import { charAt } from "../charat";
import { testCases } from "./charat-cases";

describe("char at operation", () => {
  for (const t of testCases) {
    it(`charat ${t[1]} of "${t[0]}" should be equal to "${t[2]}"`, () => {
      expect(charAt(t[0], t[1])).toBe(t[2]);
    });
  }
});
