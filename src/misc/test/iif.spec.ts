import { iif } from "../iif";

const testCases: Array<[boolean, any, any, any]> = [
  [true, 1, 2, 1],
  [false, 1, 2, 2],
  [true, "a", "b", "a"],
  [false, "a", "b", "b"]
];

describe("iif operator", () => {
  for (const t of testCases) {
    it(`iif(${t[0]}, ${t[1]}, ${t[2]}) should be ${t[3]}`, () => {
      expect(iif(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
});
