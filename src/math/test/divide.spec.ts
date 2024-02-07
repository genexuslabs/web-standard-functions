import { divide } from "../divide";
import { testCases } from "./multiply-divide-cases";
import { GxBigDecimal } from "../../types/gxBigDecimal";

describe("divide operation", () => {
  for (const t of testCases) {
    it(`should divide ${t[2]} * ${t[1]} to equal ${t[0]}`, () => {
      expect(divide(t[2], t[1])).toBe(t[0]);
    });
  }
});

describe("divide operation", () => {
  for (const t of testCases) {
    it(`should divide ${t[2]} * ${t[1]} to equal ${t[0]}`, () => {
      expect(GxBigDecimal.divide(t[2], t[1]).toString()).toBe(t[0].toString());
    });
  }
});
