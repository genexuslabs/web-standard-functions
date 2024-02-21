import { GxBigNumber } from "../../types/gxbignumber";
import { setEmpty } from "../setEmpty";

describe("setEmpty operation", () => {
  it("should always return 0", () => {
    expect(setEmpty(123)).toBe(0);
  });
});

describe("setEmpty operation", () => {
  it("should always return 0", () => {
    expect(GxBigNumber.setEmpty().toString()).toBe("0");
  });
});
