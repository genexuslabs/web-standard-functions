import { add } from "../../math/add";
import { divide } from "../../math/divide";
import { mod } from "../../math/mod";
import { multiply } from "../../math/multiply";
import { random } from "../../math/random";
import { subtract } from "../../math/subtract";
import { fromString } from "../../numeric/fromString";
import { GxBigNumber } from "../gxbignumber";

export const testCasesDivide = [
  // GxBigDecimal / GxBigDecimal
  // **a=b**//
  ["123.123456789123456789", "123.123456789123456789", "1"],

  // **a<b*//
  ["123.123456789123456789", "246.123456789123456789", "0.500250802566187816"],
  [
    "123.123456789123456789",
    "246.1234567891234567891234567",
    "0.500250802566187816"
  ],
  [
    "123.1234567891234567891234567",
    "246.123456789123456789",
    "0.500250802566187816"
  ],

  // **a>b**//
  ["246.123456789123456789", "123.123456789123456789", "1.998997292698377497"],
  [
    "246.1234567891234567891234567",
    "123.123456789123456789",
    "1.998997292698377497"
  ],
  [
    "246.123456789123456789",
    "123.1234567891234567891234567",
    "1.998997292698377497"
  ],

  // GxBigDecimal / decimal
  // **a<b**//
  ["123.123456789123456789", "246.12345", "0.500250816365216141"],
  ["123.123456789123456789", "246.12345678", "0.500250802584731423"],
  ["123.1234567891234567891234567", "246.12", "0.500257828657254415"],

  // **a>b**//
  ["246.123456789123456789", "123.12345678912", "1.99899729269843362"],
  ["246.1234567891234567891234567", "123.1234", "1.998998214710797921"],
  ["246.123456789123456789", "123.123456789123", "1.998997292698384913"],

  // GxBigDecimal/ int
  // **a<b**//
  ["123.123456789123456789", "246", "0.500501856866355515"],
  ["123.1234567891234567891234567", "246", "0.500501856866355515"],
  ["123.123456789123456789", "2463456687587", "0.000000000049979955"],

  // **a>b**//
  ["246.123456789123456789", "123", "2.00100371373271103"],
  ["246.1234567891234567891234567", "123", "2.00100371373271103"],
  ["246.123456789123456789", "1", "246.123456789123456789"],

  // decimal / GxBigDecimal
  // **a<b**//
  ["123.12345678912", "246.123456789123456789", "0.500250802566173771"],
  ["123.1234", "246.1234567891234567891234567", "0.500250571831888056"],
  ["123.123456789123", "246.123456789123456789", "0.50025080256618596"],

  // **a>b**//
  ["246.12345", "123.123456789123456789", "1.99899723755759739"],
  ["246.12345678", "123.123456789123456789", "1.998997292624277427"],
  ["246.12", "123.1234567891234567891234567", "1.998969216901826582"],

  // int / GxBigDecimal
  // **a<b**//
  ["123", "246.123456789123456789", "0.499749197433812183"],
  ["123", "246.1234567891234567891234567", "0.499749197433812183"],
  ["1", "246.123456789123456789", "0.004063001605152944"],
  ["1", "246568349234673242.123", "0.000000000000000004"],
  ["1", "2465683492346732423.12", "0"],

  // **a>b**//
  ["246", "123.123456789123456789", "1.997994585396754994"],
  ["246", "123.1234567891234567891234567", "1.997994585396754994"],
  ["2463456687587", "123.123456789123456789", "20008020825.846550655641662538"],

  ["-123.123456789123456789", "246", "-0.500501856866355515"],
  ["-246", "123.1234567891234567891234567", "-1.997994585396754994"],
  ["123.1234567891234567891234567", "-2463456687587", "-0.000000000049979955"],
  ["-123.1234567891234567891234567", "-2463456687587", "0.000000000049979955"],

  // int / int
  // **a<b**//
  ["1", "243", "0.004115226337448559"],
  // **a>b**//
  ["243", "1", "243"],

  //decimal / decimal
  // **a<b**//
  ["1.1", "2.25", "0.488888888888888888"],
  ["1.123456789123456", "2.25", "0.499314128499313777"],
  ["1.12345678912345", "2.25123456789123", "0.499040306659741471"],
  ["1.123456789123456", "2.251234567891234", "0.499040306659743249"],
  ["1.12", "2.251234567891234", "0.497504798466701408"],
  ["1.123456789123456", "2.2512", "0.499047969582203269"],
  ["123.123456789123456", "24.251234567891234", "5.076997480043328601"],
  ["0.1", "2.25", "0.044444444444444444"],
  ["0.123456789123456", "24.251234567891234", "0.005090742443558459"],

  // **a>b**//
  ["2.25", "1.1", "2.045454545454545454"],
  ["0.25", "0.1", "2.5"],

  ["13", "0.1", "130"],

  //BigInt
  ["222222222222222222", "2", "111111111111111111"],
  ["111111111111111111", "2", "55555555555555555.5"],
  ["222222222222222222", "100000000000000000", "2.22222222222222222"]
];

