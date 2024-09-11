import { GxBigNumber } from "../gxbignumber";
import { GxExpression } from "../gxexpression";
import { add } from "../../math/add";
import { multiply } from "../../math/multiply";
import { divide } from "../../math/divide";
import { roundBigNumber } from "../../bigNumber/round";
import { integerBigNumber } from "../../bigNumber/integer";
import { absBigNumber } from "../../bigNumber/abs";
import { subtract } from "../../math/subtract";
import { iif } from "../../misc/iif";
import { fracBigNumber } from "../../bigNumber/frac";

export const testExpressionErrores1: Array<[string, string, string, any]> = [
  [
    "a+b",
    "1",
    "{id:1,name:'name1'}",
    "Error occurred during execution (EVALUATION_ERROR)"
  ]
];

export const testExpressionErrores2: Array<[string, number, number, string]> = [
  // ERROR CODE 3   Expression to be evaluated is not well formed (EXPRESSION_ERROR)
  [
    "",
    1,
    2,
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a+b",
    1,
    2,
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "a+b)",
    1,
    2,
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a)+(b",
    1,
    2,
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a)+b)",
    1,
    2,
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a+(b)",
    1,
    2,
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "a)+(b)",
    1,
    2,
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "a)+(b",
    1,
    2,
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  // ERROR 4 Error occurred during execution (EVALUATION_ERROR)
  ["a+b+C", 1, 2, "Error occurred during execution (EVALUATION_ERROR)"],
  [
    "SELECT * FROM usuarios",
    1,
    2,
    "Error occurred during execution (EVALUATION_ERROR)"
  ],
  ["a/b", 1, 0, "Division by zero"],
  [
    "SELECT * FROM usuarios WHERE usuarioId=iif(1=1,4,9)",
    1,
    2,
    "Error occurred during execution (EVALUATION_ERROR)"
  ]
];

export const testExpressionErrorCode1: Array<[string, string, string, any]> = [
  ["a+b", "1", "{id:1,name:'name1'}", 4]
];

export const testExpressionErrorCode2: Array<[
  string,
  number,
  number,
  number
]> = [
  // ERROR CODE 3   Expression to be evaluated is not well formed (EXPRESSION_ERROR)
  ["", 1, 2, 3],
  ["(a+b", 1, 2, 3],
  ["a+b)", 1, 2, 3],
  ["(a)+(b", 1, 2, 3],
  ["(a)+b)", 1, 2, 3],
  ["(a+(b)", 1, 2, 3],
  ["a)+(b)", 1, 2, 3],
  ["a)+(b", 1, 2, 3],

  // ERROR 4 Error occurred during execution (EVALUATION_ERROR)
  ["a+b+C", 1, 2, 4],
  ["SELECT * FROM usuarios", 1, 2, 4],
  ["a/b", 1, 0, 4]
];

// a b
export const testExpression1: Array<[string, number, number, string]> = [
  ["a+b", 1, 2, add(1, 2).toString()],
  ["(a+b)", 1, 2, add(1, 2).toString()],
  ["(a)+(b)", 1, 2, add(1, 2).toString()],
  ["(a)+b", 1, 2, add(1, 2).toString()],
  ["a+(b)", 1, 2, add(1, 2).toString()],
  ["a++b", 1, 2, "3"],
  ["+-b", 1, 2, "-2"],
  ["++b", 1, 2, "2"],
  ["--b", 1, 2, "2"],
  ["a--b", 1, 2, "3"],
  ["a+-b", 1, 2, "-1"],
  ["-+b", 1, 2, "-2"],
  ["a-+b", 1, 2, "-1"],
  ["a+cos(0)", 1, 2, add(1, Math.cos(0)).toString()],
  ["a+b*1", 1, 2, add(1, multiply(2, 1)).toString()],
  ["(a*b)/100", 100, 2, divide(multiply(100, 2), 100).toString()],
  [
    "50*cos(a)*sin(b)",
    0,
    1,
    multiply(multiply(50, Math.cos(0)), Math.sin(1)).toString()
  ],
  ["cos(a)*sin(b)", 0, 1, multiply(Math.cos(0), Math.sin(1)).toString()],
  ["50*cos(a)*b", 0, 1, multiply(multiply(50, Math.cos(0)), 1).toString()],
  ["cos(sin(a))*b", 0, 1, multiply(Math.cos(Math.sin(0)), 1).toString()],
  ["a*sin(b)", 0, 2, multiply(0, Math.sin(2)).toString()]
];

