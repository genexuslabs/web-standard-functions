import { emptyValue } from "../emptyValue";

const testCases: Array<[any, any]> = [
  ["", ""],
  ["x", ""],
  [null, null],
  [undefined, null],
  [0, 0],
  [1, 0]
];

describe("NullValue function", () => {
  for (const t of testCases) {
    it(`emptyValue(${t[0]}) should be ${t[1]}`, () => {
      expect(emptyValue(t[0])).toBe(t[1]);
    });
  }
});
