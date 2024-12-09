import { GxRegEx } from "../gxRegEx";

export const testCasesRegEx1: Array<[number, string]> = [
  [0, ""],
  [1, "Error"]
];

describe("RegEx1", () => {
  for (const t of testCasesRegEx1) {
    it(`RegEx1 Code: ${t[0]} Descr: ${t[1]}`, () => {
      new GxRegEx(t[0], t[1]);
      expect(GxRegEx.getLastErrCode()).toBe(t[0]);
      expect(GxRegEx.getLastErrDescription()).toBe(t[1]);
    });
  }
});