export const testCasesAdd = [
  //GxBigDecimal + GxBigDecimal
  [
    "123.123456789123456789",
    "123.123456789123456789",
    "246.246913578246913578"
  ],
  [
    "123.123456789123456789",
    "246.123456789123456789",
    "369.246913578246913578"
  ],
  [
    "123.123456789123456789",
    "246.1234567891234567891234567",
    "369.2469135782469135781234567"
  ],
  [
    "123.1234567891234567891234567",
    "246.123456789123456789",
    "369.2469135782469135781234567"
  ],

  //GxBigDecimal + decimal
  ["123.123456789123456789", "246.12345", "369.246906789123456789"],
  ["123.123456789123456789", "246.12345678", "369.246913569123456789"],
  ["123.1234567891234567891234567", "246.12", "369.2434567891234567891234567"],

  //GxBigDecimal + int
  ["123.123456789123456789", "246", "369.123456789123456789"],
  ["123.1234567891234567891234567", "246", "369.1234567891234567891234567"],
  [
    "123.123456789123456789",
    "2463456687587 ",
    "2463456687710.123456789123456789"
  ],

  //-GxBigDecimal + ...
  ["-123.123456789123456789", "246", "122.876543210876543211"],
  ["-246", "123.1234567891234567891234567", "-122.8765432108765432108765433"],
  [
    "123.123456789123456789",
    "-2463456687587",
    "-2463456687463.876543210876543211"
  ],
  [
    "-123.123456789123456789",
    "-2463456687587",
    "-2463456687710.123456789123456789"
  ],

  //BigInt
  ["111111111111111111", "111111111111111111", "222222222222222222"],
  ["111111111111111111", "111", "111111111111111222"]
];

