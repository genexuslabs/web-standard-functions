import { xsltApply } from "../xsltApply";
import { testCases } from "./xsltapply-cases";

describe("xsltApply operation", () => {
  for (const t of testCases) {
    it(`should xsltApply xml "${t[0]}", xsl "${t[1]}" to equal "${t[2]}"`, () => {
      expect(xsltApply(t[0], t[1])).toBe(t[2]);
    });
  }
});
