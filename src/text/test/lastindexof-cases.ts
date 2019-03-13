// charAt test cases
export const testCases: Array<[string, string, number, number]> = [
  ["Peñarol Campeón del Siglo XX", "Peñarol", 1, 1],
  ["Peñarol Campeón del Siglo XX 😀", " del", 16, 16],
  ["Texto 😀 Texto 😀 Texto", "😀", 10, 7],
  ["Texto 😀 Texto 😀 Texto", "😀", 6, 0]
];
