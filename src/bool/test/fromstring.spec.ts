import { fromString } from "../fromString";
import { testCases } from "./fromstring-cases";

describe("boolean at operation", () => {
  for (const t of testCases) {
    it(`fromString("${t[0]}") should be equal to ${t[1]}`, () => {
      expect(fromString(t[0])).toBe(t[1]);
    });
  }
});
