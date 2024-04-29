import { urlDecode } from "../urlDecode";
const testCases: Array<[string, string]> = [
  [
    "https%3A%2F%2Fwww.example.com%2Fsearch%3Fquery%3Dmy%20search%20term",
    "https://www.example.com/search?query=my search term"
  ],
  [
    "https://www.example.com/éàü?query=%C3%A9%C3%A0%C3%BC",
    "https://www.example.com/éàü?query=éàü"
  ],
  [
    "https%3A%2F%2Fwww.example.com%2F%C3%A9%C3%A0%C3%BC%3Fquery%3D%C3%A9%C3%A0%C3%BC",
    "https://www.example.com/éàü?query=éàü"
  ],
  [
    "https://www.example.com/page?query=%3Cexample%3E",
    "https://www.example.com/page?query=<example>"
  ],
  [
    "https%3A%2F%2Fwww.example.com%2Fpage%3Fquery%3D%3Cexample%3E",
    "https://www.example.com/page?query=<example>"
  ]
];

describe("UrlDecode", () => {
  for (const t of testCases) {
    it(`urlDecode(${t[0]}) should be equal to ${t[1]}`, () => {
      expect(urlDecode(t[0])).toBe(t[1]);
    });
  }
});
