import { concat } from "../concat";

const testCases1: Array<[string, string, string, string]> = [
  ["Hello", "world!", " ", "Hello world!"],
  ["", "", " ", " "],
  ["Hello     ", "world!", " ", "Hello world!"],
  ["Hello", "world!", "|", "Hello|world!"]
];

const testCases2: Array<[string, string, string]> = [
  ["Hello", "world!", "Helloworld!"],
  ["Hello    ", "world!", "Helloworld!"],
  ["", "", ""]
];

describe("concat operation", () => {
  for (const t of testCases1) {
    it(`concatenating "${t[0]}" and "${t[1]}" with separator ${t[2]} should be equal to "${t[3]}"`, () => {
      expect(concat(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
  for (const t of testCases2) {
    it(`concatenating "${t[0]}" and "${t[1]}" without separator should be equal to "${t[2]}"`, () => {
      expect(concat(t[0], t[1])).toBe(t[2]);
    });
  }
});
