import { mod } from "../mod";
import { testCases } from "./mod-cases";

describe("mod operation", () => {
  for (const t of testCases) {
    it(`should ${t[0]} modulo ${t[1]} to equal ${t[2]}`, () => {
      expect(mod(t[0], t[1])).toBe(t[2]);
    });
  }
});
