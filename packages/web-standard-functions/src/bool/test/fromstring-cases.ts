// Boolean::FromString test cases
export const testCases: Array<[string, boolean]> = [
  ["true", true],
  ["false", false],
  ["True", true],
  ["False", false],
  ["TRUE", true],
  ["FALSE", false],
  ["0", false],
  ["1", false],
  ["X", false]
];