// a
export const testExpression2: Array<[string, number, string]> = [
  ["round(a,0)", 1.5, roundBigNumber(1.5, 0).toString()],
  ["Round(a,0)", 1.5, roundBigNumber(1.5, 0).toString()],
  ["ROUND(a,0)", 1.5, roundBigNumber(1.5, 0).toString()],
  ["cos(a)", 60, Math.cos(60).toString()], // Radian
  ["Cos(a)", 60, Math.cos(60).toString()], // Radian
  ["COS(a)", 60, Math.cos(60).toString()], // Radian
  ["cos(a)", 90, Math.cos(90).toString()],
  ["round(a,0)+1", 1.5, add(roundBigNumber(1.5, 0), 1).toString()],
  [
    "round(a,0)+cos(60)",
    1.5,
    add(roundBigNumber(1.5, 0), Math.cos(60)).toString()
  ],
  ["exp(a)", 0, Math.exp(0).toString()],
  ["ln(exp(a))", 0, "0"],
  ["a*pi", 2, multiply(2, Math.PI).toString()],
  ["a*pi+a*pi", 2, add(multiply(2, Math.PI), multiply(2, Math.PI)).toString()],
  [
    "integer(a*pi+a*pi)",
    2,
    integerBigNumber(add(multiply(2, Math.PI), multiply(2, Math.PI))).toString()
  ],
  ["a*-2", 3, multiply(3, -2).toString()],
  ["-a*-2", 3, multiply(-3, -2).toString()],
  ["-(a)", 3, (-3).toString()],
  ["-a*2", 3, multiply(-3, 2).toString()],
  ["-(a)*3", 2, multiply(-2, 3).toString()],
  ["-(a)*2", 3, multiply(-3, 2).toString()],
  ["-(-a)", 2, (2).toString()],
  ["-(-a)", -2, (-2).toString()],
  ["-(-a)*2", 3, (-multiply(-3, 2)).toString()],
  ["-(-a)*2", -3, (-multiply(3, 2)).toString()],
  ["-(-a)*-2", -3, (-multiply(3, -2)).toString()],
  ["-(-a)*(-2)", -3, (-multiply(3, -2)).toString()],
  ["-(-a)*-(2)", -3, (-multiply(3, -2)).toString()],
  ["2+(-a)*2", 3, add(2, multiply(-3, 2)).toString()],
  ["2/(-a)*2", 3, divide(2, multiply(-3, 2)).toString()],
  ["2*(-a)*2", 3, multiply(multiply(2, -3), 2).toString()],
  ["2-(-a)*2", 3, subtract(2, multiply(-3, 2)).toString()],
  ["2-(-a)*2", -3, subtract(2, multiply(3, 2)).toString()],
  ["2-(-a)*-2", -3, subtract(2, multiply(3, -2)).toString()],
  ["-2-(-a)*-2", -3, subtract(-2, multiply(3, -2)).toString()],
  ["4-a*2", 3, subtract(4, multiply(3, 2)).toString()],
  [
    "-((2*3+5)*(100-(-(a)*(2))))",
    3,
    (-multiply(
      add(multiply(2, 3), 5),
      subtract(100, -multiply(3, 2))
    )).toString()
  ],
  [
    "cos(abs(a))",
    -60,
    Math.cos(GxBigNumber.convertBigNumberToNumber(absBigNumber(-60))).toString()
  ],
  [
    "cos(a+100)",
    -60,
    Math.cos(GxBigNumber.convertBigNumberToNumber(add(-60, 100))).toString()
  ],
  ["a+100", -60, add(-60, 100).toString()],
  ["integer(a)", 0, integerBigNumber(0).toString()],
  ["integer(a)", 1, integerBigNumber(1).toString()],
  ["integer(a)", 127, integerBigNumber(127).toString()],
  ["integer(a)", -3, integerBigNumber(-3).toString()],
  ["integer(a)", 0, integerBigNumber(0.6).toString()],
  ["integer(a)", 1, integerBigNumber(1.3).toString()],
  ["integer(a)", -2, integerBigNumber(-2.4).toString()],
  ["integer(a)", 1, integerBigNumber(5 / 3).toString()],
  [
    "abs(integer(a)*-1)",
    1,
    absBigNumber(multiply(integerBigNumber(5 / 3), -1)).toString()
  ]
];

