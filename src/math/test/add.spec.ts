import { add } from "../add";
import { testCases } from "./add-subtract-cases";
import { GxBigNumber } from "../../types/gxBigNumber";

describe("add operation", () => {
  for (const t of testCases) {
    it(`should add ${t[0]} + ${t[1]} to equal ${t[2]}`, () => {
      expect(add(t[0], t[1])).toBe(t[2]);
    });
  }
});

describe("add operation", () => {
  for (const t of testCases) {
    it(`should add ${t[0]} + ${t[1]} to equal ${t[2]}`, () => {
      expect(GxBigNumber.add(t[0], t[1]).toString()).toBe(t[2].toString());
    });
  }
});