export const testCasesSubtract = [
  //GxBigDecimal - GxBigDecimal
  //**a=b**//
  ["123.123456789123456789", "123.123456789123456789", "0"],

  //**a<b*//
  ["123.123456789123456789", "246.123456789123456789", "-123"],
  [
    "123.123456789123456789",
    "246.1234567891234567891234567",
    "-123.0000000000000000001234567"
  ],
  [
    "123.1234567891234567891234567",
    "246.123456789123456789",
    "-122.9999999999999999998765433"
  ],

  //**a>b**//
  ["246.123456789123456789", "123.123456789123456789", "123"],
  [
    "246.1234567891234567891234567",
    "123.123456789123456789",
    "123.0000000000000000001234567"
  ],
  [
    "246.123456789123456789",
    "123.1234567891234567891234567",
    "122.9999999999999999998765433"
  ],

  //GxBigDecimal - decimal
  //**a<b**//
  ["123.123456789123456789", "246.12345", "-122.999993210876543211"],
  ["123.123456789123456789", "246.12345678", "-122.999999990876543211"],
  ["123.1234567891234567891234567", "246.12", "-122.9965432108765432108765433"],

  //**a>b**//
  ["246.123456789123456789", "123.12345678912", "123.000000000003456789"],
  [
    "246.1234567891234567891234567",
    "123.1234",
    "123.0000567891234567891234567"
  ],
  ["246.123456789123456789", "123.123456789123", "123.000000000000456789"],

  //GxBigDecimal - int
  //**a<b**//
  ["123.123456789123456789", "246", "-122.876543210876543211"],
  ["123.1234567891234567891234567", "246", "-122.8765432108765432108765433"],
  [
    "123.123456789123456789",
    "2463456687587",
    "-2463456687463.876543210876543211"
  ],

  //**a>b**//
  ["246.123456789123456789", "123", "123.123456789123456789"],
  ["246.1234567891234567891234567", "123", "123.1234567891234567891234567"],
  ["246.123456789123456789", "1", "245.123456789123456789"],

  //decimal - GxBigDecimal
  //**a<b**//
  ["123.12345678912", "246.123456789123456789", "-123.000000000003456789"],
  [
    "123.1234",
    "246.1234567891234567891234567",
    "-123.0000567891234567891234567"
  ],
  ["123.123456789123", "246.123456789123456789", "-123.000000000000456789"],

  //**a>b**//
  ["246.12345", "123.123456789123456789", "122.999993210876543211"],
  ["246.12345678", "123.123456789123456789", "122.999999990876543211"],
  ["246.12", "123.1234567891234567891234567", "122.9965432108765432108765433"],

  //int - GxBigDecimal
  //**a<b**//
  ["123", "246.123456789123456789", "-123.123456789123456789"],
  ["123", "246.1234567891234567891234567", "-123.1234567891234567891234567"],
  ["1", "246.123456789123456789", "-245.123456789123456789"],
  ["1", "246568349234673242.123", "-246568349234673241.123"],
  ["1", "2465683492346732423.12", "-2465683492346732422.12"],

  //**a>b**//
  ["246", "123.123456789123456789", "122.876543210876543211"],
  ["246", "123.1234567891234567891234567", "122.8765432108765432108765433"],
  [
    "2463456687587",
    "123.123456789123456789",
    "2463456687463.876543210876543211"
  ],

  ["-123.123456789123456789", "246 ", "-369.123456789123456789"],
  ["-246", "123.1234567891234567891234567", "-369.1234567891234567891234567"],
  [
    "123.123456789123456789",
    "-2463456687587",
    "2463456687710.123456789123456789"
  ],
  [
    "-123.123456789123456789",
    "-2463456687587",
    "2463456687463.876543210876543211"
  ],
  //BigInt
  ["111111111111111111", "111111111111111111", "0"],
  ["222222222222222222", "111111111111111111", "111111111111111111"],
  ["111111111111111111", "111", "111111111111111000"]
];

export const testCasesMultiply = [
  //GxBigDecimal * GxBigDecimal
  [
    "123.123456789123456789",
    "123.123456789123456789",
    "15159.385611703151043772515622620750190521"
  ],
  [
    "123.123456789123456789",
    "246.123456789123456789",
    "30303.570796765336228819515622620750190521"
  ],
  [
    "123.123456789123456789",
    "246.1234567891234567891234567",
    "30303.5707967653362288347160382885279683887625363"
  ],
  [
    "123.1234567891234567891234567",
    "246.123456789123456789",
    "30303.5707967653362288499012123885279683887625363"
  ],

  //GxBigDecimal * decimal
  ["123.123456789123456789", "246.12345", "30303.56996086498766083460205"],
  [
    "123.123456789123456789",
    "246.12345678",
    "30303.57079564202469109163907942"
  ],
  [
    "123.1234567891234567891234567",
    "246.12",
    "30303.145184939065184939065163004"
  ],

  //GxBigDecimal * int
  ["123.123456789123456789", "246", "30288.370370124370370094"],
  ["123.1234567891234567891234567", "246", "30288.3703701243703701243703482"],
  [
    "123.123456789123456789",
    "2463456687587 ",
    "303309303025995.197630633067178143"
  ],

  //-GxBigDecimal * ...
  ["-123.123456789123456789", "246", "-30288.370370124370370094"],
  ["-246", "123.1234567891234567891234567", "-30288.3703701243703701243703482"],
  [
    "123.123456789123456789",
    "-2463456687587",
    "-303309303025995.197630633067178143"
  ],
  [
    "-123.123456789123456789",
    "-2463456687587",
    "303309303025995.197630633067178143"
  ],
  //BigInt
  [
    "111111111111111111",
    "111111111111111111",
    "12345679012345678987654320987654321"
  ],
  [
    "222222222222222222",
    "111111111111111111",
    "24691358024691357975308641975308642"
  ],
  ["111111111111111111", "111", "12333333333333333321"],
  ["111111111111111111", "2", "222222222222222222"]
];

