// charAt test cases
export const testCases: Array<[string, number, string]> = [
  ["texto", 0, ""],
  ["texto", -1, ""],
  ["texto", 100, ""],
  ["texto", 1, "t"],
  ["texto", 2, "e"],
  ["texto", 5, "o"],
  [" 😀texto", 1, " "],
  [" 😀texto", 2, "😀"],
  [" 😀texto", 3, "t"],
  [" 😀te xto\t\r\n ", 3, "t"],
  [" 😀\tte xto\t\r\n ", 6, " "],
  [" 😀\tte xto\t\r\n ", 11, "\r"]
];
