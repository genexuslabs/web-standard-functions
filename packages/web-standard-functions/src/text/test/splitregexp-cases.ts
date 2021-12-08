export const testCases: Array<[string, string, string[]]> = [
  [
    "PeñarolAACampeónBBdelCCSigloDDXX",
    "BB",
    ["PeñarolAACampeón", "delCCSigloDDXX"]
  ],
  [
    "PeñarolAACampeónBBdelCCSigloDDXX",
    "/",
    ["PeñarolAACampeónBBdelCCSigloDDXX"]
  ],
  ["Peñarol", "", ["P", "e", "ñ", "a", "r", "o", "l"]],
  [
    "Peñarol Campeón del Siglo XX",
    " ",
    ["Peñarol", "Campeón", "del", "Siglo", "XX"]
  ]
];
