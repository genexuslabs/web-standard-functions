import { setEmpty } from "../setEmpty";

describe("setEmpty operation", () => {
  it("should always return false", () => {
    expect(setEmpty(true)).toBe(false);
    expect(setEmpty(false)).toBe(false);
  });
});
