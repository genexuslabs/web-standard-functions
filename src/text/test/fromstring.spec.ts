import { fromString } from "../fromString";
import { testCases } from "./fromstring-cases";

describe("fromString operation", () => {
  for (const t of testCases) {
    it(`fromString in "${t[0]}" to equal "${t[0]}"`, () => {
      expect(fromString(t[0])).toBe(t[0]);
    });
  }
});