// a b c
export const testExpression3: Array<[
  string,
  number,
  number,
  number,
  string
]> = [
  [
    "abs(a*b+c)",
    100,
    -2,
    +1,
    absBigNumber(add(multiply(100, -2), +1)).toString()
  ],
  [
    "tan( abs((b + a * b + c) * -1))",
    1,
    2,
    3,
    Math.tan(
      GxBigNumber.convertBigNumberToNumber(
        absBigNumber(multiply(add(add(2, multiply(1, 2)), 3), -1))
      )
    ).toString()
  ],
  ["a*(b+c)/100", 2, 2, 1, multiply(2, divide(add(2, 1), 100)).toString()],
  [
    "round( a + b + c, 0)",
    1,
    2,
    1.5,
    roundBigNumber(add(add(1, 2), 1.5), 0).toString()
  ],
  [
    "tan( b + a * b + c)",
    1,
    2,
    3,
    Math.tan(
      GxBigNumber.convertBigNumberToNumber(add(add(2, multiply(1, 2)), 3))
    ).toString()
  ],
  [
    "floor( a * b + c)",
    1,
    2,
    1.5,
    Math.floor(
      GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 1.5))
    ).toString()
  ],
  ["iif( a < b , a , c)", 1, 2, 0, iif(1 < 2, 1, 0).toString()],
  ["Iif( a < b , a , c)", 1, 2, 0, iif(1 < 2, 1, 0).toString()],
  ["IIF( a < b , a , c)", 1, 2, 0, iif(1 < 2, 1, 0).toString()],
  [
    "sqrt( a * b + c )",
    1,
    2,
    7,
    Math.sqrt(
      GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 7))
    ).toString()
  ],
  [
    "10*log( a * b + c)",
    1,
    2,
    3,
    multiply(
      10,
      Math.log(GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3)))
    ).toString()
  ],
  [
    "log( a + b)",
    1,
    2,
    3,
    Math.log(GxBigNumber.convertBigNumberToNumber(add(1, 2))).toString()
  ],
  [
    "10*log( a * b + c)",
    1,
    2,
    3,
    multiply(
      10,
      Math.log(GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3)))
    ).toString()
  ],
  [
    "10*ln( a * b + c)",
    1,
    2,
    3,
    multiply(
      10,
      Math.log(GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3)))
    ).toString()
  ],
  [
    "ln( a + b)",
    1,
    2,
    3,
    Math.log(GxBigNumber.convertBigNumberToNumber(add(1, 2))).toString()
  ],
  [
    "10*ln( a * b + c)",
    1,
    2,
    3,
    multiply(
      10,
      Math.log(GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3)))
    ).toString()
  ],
  [
    "abs(-(a * b + c ))",
    1,
    2,
    3,
    absBigNumber(-add(multiply(1, 2), 3)).toString()
  ],
  [
    "frac( a * b + c)",
    1,
    2,
    3.2,
    fracBigNumber(add(multiply(1, 2), 3.2)).toString()
  ],
  ["frac( a * b + c)", 1, 2, 3.2, (0.2).toString()]
];

