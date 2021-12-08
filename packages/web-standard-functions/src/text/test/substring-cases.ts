export const testCases: Array<[string, number, number, string]> = [
  ["Textoáéíóú", 2, 1, "e"],
  ["😀áéí😀óú😀", 1, 2, "😀á"],
  ["Textoáéíóú", 2, undefined, "extoáéíóú"],
  ["Textoáéíóú", 50, undefined, ""]
];
