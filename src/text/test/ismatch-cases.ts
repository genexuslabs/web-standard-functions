export const testCases: Array<[
  string,
  string | RegExp,
  boolean,
  number,
  string
]> = [
  ["Peñarol Campeón del Siglo XX", "Siglo", true, 0, ""],
  ["Peñarol Campeón del Siglo XX", /Siglo/, true, 0, ""],
  ["Peñarol Campeón del Siglo XX", "$Peñarol", false, 0, ""],
  ["Peñarol Campeón del Siglo XX", /$Peñarol/, false, 0, ""],
  ["Peñarol Campeón del Siglo XX", "^Peñarol", true, 0, ""],
  ["Peñarol Campeón del Siglo XX", /^Peñarol/, true, 0, ""],
  ["Peñarol Campeón del Siglo XX", "Bolso", false, 0, ""],
  ["Peñarol Campeón del Siglo XX", /Bolso/, false, 0, ""],
  [
    "john.doe12@mail.com.uk",
    /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
    true,
    0,
    ""
  ],
  [
    "john.doe12@mail.com.uk",
    "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*",
    true,
    0,
    ""
  ],
  [
    "john.doe@mail.",
    /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
    false,
    0,
    ""
  ],
  [
    "john.doe@mail.",
    "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*",
    false,
    0,
    ""
  ]
];
