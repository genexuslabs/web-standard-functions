// charAt test cases
export const testCases: Array<[string, string, boolean]> = [
  ["Peñarol Campeón del Siglo XX", "Peñarol", true],
  ["Peñarol Campeón del Siglo XX 😀", " del", true],
  ["Peñarol Campeón del Siglo XX 😀", "del", true],
  ["Peñarol Campeón del Siglo XX 😀", "XX 😀", true],
  ["Peñarol Campeón del Siglo XX 😀", "Decano", false],
  ["Peñarol Campeón del Siglo XX", "Fuga", false]
];