// SIGN > < <= >= <> and or
export const testExpression4: Array<[string, number, number, any]> = [
  ["a>b", 1, 2, GxBigNumber.greaterThan(1, 2)],
  ["abs(a*b)>1", 1, -2, GxBigNumber.greaterThan(2, 1)],
  ["a*b>1", 1, -2, GxBigNumber.greaterThan(-2, 1)],
  ["(a*b)>1", 1, -2, GxBigNumber.greaterThan(-2, 1)],
  ["(a*b)>(1)", 1, -2, GxBigNumber.greaterThan(-2, 1)],
  ["a*b>(1)", 1, -2, GxBigNumber.greaterThan(-2, 1)],
  ["(a)*(b)>(1)", 1, -2, GxBigNumber.greaterThan(-2, 1)],
  ["abs(a*b)>abs(a*-5)", 1, -2, GxBigNumber.greaterThan(2, 5)],
  ["a>b", 2, 2, GxBigNumber.greaterThan(2, 2)],
  ["abs(a*b)>abs(a*-2)", 1, -2, GxBigNumber.greaterThan(2, 2)],

  ["a<b", 1, 2, GxBigNumber.lessThan(1, 2)],
  ["abs(a*b)<1", 1, -2, GxBigNumber.lessThan(2, 1)],
  ["a*b<1", 1, -2, GxBigNumber.lessThan(-2, 1)],
  ["(a*b)<1", 1, -2, GxBigNumber.lessThan(-2, 1)],
  ["(a*b)<(1)", 1, -2, GxBigNumber.lessThan(-2, 1)],
  ["a*b<(1)", 1, -2, GxBigNumber.lessThan(-2, 1)],
  ["(a)*(b)<(1)", 1, -2, GxBigNumber.lessThan(-2, 1)],
  ["abs(a*b)<abs(a*-5)", 1, -2, GxBigNumber.lessThan(2, 5)],
  ["a<b", 2, 2, GxBigNumber.lessThan(2, 2)],
  ["abs(a*b)<abs(a*-2)", 1, -2, GxBigNumber.lessThan(2, 2)],

  ["a>=b", 1, 2, GxBigNumber.greaterThanEqualTo(1, 2)],
  ["abs(a*b)>=1", 1, -2, GxBigNumber.greaterThanEqualTo(2, 1)],
  ["a*b>=1", 1, -2, GxBigNumber.greaterThanEqualTo(-2, 1)],
  ["(a*b)>=1", 1, -2, GxBigNumber.greaterThanEqualTo(-2, 1)],
  ["(a*b)>=(1)", 1, -2, GxBigNumber.greaterThanEqualTo(-2, 1)],
  ["a*b>=(1)", 1, -2, GxBigNumber.greaterThanEqualTo(-2, 1)],
  ["(a)*(b)>=(1)", 1, -2, GxBigNumber.greaterThanEqualTo(-2, 1)],
  ["abs(a*b)>=abs(a*-5)", 1, -2, GxBigNumber.greaterThanEqualTo(2, 5)],
  ["a>=b", 2, 2, GxBigNumber.greaterThanEqualTo(2, 2)],
  ["abs(a*b)>=abs(a*-2)", 1, -2, GxBigNumber.greaterThanEqualTo(2, 2)],

  ["a<=b", 1, 2, GxBigNumber.lessThanEqualTo(1, 2)],
  ["abs(a*b)<=1", 1, -2, GxBigNumber.lessThanEqualTo(2, 1)],
  ["a*b<=1", 1, -2, GxBigNumber.lessThanEqualTo(-2, 1)],
  ["(a*b)<=1", 1, -2, GxBigNumber.lessThanEqualTo(-2, 1)],
  ["(a*b)<=(1)", 1, -2, GxBigNumber.lessThanEqualTo(-2, 1)],
  ["a*b<=(1)", 1, -2, GxBigNumber.lessThanEqualTo(-2, 1)],
  ["(a)*(b)<=(1)", 1, -2, GxBigNumber.lessThanEqualTo(-2, 1)],
  ["abs(a*b)<=abs(a*-5)", 1, -2, GxBigNumber.lessThanEqualTo(2, 5)],
  ["a<=b", 2, 2, GxBigNumber.lessThanEqualTo(2, 2)],
  ["abs(a*b)<=abs(a*-2)", 1, -2, GxBigNumber.lessThanEqualTo(2, 2)],

  ["a<>b", 1, 2, GxBigNumber.differentThan(1, 2)],
  ["abs(a*b)<>1", 1, -2, GxBigNumber.differentThan(2, 1)],
  ["a*b<>1", 1, -2, GxBigNumber.differentThan(-2, 1)],
  ["(a*b)<>1", 1, -2, GxBigNumber.differentThan(-2, 1)],
  ["(a*b)<>(1)", 1, -2, GxBigNumber.differentThan(-2, 1)],
  ["a*b<>(1)", 1, -2, GxBigNumber.differentThan(-2, 1)],
  ["(a)*(b)<>(1)", 1, -2, GxBigNumber.differentThan(-2, 1)],
  ["abs(a*b)<>abs(a*-5)", 1, -2, GxBigNumber.differentThan(2, 5)],
  ["a<>b", 2, 2, GxBigNumber.differentThan(2, 2)],
  ["abs(a*b)<>abs(a*-2)", 1, -2, GxBigNumber.differentThan(2, 2)],
  ["(a<>b)", 1, 2, GxBigNumber.differentThan(1, 2)],

  //AND O OR
  ["iif( a < b and a+1 <b , a , 0)", 1, 2, iif(1 < 2 && 2 < 2, 1, 0)], // 1<2 and 2<2 ==> 0
  ["iif( a < b or a+1 <b , a , 0)", 1, 2, iif(1 < 2 || 2 < 2, 1, 0)] // 1<2 and 2<2 ==> 0
];

