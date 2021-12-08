import { splitRegExp } from "../splitRegExp";
import { testCases } from "./splitregexp-cases";

describe("splitRegExp operation", () => {
  for (const t of testCases) {
    it(`split in "${t[0]}" with separator "${t[1]}" to equal "${t[2]}"`, () => {
      expect(splitRegExp(t[0], t[1])).toEqual(t[2]);
    });
  }
});
