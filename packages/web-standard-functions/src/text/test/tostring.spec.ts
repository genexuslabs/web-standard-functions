import { toString } from "../toString";
import { testCases } from "./tostring-cases";

describe("toString operation", () => {
  for (const t of testCases) {
    it(`toString in "${t[0]}" to equal "${t[1]}"`, () => {
      expect(toString(t[0])).toBe(t[1]);
    });
  }
});
