import { divide } from "../divide";
import { testCases } from "./multiply-divide-cases";

describe("divide operation", () => {
  for (const t of testCases) {
    it(`should divide ${t[2]} * ${t[1]} to equal ${t[0]}`, () => {
      expect(divide(t[2], t[1]).toString()).toBe(t[0].toString());
    });
  }
});
