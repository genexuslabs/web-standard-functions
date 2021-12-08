// String test cases
export const testCases = [
  ["texto", "texto"],
  [" texto", "texto"],
  ["texto ", "texto "],
  [" texto ", "texto "],
  ["  texto", "texto"],
  ["texto  ", "texto  "],
  ["  texto  ", "texto  "],
  ["  te xto  ", "te xto  "],
  ["  \tte xto  ", "\tte xto  "],
  ["  \nte xto  ", "\nte xto  "],
  ["  \rte xto  ", "\rte xto  "],
  ["  \tte xto\t\n\r  ", "\tte xto\t\n\r  "],
  ["  🧉😀\tte xto\t\r\n  ", "🧉😀\tte xto\t\r\n  "]
];
