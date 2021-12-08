export const testCases: Array<[string, string, string, string]> = [
  ["Textoáéíóú", "áéíóú", "aeiou", "Textoaeiou"],
  ["😀áéí😀óú😀", "😀", "X", "XáéíXóúX"],
  ["Peñarol Campeón del Siglo XX", "XX", "20", "Peñarol Campeón del Siglo 20"],
  ["Peñarol Campeón del Siglo XX", " del Siglo XX", "", "Peñarol Campeón"],
  [
    "Texto Peñarol Campeón del Siglo XX Texto",
    "^Texto ",
    "",
    "Peñarol Campeón del Siglo XX Texto"
  ],
  ["Peñarol Campeón del Siglo XX", "e", "", "Pñarol Campón dl Siglo XX"]
];
