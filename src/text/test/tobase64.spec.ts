import { toBase64 } from "../toBase64";

const testCases: Array<[string, string]> = [
  ["", ""],
  ["Hello world!", "SGVsbG8gd29ybGQh"]
];

describe("toBase64 operation", () => {
  for (const t of testCases) {
    it(`converting "${t[0]}" to base64 should equal "${t[1]}"`, () => {
      expect(toBase64(t[0])).toBe(t[1]);
    });
  }
});
