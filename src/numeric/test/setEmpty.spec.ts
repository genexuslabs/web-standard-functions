import { setEmpty } from "../setEmpty";

describe("setEmpty operation", () => {
  it("should always return 0", () => {
    expect(setEmpty(123)).toBe(0);
  });
});
