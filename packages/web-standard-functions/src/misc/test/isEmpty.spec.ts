import { isEmpty } from "../isEmpty";

const testCases: Array<[any, boolean]> = [
  ["", true],
  ["x", false],
  [null, true],
  [undefined, true],
  [0, true],
  [1, false]
];

describe("IsEmpty function", () => {
  for (const t of testCases) {
    it(`isEmtpy(${t[0]}) should be ${t[1]}`, () => {
      expect(isEmpty(t[0])).toBe(t[1]);
    });
  }
});
