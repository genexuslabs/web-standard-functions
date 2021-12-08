import { asc } from "../asc";

const testCases: Array<[string, number]> = [
  ["t", 116],
  ["texto", 116],
  ["T", 84],
  ["Texto", 84],
  ["", 0],
  ["😀", 55357],
  ["ñ", 241]
];

describe("asc function", () => {
  for (const t of testCases) {
    it(`asc("${t[0]}") should be ${t[1]}`, () => {
      expect(asc(t[0])).toBe(t[1]);
    });
  }
});
