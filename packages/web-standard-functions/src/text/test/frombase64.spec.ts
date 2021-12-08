import { fromBase64 } from "../fromBase64";

const testCases: Array<[string, string]> = [
  ["", ""],
  ["SGVsbG8gd29ybGQh", "Hello world!"]
];

describe("fromBase64 operation", () => {
  for (const t of testCases) {
    it(`decoding base64 string "${t[0]}" should equal "${t[1]}"`, () => {
      expect(fromBase64(t[0])).toBe(t[1]);
    });
  }
});
