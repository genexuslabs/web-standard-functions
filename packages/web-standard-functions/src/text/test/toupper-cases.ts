export const testCases: Array<[string, string]> = [
  ["Textoáéíóú", "TEXTOÁÉÍÓÚ"],
  ["😀áéí😀óú😀", "😀ÁÉÍ😀ÓÚ😀"],
  ["Peñarol Campeón del Siglo XX", "PEÑAROL CAMPEÓN DEL SIGLO XX"],
  ["peñarol campeón del siglo xx", "PEÑAROL CAMPEÓN DEL SIGLO XX"]
];
