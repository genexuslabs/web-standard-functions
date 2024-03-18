import { mod } from "../mod";
import { testCases, testCases2 } from "./mod-cases";
import { modBigNumber } from "../../bigNumber/mod";
import { GxBigNumber } from "../../types/gxbignumber";

describe("mod operation", () => {
  for (const t of testCases) {
    it(`should ${t[0]} modulo ${t[1]} to equal ${t[2]}`, () => {
      expect(mod(t[0], t[1])).toBe(t[2]);
    });
  }
});

describe("mod operation", () => {
  for (const t of testCases2) {
    it(`should ${t[0]} modulo ${t[1]} to equal ${t[2]}`, () => {
      expect(
        modBigNumber(new GxBigNumber(t[0]), new GxBigNumber(t[1])).toString()
      ).toBe(t[2]);
    });
  }
});
