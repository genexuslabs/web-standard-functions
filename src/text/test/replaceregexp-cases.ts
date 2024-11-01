export const testCases: Array<[
  string,
  string | RegExp,
  string,
  string,
  number,
  string
]> = [
  ["Textoáéíóú", "áéíóú", "aeiou", "Textoaeiou", 0, ""],
  ["😀áéí😀óú😀", "😀", "X", "XáéíXóúX", 0, ""],
  [
    "Peñarol Campeón del Siglo XX",
    "XX",
    "20",
    "Peñarol Campeón del Siglo 20",
    0,
    ""
  ],
  [
    "Peñarol Campeón del Siglo XX",
    " del Siglo XX",
    "",
    "Peñarol Campeón",
    0,
    ""
  ],
  [
    "Texto Peñarol Campeón del Siglo XX Texto",
    "^Texto ",
    "",
    "Peñarol Campeón del Siglo XX Texto",
    0,
    ""
  ],
  ["Peñarol Campeón del Siglo XX", "e", "", "Pñarol Campón dl Siglo XX", 0, ""],
  [
    "texto",
    "/[abc/g",
    "nuevo",
    "",
    1,
    "Invalid regular expression: //[abc/g/g: Unterminated character class"
  ],
  [
    "11/12/2003 extra 8/12/2003",
    "\\b(\\d{1,2})\\/(\\d{1,2})\\/(\\d{2,4})\\b",
    "$2-$1-$3",
    "12-11-2003 extra 12-8-2003",
    0,
    ""
  ],
  [
    "11/12/2003 extra 8/12/2003",
    "\\b(\\d{1,2})\\/(\\d{1,2})\\/(\\d{2,4})\\b",
    "<<DATE>>",
    "<<DATE>> extra <<DATE>>",
    0,
    ""
  ],
  [
    'En este string debe encontrarse esto a continuacion y ser sustituído GeneXusforSmartDevicesActionswithMultipleSelection12124fdgrradfgr123.mp4"',
    'GeneXusforSmartDevicesActionswithMultipleSelection[0-9a-zA-Z_]*.mp4"',
    'GeneXusforSmartDevicesActionswithMultipleSelection.mp4"',
    'En este string debe encontrarse esto a continuacion y ser sustituído GeneXusforSmartDevicesActionswithMultipleSelection.mp4"',
    0,
    ""
  ],
  [
    '"ProcessImageUrl": "file:/e:/Modelos/Test/JavaMySQL/web/PublicTempStorage/multimedia/imPendiente_c18e07a55d5d45788e4e4252a682b57a.png"',
    'imPendiente_[0-9a-zA-Z_]*.png"',
    'imPendiente_<aca va un GUID>.png"',
    '"ProcessImageUrl": "file:/e:/Modelos/Test/JavaMySQL/web/PublicTempStorage/multimedia/imPendiente_<aca va un GUID>.png"',
    0,
    ""
  ]
];

export const testCases1: Array<[
  string,
  string | RegExp,
  string,
  string,
  number,
  string
]> = [
  ["texto", "/[abc/g", "nuevo", "", 1, "Invalid regular expression: //[abc/g/"]
];
