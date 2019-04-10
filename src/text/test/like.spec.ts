import { like } from "../like";

const testCases: Array<[string, string, boolean]> = [
  ["texto", "te", true],
  ["texto", "te%", true],
  ["texto", "xto", false],
  ["texto", "%xto", true],
  ["texto", "%x", true],
  ["Hello world!", "He%o%!", true],
  ["Hello world!", "%%%%%world", true],
  ["texto", "_xto", false],
  ["texto", "_exto", true],
  ["texto", "t_xto", true]
];

describe("like operator", () => {
  for (const t of testCases) {
    it(`"${t[0]}" like "${t[1]}" should be equal to ${t[2]}`, () => {
      expect(like(t[0], t[1])).toBe(t[2]);
    });
  }
});
