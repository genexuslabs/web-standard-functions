import { browserIdFromAgent, BrowserIdValues } from "../browserCommon";

let testCases: Array<[string, string, number, string]> = [
  ["Undefined", undefined, BrowserIdValues.UnknownAgent, ""],
  ["Invalid", "This is not a user agent", BrowserIdValues.UnknownAgent, ""],
  [
    "Edge",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 13.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134",
    BrowserIdValues.Edge,
    "17.17134"
  ],
  [
    "Chrome",
    "5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
    BrowserIdValues.Chrome,
    "78.0.3904.108"
  ]
];

describe("BrowserID and BrowserVersion function", () => {
  for (const t of testCases) {
    it(`should work for user agent: ${t[0]}`, () => {
      const result = browserIdFromAgent(t[1]);
      expect(result.id).toBe(t[2]);
      expect(result.version).toBe(t[3]);
    });
  }
});
