import { GxBigDecimal } from "../../types/gxBigDecimal";
import { multiply } from "../multiply";
import { testCases } from "./multiply-divide-cases";

describe("multiply operation", () => {
  for (const t of testCases) {
    it(`should multiply ${t[0]} * ${t[1]} to equal ${t[2]}`, () => {
      expect(multiply(t[0], t[1])).toBe(t[2]);
    });
  }
});

describe("multiply operation", () => {
  for (const t of testCases) {
    it(`should multiply ${t[0]} * ${t[1]} to equal ${t[2]}`, () => {
      expect(GxBigDecimal.multiply(t[0], t[1]).toString()).toBe(
        t[2].toString()
      );
    });
  }
});
