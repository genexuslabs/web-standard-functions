import { format } from "../format";

describe("format function", () => {
  it(`should do nothing if string has no placeholders`, () => {
    const result = format("Hello world!", "test");
    expect(result).toBe(result);
  });
  it(`should do nothing if there are no parameters`, () => {
    const result = format("%1");
    expect(result).toBe(result);
  });
  it(`should do replace the placeholders`, () => {
    const result = format("Hello %1 %2!", 1, "world");
    expect(result).toBe("Hello 1 world!");
  });
});
