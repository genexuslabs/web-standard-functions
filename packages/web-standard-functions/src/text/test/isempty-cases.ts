// startsWith test cases
export const testCases: Array<[string, boolean]> = [
  ["Peñarol Campeón del Siglo XX", false],
  ["   Peñarol Campeón del Siglo XX", false],
  ["   Peñarol Campeón del Siglo XX    ", false],
  ["", true],
  ["  ", true]
];
