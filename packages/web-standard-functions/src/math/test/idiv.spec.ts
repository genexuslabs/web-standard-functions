import { idiv } from "../idiv";
import { testCases } from "./mod-integer-div-cases";

describe("idiv operation", () => {
  for (const t of testCases) {
    it(`should ${t[0]} idiv ${t[1]} to equal ${t[2]}`, () => {
      expect(idiv(t[0], t[1])).toBe(t[2]);
    });
  }
});