export const testExpression5: Array<[string, string, any]> = [
  ["cos(a)", "90", Math.cos(90).toString()],
  ["exp(a)", "0", Math.exp(0).toString()],
  ["ln(exp(a))", "0", Math.log(Math.exp(0)).toString()],
  ["a*pi", "2", multiply(2, Math.PI).toString()],
  [
    "sin(a) + asin(a)+cos(a)+acos(a) + tan(a)+atan(a)",
    "1",
    add(
      add(
        add(add(add(Math.sin(1), Math.asin(1)), Math.cos(1)), Math.acos(1)),
        Math.tan(1)
      ),
      Math.atan(1)
    ).toString()
  ],
  [
    "round(a,0)+ln(a)+log(a)+exp(a)+sqrt(a)",
    "2.5",
    add(
      add(
        add(add(roundBigNumber(2.5, 0), Math.log(2.5)), Math.log(2.5)),
        Math.exp(2.5)
      ),
      Math.sqrt(2.5)
    ).toString()
  ],
  [
    "abs(a) + integer(a) + frac(a)",
    "2.5",
    add(
      add(absBigNumber(2.5), integerBigNumber(2.5)),
      fracBigNumber(2.5)
    ).toString()
  ]
];

export const testExpression6: Array<[string, string, string, any]> = [
  [
    "50*cos(a)*sin(b)",
    "1",
    "2",
    multiply(multiply(50, Math.cos(1)), Math.sin(2)).toString()
  ],
  [
    "pow(2,3)+max(a,b)+min(a,b)",
    "1",
    "2",
    add(add(Math.pow(2, 3), Math.max(1, 2)), Math.min(1, 2)).toString()
  ],
  [
    "pow(2,3)+max(a,b)+min(a,b)",
    "1",
    "2",
    add(add(Math.pow(2, 3), Math.max(1, 2)), Math.min(1, 2)).toString()
  ],
  ["cos(a)*sin(b)", "1", "2", multiply(Math.cos(1), Math.sin(2)).toString()]
];

export const testExpression7: Array<[string, string, string, string, any]> = [
  ["a*b+c", "1", "2", "3", add(multiply(1, 2), 3).toString()],
  [
    "a*(b+c)/100",
    "1",
    "2",
    "3",
    multiply(1, divide(add(2, 3), 100)).toString()
  ],
  [
    "round( a + b + c,0)",
    "1",
    "2",
    "3",
    roundBigNumber(add(add(1, 2), 3), 0).toString()
  ],
  [
    "tan( b + a * b + c)",
    "1",
    "2",
    "3",
    Math.tan(
      GxBigNumber.convertBigNumberToNumber(add(add(2, multiply(1, 2)), 3))
    ).toString()
  ],
  [
    "floor( a * b + c)",
    "1",
    "2",
    "3",
    Math.floor(
      GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3))
    ).toString()
  ],
  [
    "abs( a * b + c)",
    "1",
    "2",
    "3",
    absBigNumber(add(multiply(1, 2), 3)).toString()
  ],
  ["iif( a < b , a , c)", "1", "2", "3", iif(1 < 2, 1, 3).toString()],
  [
    "sqrt( a * b + c )",
    "1",
    "2",
    "3",
    Math.sqrt(
      GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3))
    ).toString()
  ],
  [
    "10*log( a * b + c)",
    "1",
    "2",
    "3",
    multiply(
      10,
      Math.log(GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3)))
    ).toString()
  ],
  [
    "abs(-(a * b + c ))",
    "1",
    "2",
    "3",
    absBigNumber(-add(multiply(1, 2), 3)).toString()
  ]
];

