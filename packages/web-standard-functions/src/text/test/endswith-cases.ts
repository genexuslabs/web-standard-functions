// startsWith test cases
export const testCases: Array<[string, string, boolean]> = [
  ["Peñarol Campeón del Siglo XX", "XX", true],
  ["Peñarol Campeón del Siglo XX 😀", "😀", true],
  ["Peñarol Campeón del Siglo XX 😀", "XX 😀", true],
  ["😀Peñarol Campeón del Siglo XX 😀", "😀P", false],
  ["Peñarol Campeón del Siglo XX", "Campeón del Siglo XX", true],
  ["Peñarol Campeón del Siglo XX", "Fuga", false]
];