export const testConvertToDecimal = [
  ["123.123456789123456789", "123.12345678912"]
];

export const testConvertToInt = [["123.123456789123456789", "123"]];

export const testConvertToBigDecimal = [
  ["123.123456789123456789", "123.123456789123456789"]
];

export const testCasesPow = [
  //a ^ b
  ["123.123456789123456789", "123.123456789123456789", "2.3441488366516199"]
];

describe("divide operation", () => {
  for (const t of testCasesDivide) {
    it(`should divide ${t[0]} / ${t[1]} to equal ${t[2]}`, () => {
      expect(divide(t[0], t[1]).toString()).toBe(t[2]);
    });
  }
});

describe("add operation", () => {
  for (const t of testCasesAdd) {
    it(`should add ${t[0]} + ${t[1]} to equal ${t[2]}`, () => {
      expect(add(t[0], t[1]).toString()).toBe(t[2]);
    });
  }
});

describe("subtract operation", () => {
  for (const t of testCasesSubtract) {
    it(`should subtract ${t[0]} - ${t[1]} to equal ${t[2]}`, () => {
      expect(subtract(t[0], t[1]).toString()).toBe(t[2]);
    });
  }
});

describe("multiply operation", () => {
  for (const t of testCasesMultiply) {
    it(`should multiply ${t[0]} * ${t[1]} to equal ${t[2]}`, () => {
      expect(multiply(t[0], t[1]).toString()).toBe(t[2]);
    });
  }
});

describe("convertToDecimal operation", () => {
  for (const t of testConvertToDecimal) {
    it(`should convertToDecimal ${t[0]} to equal ${t[1]}`, () => {
      expect(GxBigNumber.convertToDecimal(t[0]).toString()).toBe(t[1]);
    });
  }
});

describe("convertToInt operation", () => {
  for (const t of testConvertToInt) {
    it(`should convertToInt ${t[0]} to equal ${t[1]}`, () => {
      expect(GxBigNumber.convertToInt(t[0]).toString()).toBe(t[1]);
    });
  }
});

describe("convertToBigDecimal operation", () => {
  for (const t of testConvertToBigDecimal) {
    it(`should convertToBigDecimal ${t[0]} to equal ${t[1]}`, () => {
      expect(GxBigNumber.convertToBigDecimal(t[0]).toString()).toBe(t[1]);
    });
  }
});

export const testToString: Array<[string, number, number, string]> = [
  ["123.123456789123456789", 22, 17, " 123.12345678912345678"],
  ["123.123456789123456789", 25, 17, "    123.12345678912345678"],
  ["123.123456789123456789", 28, 20, "    123.12345678912345678900"],
  ["0.123456789123456789", 28, 20, "      0.12345678912345678900"],
  ["-123.123456789123456789", 22, 17, "-123.12345678912345678"],
  ["-123.123456789123456789", 25, 17, "   -123.12345678912345678"],
  ["-123.123456789123456789", 28, 20, "   -123.12345678912345678900"],
  ["-0.123456789123456789", 28, 20, "     -0.12345678912345678900"],
  ["123.123456789123456789", 18, 17, "123.12345678912345678"],
  ["111111111111111111", 18, 2, "111111111111111111.00"],
  ["11111111111111", 18, 0, "    11111111111111"],
  ["1111111111111111", 18, 0, "  1111111111111111"]
];

describe("toString function", () => {
  for (const t of testToString) {
    it(`should toString ${t[0]} to equal ${t[3]}`, () => {
      expect(GxBigNumber.toStringGx(new GxBigNumber(t[0]), t[1], t[2])).toBe(
        t[3]
      );
    });
  }
});

