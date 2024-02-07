import { pow } from "../pow";
import { testCases } from "./pow-sqrt-cases";

describe("pow operation", () => {
  for (const t of testCases) {
    it(`should raise ${t[0]} to the power of ${t[1]} to equal ${t[2]}`, () => {
      expect(pow(t[0], t[1])).toBe(t[2]);
    });
  }
});

describe("pow operation", () => {
  for (const t of testCases) {
    it(`should raise ${t[0]} to the power of ${t[1]} to equal ${t[2]}`, () => {
      expect(pow(t[0], t[1]).toString()).toBe(t[2].toString());
    });
  }
});
