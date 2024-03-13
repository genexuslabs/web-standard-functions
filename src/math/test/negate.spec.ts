import { negate } from "../negate";
import { testCases, testCases2 } from "./negate-cases";
import { negateBigNumber } from "../../bigNumber/negate";
import { GxBigNumber } from "../../types/gxbignumber";

describe("negate operation", () => {
  for (const t of testCases) {
    it(`should negate ${t[0]} to equal ${t[1]}`, () => {
      expect(negate(t[0]).toString()).toBe(t[1].toString());
    });
  }
});

describe("negate operation", () => {
  for (const t of testCases2) {
    it(`should negate ${t[0]} to equal ${t[1]}`, () => {
      expect(negateBigNumber(new GxBigNumber(t[0])).toString()).toBe(t[1]);
    });
  }
});
