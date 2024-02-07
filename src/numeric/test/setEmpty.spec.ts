import { GxBigDecimal } from "../../types/gxBigDecimal";
import { setEmpty } from "../setEmpty";

describe("setEmpty operation", () => {
  it("should always return 0", () => {
    expect(setEmpty(123)).toBe(0);
  });
});

describe("setEmpty operation", () => {
  it("should always return 0", () => {
    expect(GxBigDecimal.setEmpty().toString()).toBe("0");
  });
});
