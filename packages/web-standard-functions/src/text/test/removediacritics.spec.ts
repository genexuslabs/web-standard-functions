import { removeDiacritics } from "../removeDiacritics";
import { testCases } from "./removediacritics-cases";

describe("removeDiacritics operation", () => {
  for (const t of testCases) {
    it(`removeDiacritics of "${t[0]}" to equal "${t[1]}"`, () => {
      expect(removeDiacritics(t[0])).toBe(t[1]);
    });
  }
});
