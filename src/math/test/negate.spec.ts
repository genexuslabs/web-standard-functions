import { GxBigNumber } from "../../types/gxbignumber";
import { negate } from "../negate";
import { testCases } from "./negate-cases";

describe("negate operation", () => {
  for (const t of testCases) {
    it(`should negate ${t[0]} to equal ${t[1]}`, () => {
      expect(negate(t[0])).toBe(t[1]);
    });
  }
});

describe("negate operation", () => {
  for (const t of testCases) {
    it(`should negate ${t[0]} to equal ${t[1]}`, () => {
      expect(GxBigNumber.negate(t[0]).toString()).toBe(t[1].toString());
    });
  }
});
