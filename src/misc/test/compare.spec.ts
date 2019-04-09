import { compare } from "../compare";

const testCases: Array<[any, string, any, boolean]> = [
  [1, "<", 2, true],
  [1, "<", 0, false],
  [1, "<", 1, false],
  [1, "<=", 2, true],
  [1, "<=", 0, false],
  [1, "<=", 1, true],
  [1, ">", 2, false],
  [1, ">", 0, true],
  [1, ">", 1, false],
  [1, ">=", 2, false],
  [1, ">=", 0, true],
  [1, ">=", 1, true],
  [1, "=", 1, true],
  [1, "=", 2, false],
  [1, "<>", 1, false],
  [1, "<>", 2, true],

  ["b", "<", "c", true],
  ["b", "<", "a", false],
  ["b", "<", "b", false],
  ["b", "<=", "c", true],
  ["b", "<=", "a", false],
  ["b", "<=", "b", true],
  ["b", ">", "c", false],
  ["b", ">", "a", true],
  ["b", ">", "b", false],
  ["b", ">=", "c", false],
  ["b", ">=", "a", true],
  ["b", ">=", "b", true],
  ["b", "=", "b", true],
  ["b", "=", "c", false],
  ["b", "<>", "b", false],
  ["b", "<>", "c", true],

  ["text", "<", "texto", true],
  ["text", "<=", "texto", true],
  ["text", ">", "texto", false],
  ["text", ">=", "texto", false],
  ["text", "=", "texto", false],
  ["text", "<>", "texto", true],

  ["abc", "like", "a", true],
  ["abc", "like", "b", false],
  ["abc", "like", "%c", true],
  ["abc", "like", "%x", false]
];

describe("compare operator", () => {
  for (const t of testCases) {
    it(`${t[0]} ${t[1]} ${t[2]} should be ${t[3]}`, () => {
      expect(compare(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
});
