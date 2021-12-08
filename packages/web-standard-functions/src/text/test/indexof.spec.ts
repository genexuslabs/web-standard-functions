import { indexOf } from "../indexOf";
import { testCases } from "./indexof-cases";

describe("indexOf operation", () => {
  for (const t of testCases) {
    it(`"${t[0]}" last index of "${t[1]}" from ${t[2]} should be equal to "${t[3]}"`, () => {
      expect(indexOf(t[0], t[1], t[2])).toBe(t[3]);
    });
  }
});

const testCases2: Array<[string, string, number]> = [
  ["Texto 😀 Texto 😀 Texto", "😀", 7],
  ["Texto 😀 Texto 😀 Texto", "Texto", 1],
  ["Texto 😀 Texto 😀 Texto", "Texto 😀 Texto 😀 Texto", 1],
  ["Hello", "world!", 0]
];

describe("indexOf operation without optional 'from' paramter", () => {
  for (const t of testCases2) {
    it(`"${t[0]}" index of "${t[1]}" should be equal to "${t[2]}"`, () => {
      expect(indexOf(t[0], t[1])).toBe(t[2]);
    });
  }
});