export const testExpression8: Array<[string, string, number, number, any]> = [
  [
    "iif(operator01='+',a+b,0)",
    "'+'",
    2,
    3,
    iif("+" === "+", 2 + 3, 0).toString()
  ],
  ["iif(operator01='-',a+b,iif(operator01='+',5,0))", "'+'", 1, 1, String(5)],
  [
    "iif(operator01='*',a*b,0)",
    "'*'",
    2,
    3,
    iif("*" === "*", 2 * 3, 0).toString()
  ],
  [
    "iif(operator01<>'TEST',a+b,a*b)",
    "'TEST'",
    2,
    3,
    iif("TEST" !== "TEST", 2 + 3, 2 * 3).toString()
  ],
  [
    "iif(operator01<>'TEST012',a+b,a*b)",
    "'TEST45'",
    2,
    3,
    iif(String("TEST45") !== String("TEST012"), 2 + 3, 2 * 3).toString()
  ],
  [
    "iif(operator01<>'It´s a test!, Passed.',a+b,a*b)",
    "'It is a test!'",
    2,
    3,
    iif(
      String("It is a test!") !== String("It´s a test!, Passed."),
      2 + 3,
      2 * 3
    ).toString()
  ],
  [
    "iif(2<>3,a+b,a*b)",
    "'TEST'",
    2,
    3,
    iif(Number(2) !== Number(3), 2 + 3, 2 * 3).toString()
  ],
  [
    "iif((a<>b)<>'TEST',a+b,a*b)",
    "'TEST'",
    2,
    3,
    iif(
      (Number(2) !== Number(3)).toString() !== "TEST",
      2 + 3,
      2 * 3
    ).toString()
  ],
  [
    "iif('TEST'<>(a<>b),a+b,a*b)",
    "'TEST'",
    2,
    3,
    iif(
      "TEST" !== (Number(2) !== Number(3)).toString(),
      2 + 3,
      2 * 3
    ).toString()
  ],

  [
    "iif('TEST'<>(a<>b) and (a<>b)<>'TEST' and operator01<>'TEST' and (a<>b)<>'TEST' and (a<>b)<>(a<>b) and (a)<>(b) and a<>b ,a+b,a*b)",
    "'TEST'",
    2,
    3,
    iif(
      "TEST" !== GxBigNumber.greaterThan(2, 3).toString() &&
        GxBigNumber.greaterThan(2, 3).toString() !== "TEST" &&
        "TEST" !== "TEST" &&
        GxBigNumber.greaterThan(2, 3).toString() !== "TEST" &&
        GxBigNumber.greaterThan(2, 3) !== GxBigNumber.greaterThan(2, 3) &&
        GxBigNumber.greaterThan(2, 3) &&
        GxBigNumber.greaterThan(2, 3),
      2 + 3,
      2 * 3
    ).toString()
  ],

  [
    "iif((a<>b)<>'TEST' and (a<>b)<>(a<>b) and (a)<>(b) and a<>b ,a+b,a*b)",
    "'TEST'",
    2,
    3,
    iif("TEST" === "TEST", 2 + 3, 2 * 3).toString()
  ],

  [
    "iif(operator01='-',a+b,iif(operator01='+',5,0))",
    "'+'",
    1,
    1,
    iif(String("+") === String("-"), 2 + 3, iif("+" === "+", 5, 0)).toString()
  ],
  ["iif(operator01='-',a+b,iif(operator01='+',5,0))", "'+'", 1, 1, String(5)],

  [
    "abs(-(a * b + 7 )) + iif(operator01='-',2,5) ",
    "'-'",
    1,
    2,
    add(
      absBigNumber(-add(multiply(1, 2), 7)),
      iif("-" === "-", 2, 5)
    ).toString()
  ],
  [
    "abs(-(a * b + 7 )) + iif(operator01='-',2,5) ",
    "'-'",
    1,
    2,
    (11).toString()
  ],

  [
    "iif(operator01='+',1,7) + iif(operator01='-',2,5)",
    "'-'",
    1,
    2,
    (9).toString()
  ]
];

export const testExpression9: Array<[string, number, number, string, any]> = [
  ["a1+b1+c1", 1, 2, "3", add(add(1, 2), 3).toString()],
  [
    "a1+b1+c1",
    1,
    2,
    "'+'",
    "Error occurred during execution (EVALUATION_ERROR)"
  ]
];

