import { testCases } from "./negate-cases";
import { negate } from "../negate";
import { GxBigNumber } from "../../types/gxbignumber";

describe("negate operation", () => {
  for (const t of testCases) {
    it(`should negate ${t[0]} to equal ${t[1]}`, () => {
      expect(negate(new GxBigNumber(t[0])).toString()).toBe(t[1]);
    });
  }
});
