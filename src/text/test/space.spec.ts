import { space } from "../space";

const testCases: Array<[number, string]> = [
  [0, ""],
  [1, " "],
  [12, "            "]
];

describe("Space function", () => {
  for (const t of testCases) {
    it(`should return "${t[1]}" for input parameter ${t[0]}`, () => {
      expect(space(t[0])).toBe(t[1]);
    });
  }
});