export const testMod: Array<[string, string, number]> = [
  ["123.123456789123456789", "123.12345678912345678", 0],
  ["123.123456789123456789", "0.123456789123456789", 0],
  ["323.123456789123456789", "223.12345678912345678", 100]
];

describe("mod function", () => {
  for (const t of testMod) {
    it(`should mod ${t[0]} to equal ${t[2]}`, () => {
      expect(mod(new GxBigNumber(t[0]), new GxBigNumber(t[1]))).toBe(t[2]);
    });
  }
});

describe("random function", () => {
  it("should return a random number", () => {
    let number = new GxBigNumber(random());
    expect(number).not.toBeNull();
    expect(number).not.toBeUndefined();
  });
});

export const testInteger: Array<[string, number]> = [
  ["123.123456789123456789", 123],
  ["323.123456789123456789", 323],
  ["0.123456789123456789", 0],
  ["-123.123456789123456789", -123],
  ["123123456789123.456789", 123123456789123],
  ["1231234567891234.56789", 1231234567891234],
  ["12312345678912345.6789", 12312345678912345],
  ["123123456789123456.789", 123123456789123456],
  ["1231234567891234567.89", 1231234567891234567]
];

describe("Integer function", () => {
  for (const t of testInteger) {
    it(`should integer ${t[0]} to equal ${t[1]}`, () => {
      expect(GxBigNumber.convertToInt(new GxBigNumber(t[0]))).toBe(t[1]);
    });
  }
});

export const testFromString: Array<[string, string]> = [
  ["123.123456789123456789", "123.123456789123456789"],
  ["323.123456789123456789", "323.123456789123456789"],
  ["0.123456789123456789", "0.123456789123456789"],
  ["-123.123456789123456789", "-123.123456789123456789"],
  ["111111111111111111", "111111111111111111"]
];
//aca el fromString me da mal, pero pienso es el tema de que pierde presicion como habiamos comentado, revisar en la kb si pasa
describe("FromString function", () => {
  for (const t of testFromString) {
    it(`should fromString ${t[0]} to equal ${t[1]}`, () => {
      expect(fromString(0, t[0]).toString()).toBe(t[1]);
    });
  }
});

export const testIsEmpty: Array<[string, boolean]> = [
  ["123.123456789123456789", false],
  ["323.123456789123456789", false],
  ["0.123456789123456789", false],
  ["-123.123456789123456789", false],
  ["0", true]
];

describe("IsEmpty function", () => {
  for (const t of testIsEmpty) {
    it(`isEmpty(${t[0]}) should be equal to ${t[1]}`, () => {
      expect(GxBigNumber.isEmpty(new GxBigNumber(t[0]))).toBe(t[1]);
    });
  }
});

export const testRound: Array<[string, number, string]> = [
  ["123.123456789123456789", 5, "123.12346"],
  ["323.123456789123456789", 2, "323.12"],
  ["0.123456789123456789", 8, "0.12345679"],
  ["123.123456789123456789", 17, "123.12345678912345679"],
  ["-123.123456789123456789", 17, "-123.12345678912345679"],
  ["-123.123456789123456781", 17, "-123.12345678912345678"],
  ["123.123456789123456789", 0, "123"],
  ["123.123456789123456789", -1, "120"],
  ["127.123456789123456789", -1, "130"],
  ["127.123456789123456789", -2, "100"],
  ["177.123456789123456789", -2, "200"],
  ["-117.123456789123456789", -2, "-100"],
  ["-177.123456789123456789", -2, "-200"],
  ["123456789123456788.9", 0, "123456789123456789"]
];

describe("Round function", () => {
  for (const t of testRound) {
    it(`Round(${t[0]},${t[1]}) should be equal to ${t[2]}`, () => {
      expect(GxBigNumber.round(new GxBigNumber(t[0]), t[1]).toString()).toBe(
        t[2]
      );
    });
  }
});

