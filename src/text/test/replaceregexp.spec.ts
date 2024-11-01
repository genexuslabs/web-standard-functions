import { GxRegEx } from "../../types/gxRegEx";
import { replaceRegExp } from "../replaceRegExp";
import { testCases } from "./replaceregexp-cases";

describe("replaceRegExp operation", () => {
  for (const t of testCases) {
    it(`replace in "${t[0]}" of regExp "${t[1]}" by ""${t[2]}" to equal "${t[3]}"`, () => {
      expect(replaceRegExp(t[0], t[1], t[2])).toBe(t[3]);
      expect(GxRegEx.getLastErrCode()).toBe(t[4]);
      expect(GxRegEx.getLastErrDescription()).toBe(t[5]);
    });
  }
});