export const testExpression10: Array<[string, number, number, any]> = [
  ["a+b", 1, 2, add(1, 2).toString()]
];

export const testExpression11: Array<[string, number, number, any]> = [
  ["A+B", 1, 2, add(1, 2).toString()]
];

describe("testExpressionErrores1", () => {
  for (const t of testExpressionErrores1) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);
      Expression.setVariables("b", t[2]);
      let res = GxExpression.evaluate(Expression);

      expect(res.toString()).toBe(t[3]);
    });
  }
});

describe("testExpressionErrores2", () => {
  for (const t of testExpressionErrores2) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);
      Expression.setVariables("b", t[2]);
      let res = GxExpression.evaluate(Expression);

      expect(res.toString()).toBe(t[3]);
    });
  }
});

describe("testExpressionErrorCode1", () => {
  for (const t of testExpressionErrorCode1) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);
      Expression.setVariables("b", t[2]);

      GxExpression.evaluate(Expression);
      let res = Expression.ErrCode;

      expect(res).toBe(t[3]);
    });
  }
});

describe("testExpressionErrorCode2", () => {
  for (const t of testExpressionErrorCode2) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);
      Expression.setVariables("b", t[2]);

      GxExpression.evaluate(Expression);
      let res = Expression.ErrCode;

      expect(res).toBe(t[3]);
    });
  }
});

describe("Expression", () => {
  for (const t of testExpression1) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);
      Expression.setVariables("b", t[2]);
      let res = GxExpression.evaluate(Expression);

      expect(res.toString()).toBe(t[3]);
    });
  }
});

describe("Expression 2", () => {
  for (const t of testExpression2) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);

      let res = GxExpression.evaluate(Expression);
      expect(res.toString()).toBe(t[2]);
    });
  }
});

describe("Expression 3", () => {
  for (const t of testExpression3) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);
      Expression.setVariables("b", t[2]);
      Expression.setVariables("c", t[3]);

      let res = GxExpression.evaluate(Expression);
      expect(res.toString()).toBe(t[4]);
    });
  }
});

describe("Expression 4", () => {
  for (const t of testExpression4) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);
      Expression.setVariables("b", t[2]);

      let res = GxExpression.evaluate(Expression);
      console.log("res");
      console.log(res);
      expect(res).toBe(t[3]);
    });
  }
});

describe("Expression 5", () => {
  for (const t of testExpression5) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);

      let res = GxExpression.evaluate(Expression);
      console.log("res");
      console.log(res);
      expect(res.toString()).toBe(t[2]);
    });
  }
});

describe("Expression 6", () => {
  for (const t of testExpression6) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);
      Expression.setVariables("b", t[2]);

      let res = GxExpression.evaluate(Expression);
      console.log("res");
      console.log(res);
      expect(res.toString()).toBe(t[3]);
    });
  }
});

describe("Expression 7", () => {
  for (const t of testExpression7) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);
      Expression.setVariables("b", t[2]);
      Expression.setVariables("c", t[3]);

      let res = GxExpression.evaluate(Expression);
      console.log("res");
      console.log(res);
      expect(res.toString()).toBe(t[4]);
    });
  }
});

describe("testExpression8", () => {
  for (const t of testExpression8) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("operator01", t[1]);
      Expression.setVariables("a", t[2]);
      Expression.setVariables("b", t[3]);

      let res = GxExpression.evaluate(Expression);

      expect(res.toString()).toBe(t[4]);
    });
  }
});

describe("testExpression9", () => {
  for (const t of testExpression9) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a1", t[1]);
      Expression.setVariables("b1", t[2]);
      Expression.setVariables("c1", t[3]);

      let res = GxExpression.evaluate(Expression);

      expect(res.toString()).toBe(t[4]);
    });
  }
});

describe("testExpression10", () => {
  for (const t of testExpression10) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("A", t[1]);
      Expression.setVariables("B", t[2]);

      let res = GxExpression.evaluate(Expression);

      expect(res.toString()).toBe(t[3]);
    });
  }
});

describe("testExpression11", () => {
  for (const t of testExpression11) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.setVariables("a", t[1]);
      Expression.setVariables("b", t[2]);

      let res = GxExpression.evaluate(Expression);

      expect(res.toString()).toBe(t[3]);
    });
  }
});