export const testRoundToEven: Array<[string, number, string]> = [
  ["123.123456789123456789", 5, "123.12346"],
  ["323.123456789123456789", 2, "323.12"],
  ["0.123456789123456789", 8, "0.12345679"],
  ["123.123456789123456789", 17, "123.12345678912345679"],
  ["-123.123456789123456789", 17, "-123.12345678912345679"],
  ["-123.123456789123456781", 17, "-123.12345678912345678"],
  ["123.123456789123456789", 0, "123"],
  ["123.123456789123456789", -1, "120"],
  ["127.123456789123456789", -1, "130"],
  ["127.123456789123456789", -2, "100"],
  ["177.123456789123456789", -2, "200"],
  ["-117.123456789123456789", -2, "-100"],
  ["-177.123456789123456789", -2, "-200"]
];

describe("RoundToEven function", () => {
  for (const t of testRoundToEven) {
    it(`RoundToEven(${t[0]},${t[1]}) should be equal to ${t[2]}`, () => {
      expect(
        GxBigNumber.roundToEven(new GxBigNumber(t[0]), t[1]).toString()
      ).toBe(t[2]);
    });
  }
});

const testStr1: Array<[string, string]> = [
  ["123.123456789123456789", "       123"],
  ["-123.123456789123456789", "      -123"],
  ["0.123456789123456789", "         0"]
];

const testStr2: Array<[string, number, number, string]> = [
  ["123.123456789123456789", 10, 2, "    123.12"],
  ["-1.123456789123456789", 10, 2, "     -1.12"],
  ["-1.123456789123456789", 2, 1, "-1"],
  ["-1.25456789123456789", 5, 1, " -1.3"],
  ["-1.25456789123456789", 5, 2, "-1.25"],
  ["123456.125456789123456789", 5, 2, "*****"],
  ["1234.125456789123456789", 5, 1, " 1234"],
  ["1234.123456789123456789", 22, 17, "1234.12345678912345679"],
  ["1234.123456789123456789", 24, 17, "  1234.12345678912345679"],
  ["1234.123456789123456789", 25, 18, "  1234.123456789123456789"],
  ["1234.123456789123456789", 26, 19, "   1234.123456789123456789"]
];

describe("Str function", () => {
  for (const t of testStr1) {
    it(`str(${t[0]}) should be equal to ${t[1]}`, () => {
      expect(GxBigNumber.str(new GxBigNumber(t[0])).toString()).toBe(t[1]);
    });
  }
  for (const t of testStr2) {
    it(`str(${t[0]}) should be equal to ${t[3]}`, () => {
      expect(GxBigNumber.str(new GxBigNumber(t[0]), t[1], t[2])).toBe(t[3]);
    });
  }
});

const testToFormattedString: Array<[string, string, string]> = [
  [
    "123.123456789123456789",
    "999.999999999999999999",
    "123.123456789123456789"
  ],
  [
    "123.123456789123456789",
    "9999.999999999999999999",
    "0123.123456789123456789"
  ],
  ["123.123456789123456789", "99", "123"],
  [
    "123.123456789123456789",
    "999.9999999999999999999",
    "123.1234567891234567890"
  ],
  [
    "123.123456789123456789",
    "999.ZZZZZZZZZZZZZZZZZZ9",
    "123.1234567891234567890"
  ],
  [
    "123.123456789123456789",
    "999.999999999999999999Z",
    "123.1234567891234567890"
  ],
  [
    "123456.123456789123456789",
    "999,999.999999999999999999",
    "123,456.123456789123456789"
  ],
  ["123456.123456789123456789", "999,999.99", "123,456.123456789123456789"],
  ["123456.123456789123456789", "ZZ999,999.99", "  123,456.123456789123456789"],
  [
    "-123456.123456789123456789",
    "(999,999.99)",
    "(123,456.123456789123456789)"
  ],
  ["123456.123456789123456789", "(999,999.99)", " 123,456.123456789123456789"],
  [
    "-123456.123456789123456789",
    "DB999,999.99",
    "-DB123,456.123456789123456789"
  ],
  ["123456.123456789123456789", "DB999,999.99", "CR123,456.123456789123456789"],
  ["123456.123456789123456789", "+999,999.99", "+123,456.123456789123456789"],
  ["-123456.123456789123456789", "+999,999.99", "-123,456.123456789123456789"],
  ["0.123456789123456789", "ZZ9,999.99", "  0,000.123456789123456789"],
  ["1.123456789123456789", "ZZZZZZ9.99", "      1.123456789123456789"]
];

