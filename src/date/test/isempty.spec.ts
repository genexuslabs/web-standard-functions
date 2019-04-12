import { isEmpty } from "../isEmpty";

export const testCases: Array<[Date, boolean]> = [
  [new Date(1891, 8, 28), false],
  [new Date(0, 0, 0), true]
];

describe("isEmpty operation", () => {
  for (const t of testCases) {
    it(`isempty for "${t[0]}" should be equal to "${t[1]}"`, () => {
      expect(isEmpty(t[0])).toBe(t[1]);
    });
  }
});
