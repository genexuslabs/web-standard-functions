export const testCases: Array<[string, string | RegExp, boolean]> = [
  ["Peñarol Campeón del Siglo XX", "Siglo", true],
  ["Peñarol Campeón del Siglo XX", /Siglo/, true],
  ["Peñarol Campeón del Siglo XX", "$Peñarol", false],
  ["Peñarol Campeón del Siglo XX", /$Peñarol/, false],
  ["Peñarol Campeón del Siglo XX", "^Peñarol", true],
  ["Peñarol Campeón del Siglo XX", /^Peñarol/, true],
  ["Peñarol Campeón del Siglo XX", "Bolso", false],
  ["Peñarol Campeón del Siglo XX", /Bolso/, false]
];
