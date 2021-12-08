import { chr } from "../chr";

const testCases: Array<[number, string]> = [
  [116, "t"],
  [84, "T"],
  [-1, ""],
  [241, "ñ"]
];

describe("chr function", () => {
  for (const t of testCases) {
    it(`chr("${t[0]}") should be ${t[1]}`, () => {
      expect(chr(t[0])).toBe(t[1]);
    });
  }
});
