export const testCases = [
  ["Textoáéíóú", "áéíóú", "aeiou", "Textoaeiou"],
  ["😀áéí😀óú😀", "😀", "X", "Xáéí😀óú😀"],
  ["Peñarol Campeón del Siglo XX", "XX", "20", "Peñarol Campeón del Siglo 20"],
  ["Peñarol Campeón del Siglo XX", " del Siglo XX", "", "Peñarol Campeón"]
];
