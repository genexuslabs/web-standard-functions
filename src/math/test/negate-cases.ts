// negate(test[0]) = test[1]

// Negate test cases
export const testCases = [
  [1, -1],
  [1.1, -1.1],
  [0.0001, -0.0001],
  [0.00000001, -0.00000001],
  [0.00000000000001, -0.00000000000001],
  [-1000, 1000],
  [-10000000000000000000, 10000000000000000000],
  [-1, 1]
];

export const testCases2 = [
  ["1", "-1"],
  ["1.1", "-1.1"],
  ["0.0001", "-0.0001"],
  ["0.00000001", "-0.00000001"],
  ["0.00000000000001", "-0.00000000000001"],
  ["-1000", "1000"],
  ["-10000000000000000000", "10000000000000000000"],
  ["-1", "1"]
];
