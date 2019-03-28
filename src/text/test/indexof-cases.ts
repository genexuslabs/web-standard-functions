export const testCases: Array<[string, string, number, number]> = [
  ["Peñarol Campeón del Siglo XX", "Peñarol", 1, 1],
  ["Peñarol Campeón del Siglo XX 😀", " del", 16, 16],
  ["Texto 😀 Texto 😀 Texto", "😀", 1, 7],
  ["Texto 😀 Texto 😀 Texto", "😀", undefined, 7],
  ["Texto 😀 Texto 😀 Texto", "😀", 5, 7],
  ["Texto 😀 Texto 😀 Texto", "😀", 9, 16]
];