describe("toFormattedString", () => {
  for (const t of testToFormattedString) {
    it(`toFormattedString(${t[0]},${t[1]}) should be equal to ${t[2]}`, () => {
      expect(GxBigNumber.toFormattedString(new GxBigNumber(t[0]), t[1])).toBe(
        t[2]
      );
    });
  }
});

const testTruncate: Array<[string, number, string]> = [
  ["123.123456789123456789", 0, "123"],
  ["0.123456789123456789", 0, "0"],
  ["1.123456789123456789", 0, "1"],
  ["-123.123456789123456789", 0, "-123"],
  ["123.123456789123456789", 4, "123.1234"],
  ["0.123456789123456789", 2, "0.12"],
  ["1.123456789123456789", 6, "1.123456"],
  ["-123.123456789123456789", 3, "-123.123"],
  ["123.123456789123456789", 17, "123.12345678912345678"]
];

describe("Truncate", () => {
  for (const t of testTruncate) {
    it(`truncate(${t[0]}, ${t[1]}) should be equal to ${t[2]}`, () => {
      expect(GxBigNumber.truncate(new GxBigNumber(t[0]), t[1]).toString()).toBe(
        t[2].toString()
      );
    });
  }
});

export const testCompare: Array<[string, string, number]> = [
  ["123.123456789123456789", "123.123456789123456789", 0],
  ["12.3123456789123456789", "123.123456789123456789", -1],
  ["123.123456789123456789", "12.3123456789123456789", 1],
  ["323.123456789123456789", "123.123456789123456789", 1],
  ["0.123456789123456789", "323.123456789123456789", -1],
  ["-123.123456789123456789", "123.123456789123456789", -1],
  ["123.123456789123456789", "-123.123456789123456789", 1],
  ["0", "0", 0],
  ["123123456789123456789", "123123456789123456789", 0],
  ["323123456789123456789", "123123456789123456789", 1],
  ["323123456789123456789", "123123456789123456", 1],
  ["3231234567891234", "123123456789123456789", -1],
  ["-323123456789123456789", "123123456789123456789", -1],
  ["123.123456789123456789", "123.1234567891234567890000", 0],
  ["123.1234567891234567890000", "123.123456789123456789", 0],
  ["123.123456789123456789000", "12.3123456789123456789", 1],
  ["123.123456789123456789", "12.31234567891234567890000", 1],
  ["-123.12345678912345678900000", "123.123456789123456789", -1],
  ["123.1234567891234567890000", "-123.123456789123456789", 1],
  ["-123.123456789123456789", "123.1234567891234567890000", -1],
  ["123.123456789123456789", "-123.123456789123456789000", 1],
  ["123000.123456789123456789", "123.123456789123456789", 1],
  ["123.123456789123456789", "123000.123456789123456789", -1],
  ["123456789.123456789123456789", "123456789.123456789123456789", 0],
  [
    "123456789123456789.123456789123456789",
    "123456789123456789.123456789123456789",
    0
  ],
  [
    "123456789123456000.123456789123456789",
    "123456789123456789.123456789123456789",
    -1
  ],
  [
    "123456789123456789.123456789123456789",
    "123456789123456000.123456789123456789",
    1
  ],
  ["12312345678912345678900", "12312345678912345678900", 0],
  ["123.1234567891234567890", "123.12345678912345678900", 0],
  ["123.12345678912345678900", "123.1234567891234567890", 0]
];

describe("Compare", () => {
  for (const t of testCompare) {
    it(`compare(${t[0]}, ${t[1]}) should be equal to ${t[2]}`, () => {
      expect(GxBigNumber.compare(t[0], t[1])).toBe(t[2]);
    });
  }
});
