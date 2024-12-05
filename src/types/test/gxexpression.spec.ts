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

export const testExpressionErrores1: Array<[
  string,
  string,
  string,
  any,
  string,
  string
]> = [
  [
    "a+b",
    "1",
    "{id:1,name:'name1'}",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ]
];

export const testExpressionErrores2: Array<[
  string,
  number,
  number,
  string,
  string,
  string
]> = [
  // ERROR CODE 3   Expression to be evaluated is not well formed (EXPRESSION_ERROR)
  [
    "",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a+b",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "a+b)",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a)+(b",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a)+b)",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a+(b)",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "a)+(b)",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "a)+(b",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  // ERROR 4 Error occurred during execution (EVALUATION_ERROR)
  [
    "a+b+C",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "SELECT * FROM usuarios",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["a/b", 1, 0, "0", "4", "Division by zero"],
  [
    "SELECT * FROM usuarios WHERE usuarioId=iif(1=1,4,9)",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "SELECT name FROM usuarios WHERE usuarioId=iif(1=1,4,9)",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "SELECT name FROM usuarios",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "SELECT name FROM usuarios where userId=1",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ]
];

export const testExpressionErrorCode1: Array<[
  string,
  string,
  string,
  any,
  string,
  string
]> = [
  [
    "a+b",
    "1",
    "{id:1,name:'name1'}",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ]
];

export const testExpressionErrorCode2: Array<[
  string,
  number,
  number,
  string,
  string,
  string
]> = [
  // ERROR CODE 3   Expression to be evaluated is not well formed (EXPRESSION_ERROR)
  [
    "",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a+b",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "a+b)",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a)+(b",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a)+b)",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "(a+(b)",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "a)+(b)",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "a)+(b",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "SELECT * FROM usuarios",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "a+b+C",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["a/b", 1, 0, "0", "4", "Division by zero"]

  // ERROR 4 Error occurred during execution (EVALUATION_ERROR)
];

// a b
export const testExpression1: Array<[
  string,
  number,
  number,
  string,
  string,
  string
]> = [
  ["a+b", 1, 2, add(1, 2).toString(), "0", ""],
  ["(a+b)", 1, 2, add(1, 2).toString(), "0", ""],
  ["(a)+(b)", 1, 2, add(1, 2).toString(), "0", ""],
  ["(a)+b", 1, 2, add(1, 2).toString(), "0", ""],
  ["a+(b)", 1, 2, add(1, 2).toString(), "0", ""],
  ["a++b", 1, 2, "3", "0", ""],
  ["+-b", 1, 2, "-2", "0", ""],
  ["++b", 1, 2, "2", "0", ""],
  ["--b", 1, 2, "2", "0", ""],
  ["a--b", 1, 2, "3", "0", ""],
  ["a+-b", 1, 2, "-1", "0", ""],
  ["-+b", 1, 2, "-2", "0", ""],
  ["a-+b", 1, 2, "-1", "0", ""],
  ["a+cos(0)", 1, 2, add(1, Math.cos(0)).toString(), "0", ""],
  ["a+b*1", 1, 2, add(1, multiply(2, 1)).toString(), "0", ""],
  ["(a*b)/100", 100, 2, divide(multiply(100, 2), 100).toString(), "0", ""],
  [
    "50*cos(a)*sin(b)",
    0,
    1,
    multiply(multiply(50, Math.cos(0)), Math.sin(1)).toString(),
    "0",
    ""
  ],
  [
    "cos(a)*sin(b)",
    0,
    1,
    multiply(Math.cos(0), Math.sin(1)).toString(),
    "0",
    ""
  ],
  [
    "50*cos(a)*b",
    0,
    1,
    multiply(multiply(50, Math.cos(0)), 1).toString(),
    "0",
    ""
  ],
  [
    "cos(sin(a))*b",
    0,
    1,
    multiply(Math.cos(Math.sin(0)), 1).toString(),
    "0",
    ""
  ],
  ["a*sin(b)", 0, 2, multiply(0, Math.sin(2)).toString(), "0", ""]
];

// a
export const testExpression2: Array<[
  string,
  number,
  string,
  string,
  string
]> = [
  ["round(a,0)", 1.5, roundBigNumber(1.5, 0).toString(), "0", ""],
  ["Round(a,0)", 1.5, roundBigNumber(1.5, 0).toString(), "0", ""],
  ["ROUND(a,0)", 1.5, roundBigNumber(1.5, 0).toString(), "0", ""],
  ["cos(a)", 60, Math.cos(60).toString(), "0", ""], // Radian
  ["Cos(a)", 60, Math.cos(60).toString(), "0", ""], // Radian
  ["COS(a)", 60, Math.cos(60).toString(), "0", ""], // Radian
  ["cos(a)", 90, Math.cos(90).toString(), "0", ""],
  [" cos(a)", 90, Math.cos(90).toString(), "0", ""],
  ["cos (a)", 90, Math.cos(90).toString(), "0", ""],
  ["cos( a)", 90, Math.cos(90).toString(), "0", ""],
  ["cos(a )", 90, Math.cos(90).toString(), "0", ""],
  [" cos ( a ) ", 90, Math.cos(90).toString(), "0", ""],
  ["round(a,0)+1", 1.5, add(roundBigNumber(1.5, 0), 1).toString(), "0", ""],
  [
    "round(a,0)+cos(60)",
    1.5,
    add(roundBigNumber(1.5, 0), Math.cos(60)).toString(),
    "0",
    ""
  ],
  ["exp(a)", 0, Math.exp(0).toString(), "0", ""],
  ["ln(exp(a))", 0, "0", "0", ""],
  ["a*pi", 2, multiply(2, Math.PI).toString(), "0", ""],
  [
    "a*pi+a*pi",
    2,
    add(multiply(2, Math.PI), multiply(2, Math.PI)).toString(),
    "0",
    ""
  ],
  [
    "integer(a*pi+a*pi)",
    2,
    integerBigNumber(
      add(multiply(2, Math.PI), multiply(2, Math.PI))
    ).toString(),
    "0",
    ""
  ],
  ["a*-2", 3, multiply(3, -2).toString(), "0", ""],
  ["-a*-2", 3, multiply(-3, -2).toString(), "0", ""],
  ["-(a)", 3, (-3).toString(), "0", ""],
  ["-a*2", 3, multiply(-3, 2).toString(), "0", ""],
  ["-(a)*3", 2, multiply(-2, 3).toString(), "0", ""],
  ["-(a)*2", 3, multiply(-3, 2).toString(), "0", ""],
  ["-(-a)", 2, (2).toString(), "0", ""],
  ["-(-a)", -2, (-2).toString(), "0", ""],
  ["-(-a)*2", 3, (-multiply(-3, 2)).toString(), "0", ""],
  ["-(-a)*2", -3, (-multiply(3, 2)).toString(), "0", ""],
  ["-(-a)*-2", -3, (-multiply(3, -2)).toString(), "0", ""],
  ["-(-a)*(-2)", -3, (-multiply(3, -2)).toString(), "0", ""],
  ["-(-a)*-(2)", -3, (-multiply(3, -2)).toString(), "0", ""],
  ["2+(-a)*2", 3, add(2, multiply(-3, 2)).toString(), "0", ""],
  ["2/(-a)*2", 3, divide(2, multiply(-3, 2)).toString(), "0", ""],
  ["2*(-a)*2", 3, multiply(multiply(2, -3), 2).toString(), "0", ""],
  ["2-(-a)*2", 3, subtract(2, multiply(-3, 2)).toString(), "0", ""],
  ["2-(-a)*2", -3, subtract(2, multiply(3, 2)).toString(), "0", ""],
  ["2-(-a)*-2", -3, subtract(2, multiply(3, -2)).toString(), "0", ""],
  ["-2-(-a)*-2", -3, subtract(-2, multiply(3, -2)).toString(), "0", ""],
  ["4-a*2", 3, subtract(4, multiply(3, 2)).toString(), "0", ""],
  [
    "-((2*3+5)*(100-(-(a)*(2))))",
    3,
    (-multiply(
      add(multiply(2, 3), 5),
      subtract(100, -multiply(3, 2))
    )).toString(),
    "0",
    ""
  ],
  [
    "cos(abs(a))",
    -60,
    Math.cos(
      GxBigNumber.convertBigNumberToNumber(absBigNumber(-60))
    ).toString(),
    "0",
    ""
  ],
  [
    "cos(a+100)",
    -60,
    Math.cos(GxBigNumber.convertBigNumberToNumber(add(-60, 100))).toString(),
    "0",
    ""
  ],
  ["a+100", -60, add(-60, 100).toString(), "0", ""],
  ["integer(a)", 0, integerBigNumber(0).toString(), "0", ""],
  ["integer(a)", 1, integerBigNumber(1).toString(), "0", ""],
  ["integer(a)", 127, integerBigNumber(127).toString(), "0", ""],
  ["integer(a)", -3, integerBigNumber(-3).toString(), "0", ""],
  ["integer(a)", 0, integerBigNumber(0.6).toString(), "0", ""],
  ["integer(a)", 1, integerBigNumber(1.3).toString(), "0", ""],
  ["integer(a)", -2, integerBigNumber(-2.4).toString(), "0", ""],
  ["integer(a)", 1, integerBigNumber(5 / 3).toString(), "0", ""],
  ["integer (a)", 1, integerBigNumber(5 / 3).toString(), "0", ""],
  ["integer( a)", 1, integerBigNumber(5 / 3).toString(), "0", ""],
  ["integer ( a ) ", 1, integerBigNumber(5 / 3).toString(), "0", ""],
  [" integer ( a ) ", 1, integerBigNumber(5 / 3).toString(), "0", ""],
  [
    "abs(integer(a)*-1)",
    1,
    absBigNumber(multiply(integerBigNumber(5 / 3), -1)).toString(),
    "0",
    ""
  ]
];

// a b c
export const testExpression3: Array<[
  string,
  number,
  number,
  number,
  string,
  string,
  string
]> = [
  [
    "abs(a*b+c)",
    100,
    -2,
    +1,
    absBigNumber(add(multiply(100, -2), +1)).toString(),
    "0",
    ""
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
    ).toString(),
    "0",
    ""
  ],
  [
    "a*(b+c)/100",
    2,
    2,
    1,
    multiply(2, divide(add(2, 1), 100)).toString(),
    "0",
    ""
  ],
  [
    "round( a + b + c, 0)",
    1,
    2,
    1.5,
    roundBigNumber(add(add(1, 2), 1.5), 0).toString(),
    "0",
    ""
  ],
  [
    "tan( b + a * b + c)",
    1,
    2,
    3,
    Math.tan(
      GxBigNumber.convertBigNumberToNumber(add(add(2, multiply(1, 2)), 3))
    ).toString(),
    "0",
    ""
  ],
  [
    "floor( a * b + c)",
    1,
    2,
    1.5,
    Math.floor(
      GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 1.5))
    ).toString(),
    "0",
    ""
  ],
  ["iif( a < b , a , c)", 1, 2, 0, iif(1 < 2, 1, 0).toString(), "0", ""],
  ["Iif( a < b , a , c)", 1, 2, 0, iif(1 < 2, 1, 0).toString(), "0", ""],
  ["IIF( a < b , a , c)", 1, 2, 0, iif(1 < 2, 1, 0).toString(), "0", ""],
  [
    "sqrt( a * b + c )",
    1,
    2,
    7,
    Math.sqrt(
      GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 7))
    ).toString(),
    "0",
    ""
  ],
  [
    "10*log( a * b + c)",
    1,
    2,
    3,
    multiply(
      10,
      Math.log(GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3)))
    ).toString(),
    "0",
    ""
  ],
  [
    "log( a + b)",
    1,
    2,
    3,
    Math.log(GxBigNumber.convertBigNumberToNumber(add(1, 2))).toString(),
    "0",
    ""
  ],
  [
    "10*log( a * b + c)",
    1,
    2,
    3,
    multiply(
      10,
      Math.log(GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3)))
    ).toString(),
    "0",
    ""
  ],
  [
    "10*ln( a * b + c)",
    1,
    2,
    3,
    multiply(
      10,
      Math.log(GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3)))
    ).toString(),
    "0",
    ""
  ],
  [
    "ln( a + b)",
    1,
    2,
    3,
    Math.log(GxBigNumber.convertBigNumberToNumber(add(1, 2))).toString(),
    "0",
    ""
  ],
  [
    "10*ln( a * b + c)",
    1,
    2,
    3,
    multiply(
      10,
      Math.log(GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3)))
    ).toString(),
    "0",
    ""
  ],
  [
    "abs(-(a * b + c ))",
    1,
    2,
    3,
    absBigNumber(-add(multiply(1, 2), 3)).toString(),
    "0",
    ""
  ],
  [
    "frac( a * b + c)",
    1,
    2,
    3.2,
    fracBigNumber(add(multiply(1, 2), 3.2)).toString(),
    "0",
    ""
  ],
  ["frac( a * b + c)", 1, 2, 3.2, (0.2).toString(), "0", ""]
];

// SIGN > < <= >= <> and or
export const testExpression4: Array<[
  string,
  number,
  number,
  any,
  string,
  string
]> = [
  ["a>b", 1, 2, Number(GxBigNumber.greaterThan(1, 2)).toString(), "0", ""],
  [
    "abs(a*b)>1",
    1,
    -2,
    Number(GxBigNumber.greaterThan(2, 1)).toString(),
    "0",
    ""
  ],
  ["a*b>1", 1, -2, Number(GxBigNumber.greaterThan(-2, 1)).toString(), "0", ""],
  [
    "(a*b)>1",
    1,
    -2,
    Number(GxBigNumber.greaterThan(-2, 1)).toString(),
    "0",
    ""
  ],
  ["(a*b)>'H'", 1, -2, "0", "5", "Execute Method not found"],
  ["('HOLA')>1", 1, -2, "0", "5", "Execute Method not found"],
  ["('HOLA')>'HOLA'", 1, -2, "0", "5", "Execute Method not found"],
  ["('1')>'1'", 1, -2, "0", "5", "Execute Method not found"],
  [
    "(a*b)>(1)",
    1,
    -2,
    Number(GxBigNumber.greaterThan(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "a*b>(1)",
    1,
    -2,
    Number(GxBigNumber.greaterThan(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "(a)*(b)>(1)",
    1,
    -2,
    Number(GxBigNumber.greaterThan(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "abs(a*b)>abs(a*-5)",
    1,
    -2,
    Number(GxBigNumber.greaterThan(2, 5)).toString(),
    "0",
    ""
  ],
  ["a>b", 2, 2, Number(GxBigNumber.greaterThan(2, 2)).toString(), "0", ""],
  [
    "abs(a*b)>abs(a*-2)",
    1,
    -2,
    Number(GxBigNumber.greaterThan(2, 2)).toString(),
    "0",
    ""
  ],

  ["a<b", 1, 2, Number(GxBigNumber.lessThan(1, 2)).toString(), "0", ""],
  ["abs(a*b)<1", 1, -2, Number(GxBigNumber.lessThan(2, 1)).toString(), "0", ""],
  ["a*b<1", 1, -2, Number(GxBigNumber.lessThan(-2, 1)).toString(), "0", ""],
  ["(a*b)<1", 1, -2, Number(GxBigNumber.lessThan(-2, 1)).toString(), "0", ""],
  ["(a*b)<(1)", 1, -2, Number(GxBigNumber.lessThan(-2, 1)).toString(), "0", ""],
  ["a*b<(1)", 1, -2, Number(GxBigNumber.lessThan(-2, 1)).toString(), "0", ""],
  [
    "(a)*(b)<(1)",
    1,
    -2,
    Number(GxBigNumber.lessThan(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "abs(a*b)<abs(a*-5)",
    1,
    -2,
    Number(GxBigNumber.lessThan(2, 5)).toString(),
    "0",
    ""
  ],
  ["a<b", 2, 2, Number(GxBigNumber.lessThan(2, 2)).toString(), "0", ""],
  [
    "abs(a*b)<abs(a*-2)",
    1,
    -2,
    Number(GxBigNumber.lessThan(2, 2)).toString(),
    "0",
    ""
  ],

  [
    "a>=b",
    1,
    2,
    Number(GxBigNumber.greaterThanEqualTo(1, 2)).toString(),
    "0",
    ""
  ],
  [
    "abs(a*b)>=1",
    1,
    -2,
    Number(GxBigNumber.greaterThanEqualTo(2, 1)).toString(),
    "0",
    ""
  ],
  [
    "a*b>=1",
    1,
    -2,
    Number(GxBigNumber.greaterThanEqualTo(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "(a*b)>=1",
    1,
    -2,
    Number(GxBigNumber.greaterThanEqualTo(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "(a*b)>=(1)",
    1,
    -2,
    Number(GxBigNumber.greaterThanEqualTo(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "a*b>=(1)",
    1,
    -2,
    Number(GxBigNumber.greaterThanEqualTo(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "(a)*(b)>=(1)",
    1,
    -2,
    Number(GxBigNumber.greaterThanEqualTo(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "abs(a*b)>=abs(a*-5)",
    1,
    -2,
    Number(GxBigNumber.greaterThanEqualTo(2, 5)).toString(),
    "0",
    ""
  ],
  [
    "a>=b",
    2,
    2,
    Number(GxBigNumber.greaterThanEqualTo(2, 2)).toString(),
    "0",
    ""
  ],
  [
    "abs(a*b)>=abs(a*-2)",
    1,
    -2,
    Number(GxBigNumber.greaterThanEqualTo(2, 2)).toString(),
    "0",
    ""
  ],

  ["a<=b", 1, 2, Number(GxBigNumber.lessThanEqualTo(1, 2)).toString(), "0", ""],
  [
    "abs(a*b)<=1",
    1,
    -2,
    Number(GxBigNumber.lessThanEqualTo(2, 1)).toString(),
    "0",
    ""
  ],
  [
    "a*b<=1",
    1,
    -2,
    Number(GxBigNumber.lessThanEqualTo(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "(a*b)<=1",
    1,
    -2,
    Number(GxBigNumber.lessThanEqualTo(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "(a*b)<=(1)",
    1,
    -2,
    Number(GxBigNumber.lessThanEqualTo(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "a*b<=(1)",
    1,
    -2,
    Number(GxBigNumber.lessThanEqualTo(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "(a)*(b)<=(1)",
    1,
    -2,
    Number(GxBigNumber.lessThanEqualTo(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "abs(a*b)<=abs(a*-5)",
    1,
    -2,
    Number(GxBigNumber.lessThanEqualTo(2, 5)).toString(),
    "0",
    ""
  ],
  ["a<=b", 2, 2, Number(GxBigNumber.lessThanEqualTo(2, 2)).toString(), "0", ""],
  [
    "abs(a*b)<=abs(a*-2)",
    1,
    -2,
    Number(GxBigNumber.lessThanEqualTo(2, 2)).toString(),
    "0",
    ""
  ],

  ["a<>b", 1, 2, Number(GxBigNumber.differentThan(1, 2)).toString(), "0", ""],
  [
    "abs(a*b)<>1",
    1,
    -2,
    Number(GxBigNumber.differentThan(2, 1)).toString(),
    "0",
    ""
  ],
  [
    "a*b<>1",
    1,
    -2,
    Number(GxBigNumber.differentThan(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "(a*b)<>1",
    1,
    -2,
    Number(GxBigNumber.differentThan(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "(a*b)<>(1)",
    1,
    -2,
    Number(GxBigNumber.differentThan(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "a*b<>(1)",
    1,
    -2,
    Number(GxBigNumber.differentThan(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "(a)*(b)<>(1)",
    1,
    -2,
    Number(GxBigNumber.differentThan(-2, 1)).toString(),
    "0",
    ""
  ],
  [
    "abs(a*b)<>abs(a*-5)",
    1,
    -2,
    Number(GxBigNumber.differentThan(2, 5)).toString(),
    "0",
    ""
  ],
  ["a<>b", 2, 2, Number(GxBigNumber.differentThan(2, 2)).toString(), "0", ""],
  [
    "abs(a*b)<>abs(a*-2)",
    1,
    -2,
    Number(GxBigNumber.differentThan(2, 2)).toString(),
    "0",
    ""
  ],
  ["(a<>b)", 1, 2, Number(GxBigNumber.differentThan(1, 2)).toString(), "0", ""],

  //AND O OR
  [
    "iif( a < b and a+1 <b , a , 0)",
    1,
    2,
    iif(1 < 2 && 2 < 2, 1, 0).toString(),
    "0",
    ""
  ], // 1<2 and 2<2 ==> 0
  [
    "iif( a < b or a+1 <b , a , 0)",
    1,
    2,
    iif(1 < 2 || 2 < 2, 1, 0).toString(),
    "0",
    ""
  ], // 1<2 and 2<2 ==> 0
  [
    "iif( a < b and a+1 <b and  a+1 <b, a , 0)",
    1,
    2,
    iif(1 < 2 && 2 < 2 && 2 < 2, 1, 0).toString(),
    "0",
    ""
  ], // 1<2 and 2<2 ==> 0
  [
    "iif( a < b and b+1 >b , a , 0)",
    1,
    2,
    iif(1 < 2 && 3 > 2, 1, 0).toString(),
    "0",
    ""
  ], // 1<2 and 2<2 ==> 0
  [
    "iif( a < b and b+1 >b and a>b, a , 0)",
    1,
    2,
    iif(1 < 2 && 3 > 2 && 1 > 2, 1, 0).toString(),
    "0",
    ""
  ], // 1<2 and 2<2 ==> 0
  [
    "iif( a < b or a+1 <b , a , 0)",
    1,
    2,
    iif(1 < 2 || 2 < 2, 1, 0).toString(),
    "0",
    ""
  ] // 1<2 and 2<2 ==> 0
];

export const testExpression5: Array<[string, string, any, string, string]> = [
  ["cos(a)", "90", Math.cos(90).toString(), "0", ""],
  ["exp(a)", "0", Math.exp(0).toString(), "0", ""],
  ["ln(exp(a))", "0", Math.log(Math.exp(0)).toString(), "0", ""],
  ["a*pi", "2", multiply(2, Math.PI).toString(), "0", ""],
  [
    "sin(a) + asin(a)+cos(a)+acos(a) + tan(a)+atan(a)",
    "1",
    add(
      add(
        add(add(add(Math.sin(1), Math.asin(1)), Math.cos(1)), Math.acos(1)),
        Math.tan(1)
      ),
      Math.atan(1)
    ).toString(),
    "0",
    ""
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
    ).toString(),
    "0",
    ""
  ],
  [
    "abs(a) + integer(a) + frac(a)",
    "2.5",
    add(
      add(absBigNumber(2.5), integerBigNumber(2.5)),
      fracBigNumber(2.5)
    ).toString(),
    "0",
    ""
  ]
];

export const testExpression6: Array<[
  string,
  string,
  string,
  any,
  string,
  string
]> = [
  [
    "50*cos(a)*sin(b)",
    "1",
    "2",
    multiply(multiply(50, Math.cos(1)), Math.sin(2)).toString(),
    "0",
    ""
  ],
  [
    "pow(2,3)+max(a,b)+min(a,b)",
    "1",
    "2",
    add(add(Math.pow(2, 3), Math.max(1, 2)), Math.min(1, 2)).toString(),
    "0",
    ""
  ],
  [
    "cos(a)*sin(b)",
    "1",
    "2",
    multiply(Math.cos(1), Math.sin(2)).toString(),
    "0",
    ""
  ]
];

export const testExpression7: Array<[
  string,
  string,
  string,
  string,
  any,
  string,
  string
]> = [
  ["a*b+c", "1", "2", "3", add(multiply(1, 2), 3).toString(), "0", ""],
  [
    "a*(b+c)/100",
    "1",
    "2",
    "3",
    multiply(1, divide(add(2, 3), 100)).toString(),
    "0",
    ""
  ],
  [
    "round( a + b + c,0)",
    "1",
    "2",
    "3",
    roundBigNumber(add(add(1, 2), 3), 0).toString(),
    "0",
    ""
  ],
  [
    "tan( b + a * b + c)",
    "1",
    "2",
    "3",
    Math.tan(
      GxBigNumber.convertBigNumberToNumber(add(add(2, multiply(1, 2)), 3))
    ).toString(),
    "0",
    ""
  ],
  [
    "floor( a * b + c)",
    "1",
    "2",
    "3",
    Math.floor(
      GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3))
    ).toString(),
    "0",
    ""
  ],
  [
    "abs( a * b + c)",
    "1",
    "2",
    "3",
    absBigNumber(add(multiply(1, 2), 3)).toString(),
    "0",
    ""
  ],
  [
    "integer( a * b + c)",
    "1",
    "2",
    "3",
    integerBigNumber(add(multiply(1, 2), 3)).toString(),
    "0",
    ""
  ],
  ["iif( a < b , a , c)", "1", "2", "3", iif(1 < 2, 1, 3).toString(), "0", ""],
  [
    "sqrt( a * b + c )",
    "1",
    "2",
    "3",
    Math.sqrt(
      GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3))
    ).toString(),
    "0",
    ""
  ],
  [
    "10*log( a * b + c)",
    "1",
    "2",
    "3",
    multiply(
      10,
      Math.log(GxBigNumber.convertBigNumberToNumber(add(multiply(1, 2), 3)))
    ).toString(),
    "0",
    ""
  ],
  [
    "abs(-(a * b + c ))",
    "1",
    "2",
    "3",
    absBigNumber(-add(multiply(1, 2), 3)).toString(),
    "0",
    ""
  ]
];

export const testExpression8: Array<[
  string,
  string,
  number,
  number,
  any,
  string,
  string
]> = [
  [
    "iif(operator01='+',a+b,0)",
    "'+'",
    2,
    3,
    iif("+" === "+", 2 + 3, 0).toString(),
    "0",
    ""
  ],
  [
    "iif(operator01='-',a+b,iif(operator01='+',5,0))",
    "'+'",
    1,
    1,
    String(5),
    "0",
    ""
  ],
  [
    "iif(operator01='*',a*b,0)",
    "'*'",
    2,
    3,
    iif("*" === "*", 2 * 3, 0).toString(),
    "0",
    ""
  ],
  [
    "iif(operator01<>'TEST',a+b,a*b)",
    "'TEST'",
    2,
    3,
    iif("TEST" !== "TEST", 2 + 3, 2 * 3).toString(),
    "0",
    ""
  ],
  [
    "iif(operator01<>'TEST012',a+b,a*b)",
    "'TEST45'",
    2,
    3,
    iif(String("TEST45") !== String("TEST012"), 2 + 3, 2 * 3).toString(),
    "0",
    ""
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
    ).toString(),
    "0",
    ""
  ],
  [
    "iif(2<>3,a+b,a*b)",
    "'TEST'",
    2,
    3,
    iif(Number(2) !== Number(3), 2 + 3, 2 * 3).toString(),
    "0",
    ""
  ],
  [
    "iif((a<>b)<>'TEST',a+b,a*b)",
    "'TEST'",
    2,
    3,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif('TEST'<>(a<>b),a+b,a*b)",
    "'TEST'",
    2,
    3,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  [
    "iif('TEST'<>(a<>b) and (a<>b)<>'TEST' and operator01<>'TEST' and (a<>b)<>'TEST' and (a<>b)<>(a<>b) and (a)<>(b) and a<>b ,a+b,a*b)",
    "'TEST'",
    2,
    3,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  [
    "iif((a<>b)<>'TEST' and (a<>b)<>(a<>b) and (a)<>(b) and a<>b ,a+b,a*b)",
    "'TEST'",
    2,
    3,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  [
    "iif(operator01='-',a+b,iif(operator01='+',5,0))",
    "'+'",
    1,
    1,
    iif(String("+") === String("-"), 2 + 3, iif("+" === "+", 5, 0)).toString(),
    "0",
    ""
  ],
  [
    "iif(operator01='-',a+b,iif(operator01='+',5,0))",
    "'+'",
    1,
    1,
    String(5),
    "0",
    ""
  ],

  [
    "abs(-(a * b + 7 )) + iif(operator01='-',2,5) ",
    "'-'",
    1,
    2,
    add(
      absBigNumber(-add(multiply(1, 2), 7)),
      iif("-" === "-", 2, 5)
    ).toString(),
    "0",
    ""
  ],
  [
    "abs(-(a * b + 7 )) + iif(operator01='-',2,5) ",
    "'-'",
    1,
    2,
    (11).toString(),
    "0",
    ""
  ],

  [
    "iif(operator01='+',1,7) + iif(operator01='-',2,5)",
    "'-'",
    1,
    2,
    (9).toString(),
    "0",
    ""
  ],
  [
    "iif(operator01<=6,a+b,0)",
    "4",
    2,
    3,
    iif(Number(4) <= Number(6), 2 + 3, 0).toString(),
    "0",
    ""
  ],
  [
    "iif(operator01<='6hj',a+b,0)",
    "4",
    2,
    3,
    "0",
    "5",
    "Execute Method not found"
  ],
  [
    "iif(operator01<=6,a+b,0)",
    "'4hj'",
    2,
    3,
    "0",
    "5",
    "Execute Method not found"
  ],
  [
    "iif(operator01<='TEST',a+b,0)",
    "'TEST'",
    2,
    3,
    "0",
    "5",
    "Execute Method not found"
  ],
  [
    "iif(operator01<6,a+b,0)",
    "4",
    2,
    3,
    iif(Number(4) < Number(6), 2 + 3, 0).toString(),
    "0",
    ""
  ],
  [
    "iif(operator01<'TEST',a+b,0)",
    "'TEST'",
    2,
    3,
    "0",
    "5",
    "Execute Method not found"
  ],
  [
    "iif(operator01>=6,a+b,0)",
    "4",
    2,
    3,
    iif(Number(4) >= Number(6), 2 + 3, 0).toString(),
    "0",
    ""
  ],
  [
    "iif(operator01>='TEST',a+b,0)",
    "'TEST'",
    2,
    3,
    "0",
    "5",
    "Execute Method not found"
  ],
  [
    "abs(a)>b",
    "4",
    2,
    1,
    Number(GxBigNumber.greaterThan(2, 1)).toString(),
    "0",
    ""
  ],
  [
    "iif(operator01>6,a+b,0)",
    "4",
    2,
    3,
    iif(Number(4) > Number(6), 2 + 3, 0).toString(),
    "0",
    ""
  ],
  [
    "iif(operator01>'TEST',a+b,0)",
    "'TEST'",
    2,
    3,
    "0",
    "5",
    "Execute Method not found"
  ],
  [
    "iif ( ( a >= 0 ) AND ( b > a ), a, b )",
    "'TEST'",
    2,
    3,
    iif(
      GxBigNumber.greaterThanEqualTo(2, 0) && GxBigNumber.greaterThan(3, 2),
      2,
      3
    ).toString(),
    "0",
    ""
  ],
  [
    "iif((a>=0) AND (b>a), a, b )",
    "'TEST'",
    2,
    3,
    iif(
      GxBigNumber.greaterThanEqualTo(2, 0) && GxBigNumber.greaterThan(3, 2),
      2,
      3
    ).toString(),
    "0",
    ""
  ],
  [
    "iif ( ( ( a + 1 ) / 2 >= 0 ) AND ( cos(b) > a ), a, b )",
    "'TEST'",
    2,
    3,
    iif(
      GxBigNumber.greaterThanEqualTo(divide(add(2, 1), 2), 0) &&
        GxBigNumber.greaterThan(Math.cos(3), 2),
      2,
      3
    ).toString(),
    "0",
    ""
  ],
  [
    "iif((a>=0, a, b )",
    "'TEST'",
    2,
    3,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(a>=0), a, b )",
    "'TEST'",
    2,
    3,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(((a>=0, a, b )",
    "'TEST'",
    2,
    3,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(((a>=0), a, b )",
    "'TEST'",
    2,
    3,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["iif(((a>=0)), a, b )", "'TEST'", 2, 3, "2", "0", ""],
  ["iif(a>=0, a+b, b )", "'TEST'", 2, 3, "5", "0", ""],
  ["iif(a>=0, a-b, b )", "'TEST'", 2, 3, "-1", "0", ""],
  ["iif(a>=0,-a,b)", "'TEST'", 2, 3, "-2", "0", ""],
  ["iif(a>=0,+a,b)", "'TEST'", 2345, 3, "2345", "0", ""],
  ["iif(a<=0,+a,b)", "'TEST'", -2, 3, "-2", "0", ""],
  ["iif(((a>=0)), -a, b )", "'TEST'", -2, 3, "3", "0", ""],
  ["iif(((a>=0)), -(-a), b )", "'TEST'", -2, 3, "3", "0", ""],
  ["iif(((a<=0)), -(-a), b )", "'TEST'", -2, 3, "-2", "0", ""],
  ["iif(a>=0,-(a),b)", "'TEST'", 2, 3, "-2", "0", ""],
  ["iif(a>=0,+(a),b)", "'TEST'", 2345, 3, "2345", "0", ""],
  ["iif(a>=0,+-(a),b)", "'TEST'", 2345, 3, "-2345", "0", ""],
  ["iif(a<=0,(+a),b)", "'TEST'", -2, 3, "-2", "0", ""],
  ["iif(((a>=0)), (-a), b )", "'TEST'", -2, 3, "3", "0", ""],
  ["iif(((a>=0)), (-(-a)), b )", "'TEST'", -2, 3, "3", "0", ""],
  ["iif(((a<=0)), -(-(a)), b )", "'TEST'", -2, 3, "-2", "0", ""],
  ["iif(((a<=0)), (-(-(a))), b )", "'TEST'", -2, 3, "-2", "0", ""],
  ["iif(((a<=0)), (-(-(a+b))), b )", "'TEST'", -2, 3, "1", "0", ""],
  ["iif(((a<=0)), (-(-(a+b)-1)), b )", "'TEST'", -2, 3, "2", "0", ""],
  ["iif(((a<=0)), (-(-(a+b)-1+(-b))), b )", "'TEST'", -2, 3, "5", "0", ""],
  ["iif(((a>=0)), (-(-(a+b)-1+(-b))), -b )", "'TEST'", -2, 3, "-3", "0", ""],
  ["iif(a>=0, 3, -b )", "'TEST'", -2, 3, "-3", "0", ""],
  ["iif(((a>=0)), (-(-(a+b)-1+(-b))), -(b) )", "'TEST'", -2, 3, "-3", "0", ""],
  [
    "iif(((a>=0)), (-(-(a+b)-1+(-b))), -((b)) )",
    "'TEST'",
    -2,
    3,
    "-3",
    "0",
    ""
  ],
  [
    "iif(((a>=0)), (-(-(a+b)-1+(-b))), -(b+1) )",
    "'TEST'",
    -2,
    3,
    "-4",
    "0",
    ""
  ],
  [
    "iif(((a>=0)), (-(-(a+b)-1+(-b))), -((b)+1) )",
    "'TEST'",
    -2,
    3,
    "-4",
    "0",
    ""
  ],
  [
    "iif(((a>=0)), (-(-(a+b)-1+(-b))), -(-(b)+1) )",
    "'TEST'",
    -2,
    3,
    "2",
    "0",
    ""
  ],
  [
    "iif(((a>=0)), (-(-(a+b)-1+(-b))), -(--b+1) )",
    "'TEST'",
    -2,
    3,
    "-4",
    "0",
    ""
  ],
  ["iif(((a>=0)), (-(-(a+b)-1+(-b))), -(+b) )", "'TEST'", -2, 3, "-3", "0", ""],
  ["iif(((a>=0)), (-(-(a+b)-1+(-b))), (-b) )", "'TEST'", -2, 3, "-3", "0", ""],
  [
    "iif(((a>=0)), (-(-(a+b)-1+(-b))), (-(+b)) )",
    "'TEST'",
    -2,
    3,
    "-3",
    "0",
    ""
  ],
  [
    "iif(((-a>=0)), (-(-(a+b)-1+(-b))), (-(+b)) )",
    "'TEST'",
    -2,
    3,
    "5",
    "0",
    ""
  ],
  ["iif(-a>=-4, 1, 2)", "'TEST'", -2, 3, "1", "0", ""],
  ["iif(-a>-4, 1, 2)", "'TEST'", -2, 3, "1", "0", ""],
  ["iif(-a=-4, 1, 2)", "'TEST'", -2, 3, "2", "0", ""],
  ["iif(a*-2=-4, 1, 2)", "'TEST'", -2, 3, "2", "0", ""],
  ["iif(-a<=-4, 1, 2)", "'TEST'", -2, 3, "2", "0", ""],
  ["iif(-a<-4, 1, 2)", "'TEST'", -2, 3, "2", "0", ""]
];

export const testExpression9: Array<[
  string,
  number,
  number,
  string,
  any,
  string,
  string
]> = [
  ["a1+b1+c1", 1, 2, "3", add(add(1, 2), 3).toString(), "0", ""],
  [
    "a1+b1+c1",
    1,
    2,
    "'+'",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ]
];

export const testExpression10: Array<[
  string,
  number,
  number,
  any,
  string,
  string
]> = [
  ["a+b", 1, 2, add(1, 2).toString(), "0", ""],
  [
    "+",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  [
    "abs()",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["abs(a)", -1, 2, absBigNumber(-1).toString(), "0", ""],
  [
    "abs(    )",
    1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["abs(  a  )", -1, 2, absBigNumber(-1).toString(), "0", ""],
  ["abs(cos(a))", 90, 2, absBigNumber(Math.cos(90)).toString(), "0", ""],
  ["abs(cos(a))", -90, 2, absBigNumber(Math.cos(-90)).toString(), "0", ""],
  ["abs(-cos(a))", 90, 2, absBigNumber(-Math.cos(90)).toString(), "0", ""],
  [
    "abs(-cos(a)+cos(a))",
    90,
    2,
    absBigNumber(add(-Math.cos(90), Math.cos(90))).toString(),
    "0",
    ""
  ],
  [
    "abs(-cos(a)-sin(a))",
    90,
    2,
    absBigNumber(subtract(-Math.cos(90), Math.sin(90))).toString(),
    "0",
    ""
  ],
  [
    "abs(-cos(a)+sin(a))",
    90,
    2,
    absBigNumber(add(-Math.cos(90), Math.sin(90))).toString(),
    "0",
    ""
  ],
  [
    "abs(a,b)",
    -1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "abs(a,b,4)",
    -1,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["abs(abs(a))", 90, 2, absBigNumber(absBigNumber(90)).toString(), "0", ""],
  [
    "abs(integer(a))",
    90,
    2,
    absBigNumber(integerBigNumber(90)).toString(),
    "0",
    ""
  ],
  ["abs(frac(a))", 90, 2, absBigNumber(fracBigNumber(90)).toString(), "0", ""],
  [
    "abs(round(a,1))",
    90.47,
    2,
    absBigNumber(roundBigNumber(90.47, 1)).toString(),
    "0",
    ""
  ],
  [
    "abs(round(a))",
    90.47,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "abs(round(,b))",
    90.47,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "abs(round(b))",
    90.47,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  [
    "abs(round(,))",
    90.47,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(a,)",
    90.47,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(,)",
    90.47,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  [
    "integer()",
    1.2,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["integer(a)", -1.2, 2, integerBigNumber(-1.2).toString(), "0", ""],
  [
    "integer(    )",
    1.2,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["integer(  a  )", -1.2, 2, integerBigNumber(-1.2).toString(), "0", ""],
  [
    "integer(cos(a))",
    90.6,
    2,
    integerBigNumber(Math.cos(90.6)).toString(),
    "0",
    ""
  ],
  [
    "integer(cos(a))",
    -90.6,
    2,
    integerBigNumber(Math.cos(-90.6)).toString(),
    "0",
    ""
  ],
  [
    "integer(-cos(a))",
    90.6,
    2,
    integerBigNumber(-Math.cos(90.6)).toString(),
    "0",
    ""
  ],
  [
    "integer(-cos(a)+cos(a))",
    90.6,
    2,
    integerBigNumber(add(-Math.cos(90.6), Math.cos(90.6))).toString(),
    "0",
    ""
  ],
  [
    "integer(-cos(a)-sin(a))",
    90.6,
    2,
    integerBigNumber(subtract(-Math.cos(90.6), Math.sin(90.6))).toString(),
    "0",
    ""
  ],
  [
    "integer(-cos(a)+sin(a))",
    90.6,
    2,
    integerBigNumber(add(-Math.cos(90.6), Math.sin(90.6))).toString(),
    "0",
    ""
  ],
  [
    "integer(a,b)",
    -90.6,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "integer(a,b,4)",
    -90.6,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "integer(integer(a))",
    90.6,
    2,
    integerBigNumber(integerBigNumber(90.6)).toString(),
    "0",
    ""
  ],
  [
    "integer(abs(a))",
    90.6,
    2,
    integerBigNumber(absBigNumber(90.6)).toString(),
    "0",
    ""
  ],
  [
    "integer(frac(a))",
    90.6,
    2,
    integerBigNumber(fracBigNumber(90.6)).toString(),
    "0",
    ""
  ],
  [
    "integer(round(a,1))",
    90.69,
    2,
    integerBigNumber(roundBigNumber(90.69, 1)).toString(),
    "0",
    ""
  ],
  [
    "integer(round(a,1,3))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "integer(round(a))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "integer(round())",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "integer(round(      ))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "integer(round(c))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  [
    "frac()",
    1.2,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["frac(a)", -1.2, 2, fracBigNumber(-1.2).toString(), "0", ""],
  [
    "frac(    )",
    1.2,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["frac(  a  )", -1.2, 2, fracBigNumber(-1.2).toString(), "0", ""],
  ["frac(cos(a))", 90.6, 2, fracBigNumber(Math.cos(90.6)).toString(), "0", ""],
  [
    "frac(cos(a))",
    -90.6,
    2,
    fracBigNumber(Math.cos(-90.6)).toString(),
    "0",
    ""
  ],
  [
    "frac(-cos(a))",
    90.6,
    2,
    fracBigNumber(-Math.cos(90.6)).toString(),
    "0",
    ""
  ],
  [
    "frac(-cos(a)+cos(a))",
    90.6,
    2,
    fracBigNumber(add(-Math.cos(90.6), Math.cos(90.6))).toString(),
    "0",
    ""
  ],
  [
    "frac(-cos(a)-sin(a))",
    90.6,
    2,
    fracBigNumber(subtract(-Math.cos(90.6), Math.sin(90.6))).toString(),
    "0",
    ""
  ],
  [
    "frac(-cos(a)+sin(a))",
    90.6,
    2,
    fracBigNumber(add(-Math.cos(90.6), Math.sin(90.6))).toString(),
    "0",
    ""
  ],
  [
    "frac(a,b)",
    -90.6,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "frac(a,b,4)",
    -90.6,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "frac(frac(a))",
    90.6,
    2,
    fracBigNumber(fracBigNumber(90.6)).toString(),
    "0",
    ""
  ],
  [
    "frac(abs(a))",
    90.6,
    2,
    fracBigNumber(absBigNumber(90.6)).toString(),
    "0",
    ""
  ],
  [
    "frac(integer(a))",
    90.6,
    2,
    fracBigNumber(integerBigNumber(90.6)).toString(),
    "0",
    ""
  ],
  [
    "frac(round(a,1))",
    90.64,
    2,
    fracBigNumber(roundBigNumber(90.64, 1)).toString(),
    "0",
    ""
  ],
  [
    "frac(round(a,1,3))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "frac(round(a))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "frac(round())",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "frac(round(      ))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "frac(round(c))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  [
    "round()",
    1.2,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(a)",
    -1.2,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(    )",
    1.2,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(  a  )",
    -1.2,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["round(a,b)", 90.68, 1, roundBigNumber(90.68, 1).toString(), "0", ""],
  ["round(   a,b   )", 90.68, 1, roundBigNumber(90.68, 1).toString(), "0", ""],
  [
    "round(   a  ,  b   )",
    90.68,
    1,
    roundBigNumber(90.68, 1).toString(),
    "0",
    ""
  ],
  [
    "round(cos(a),1)",
    150,
    1,
    roundBigNumber(Math.cos(150), 1).toString(),
    "0",
    ""
  ],
  [
    "round(cos(a),1)",
    -150,
    1,
    roundBigNumber(Math.cos(-150), 1).toString(),
    "0",
    ""
  ],
  [
    "round(cos(a)+sin(a),1)",
    150,
    1,
    roundBigNumber(add(Math.cos(150), Math.sin(150)), 1).toString(),
    "0",
    ""
  ],
  [
    "round(cos(a)-sin(a),1)",
    150,
    1,
    roundBigNumber(subtract(Math.cos(150), Math.sin(150)), 1).toString(),
    "0",
    ""
  ],
  [
    "round(-cos(a)+sin(a),1)",
    150,
    1,
    roundBigNumber(add(-Math.cos(150), Math.sin(150)), 1).toString(),
    "0",
    ""
  ],
  [
    "round(-cos(a)-sin(a),1)",
    150,
    1,
    roundBigNumber(subtract(-Math.cos(150), Math.sin(150)), 1).toString(),
    "0",
    ""
  ],
  [
    "round(a+1.5,1+b)",
    150,
    1,
    roundBigNumber(add(150, 1.5), add(1, 1)).toString(),
    "0",
    ""
  ],
  [
    "round(cos(a),1+b)",
    150,
    1,
    roundBigNumber(Math.cos(150), add(1, 1)).toString(),
    "0",
    ""
  ],
  [
    "(round(cos(a),1+b))",
    150,
    1,
    roundBigNumber(Math.cos(150), add(1, 1)).toString(),
    "0",
    ""
  ],
  [
    "(round(cos(a),1+b)) + integer(6)",
    150,
    1,
    add(
      roundBigNumber(Math.cos(150), add(1, 1)),
      integerBigNumber(6)
    ).toString(),
    "0",
    ""
  ],
  [
    "(round(cos(a),1+b)) + (integer(6))",
    150,
    1,
    add(
      roundBigNumber(Math.cos(150), add(1, 1)),
      integerBigNumber(6)
    ).toString(),
    "0",
    ""
  ],
  [
    "((round(cos(a),1+b)) + (integer(6)))",
    150,
    1,
    add(
      roundBigNumber(Math.cos(150), add(1, 1)),
      integerBigNumber(6)
    ).toString(),
    "0",
    ""
  ],
  [
    "round(cos(a),1+b) + (integer(6))",
    150,
    1,
    add(
      roundBigNumber(Math.cos(150), add(1, 1)),
      integerBigNumber(6)
    ).toString(),
    "0",
    ""
  ],
  [
    "round(cos(a),(1+b)) + (integer(6))",
    150,
    1,
    add(
      roundBigNumber(Math.cos(150), add(1, 1)),
      integerBigNumber(6)
    ).toString(),
    "0",
    ""
  ],
  [
    "round((cos(a)),(1+b)) + (integer(6))",
    150,
    1,
    add(
      roundBigNumber(Math.cos(150), add(1, 1)),
      integerBigNumber(6)
    ).toString(),
    "0",
    ""
  ],
  [
    "(round((cos(a)),(1+b))) + (integer(6))",
    150,
    1,
    add(
      roundBigNumber(Math.cos(150), add(1, 1)),
      integerBigNumber(6)
    ).toString(),
    "0",
    ""
  ],
  ["integer((6))", 150, 1, integerBigNumber(6).toString(), "0", ""],
  [
    "(round((cos(a)),(1+b))) + (integer((6)))",
    150,
    1,
    add(
      roundBigNumber(Math.cos(150), add(1, 1)),
      integerBigNumber(6)
    ).toString(),
    "0",
    ""
  ],
  [
    "((round((cos(a)),(1+b))) + (integer((6))))",
    150,
    1,
    add(
      roundBigNumber(Math.cos(150), add(1, 1)),
      integerBigNumber(6)
    ).toString(),
    "0",
    ""
  ],
  [
    "1+round(cos(a),1+b)",
    150,
    1,
    add(1, roundBigNumber(Math.cos(150), add(1, 1))).toString(),
    "0",
    ""
  ],
  [
    "round(cos(a)+sin(a),1+b)",
    150,
    1,
    roundBigNumber(add(Math.cos(150), Math.sin(150)), add(1, 1)).toString(),
    "0",
    ""
  ],
  [
    "round(a,b,3)",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(a,b,3,4)",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["round(b,b)", 90.68, 1, roundBigNumber(1, 1).toString(), "0", ""],
  [
    "round(cos(a)+sin(a),integer(1.2+b))",
    150,
    1,
    roundBigNumber(
      add(Math.cos(150), Math.sin(150)),
      integerBigNumber(add(1.2, 1))
    ).toString(),
    "0",
    ""
  ],
  [
    "round(cos(a)+sin(a),integer(1.2))",
    150,
    1,
    roundBigNumber(
      add(Math.cos(150), Math.sin(150)),
      integerBigNumber(1.2)
    ).toString(),
    "0",
    ""
  ],
  [
    "round(cos(a)+sin(a),integer(1.2))",
    150,
    1,
    roundBigNumber(
      add(Math.cos(150), Math.sin(150)),
      integerBigNumber(1.2)
    ).toString(),
    "0",
    ""
  ],
  [
    "round(abs(a),1)",
    90.68,
    1,
    roundBigNumber(absBigNumber(90.68), 1).toString(),
    "0",
    ""
  ],
  [
    "round(abs(a),abs(1))",
    90.68,
    1,
    roundBigNumber(absBigNumber(90.68), absBigNumber(1)).toString(),
    "0",
    ""
  ],
  [
    "round(abs(a),integer(1))",
    90.68,
    1,
    roundBigNumber(absBigNumber(90.68), integerBigNumber(1)).toString(),
    "0",
    ""
  ],
  [
    "round(integer(a),1)",
    90.68,
    1,
    roundBigNumber(integerBigNumber(90.68), 1).toString(),
    "0",
    ""
  ],
  [
    "round(integer(a),integer(1))",
    90.68,
    1,
    roundBigNumber(integerBigNumber(90.68), integerBigNumber(1)).toString(),
    "0",
    ""
  ],
  [
    "round(integer(a),frac(1))",
    90.68,
    1,
    roundBigNumber(integerBigNumber(90.68), fracBigNumber(1)).toString(),
    "0",
    ""
  ],
  [
    "round(frac(a),1)",
    90.68,
    1,
    roundBigNumber(fracBigNumber(90.68), 1).toString(),
    "0",
    ""
  ],
  [
    "round(frac(a),frac(1))",
    90.68,
    1,
    roundBigNumber(fracBigNumber(90.68), fracBigNumber(1)).toString(),
    "0",
    ""
  ],
  [
    "round(frac(a),round(1.5,0))",
    90.68,
    1,
    roundBigNumber(fracBigNumber(90.68), roundBigNumber(1.5, 0)).toString(),
    "0",
    ""
  ],
  [
    "round(round(a,1),round(1.5,0))",
    90.68,
    1,
    roundBigNumber(roundBigNumber(90.68, 1), roundBigNumber(1.5, 0)).toString(),
    "0",
    ""
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs(0.5))),round(frac(1.5),0))",
    90.68,
    1,
    roundBigNumber(
      roundBigNumber(
        absBigNumber(roundBigNumber(90.68, 1)),
        integerBigNumber(add(1, absBigNumber(0.5)))
      ),
      roundBigNumber(fracBigNumber(1.5), 0)
    ).toString(),
    "0",
    ""
  ],
  [
    "round(round(abs(round(a,1)),),round(frac(1.5),0))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(a,1,3))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(a))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round())",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(      ))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(c))",
    90.69,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer()),round(frac(1.5),0))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs())),round(frac(1.5),0))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs(-0.5))),round(frac(1.5,7),0))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs())),round(frac(1.5),0))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs())),round())",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs())),abs())",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  [
    "abs(round(a,))",
    90.47,
    2,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(,integer(1+abs(0.5))),round(frac(1.5),0))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(,round(frac(1.5),0))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(5,round(frac(1.5),0))",
    90.68,
    1,
    roundBigNumber(5, roundBigNumber(fracBigNumber(1.5), 0)).toString(),
    "0",
    ""
  ],
  [
    "round(round(abs(round(a,)),integer(1+abs(0.5))),round(frac(1.5),0))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs(0.5))),)",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs(0.5))),round(frac(1.5)))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs(0.5))),round(,0))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs(0.5))),round(frac(1.5),))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs(0.5))),round(,0))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs(-0.5))),round(frac(1.5)))",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "round(round(abs(round(a,1)),integer(1+abs(0.5))),integer())",
    90.68,
    1,
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],

  [
    "integer(round(a,1))",
    90.69,
    2,
    integerBigNumber(roundBigNumber(90.69, 1)).toString(),
    "0",
    ""
  ],
  ["PI", 90.69, 2, Math.PI.toString(), "0", ""],
  ["pi", 90.69, 2, Math.PI.toString(), "0", ""],
  ["PI+PI", 90.69, 2, add(Math.PI, Math.PI).toString(), "0", ""],
  ["pi+pi", 90.69, 2, add(Math.PI, Math.PI).toString(), "0", ""],
  ["round(pi,2)", 90.68, 1, roundBigNumber(Math.PI, 2).toString(), "0", ""],
  [
    "round(round(pi,5),2)",
    90.68,
    1,
    roundBigNumber(roundBigNumber(Math.PI, 5), 2).toString(),
    "0",
    ""
  ],
  [
    "integer(round(round(pi,5),2))",
    90.68,
    1,
    integerBigNumber(roundBigNumber(roundBigNumber(Math.PI, 5), 2)).toString(),
    "0",
    ""
  ],
  [
    "round(pi,b)+integer(pi)",
    90.69,
    2,
    add(roundBigNumber(Math.PI, 2), integerBigNumber(Math.PI)).toString(),
    "0",
    ""
  ],
  [
    "abs(round(pi,b)+integer(pi))",
    90.69,
    2,
    absBigNumber(
      add(roundBigNumber(Math.PI, 2), integerBigNumber(Math.PI))
    ).toString(),
    "0",
    ""
  ],
  [
    "round(round(pi,b)+integer(pi),b)",
    90.69,
    2,
    roundBigNumber(
      add(roundBigNumber(Math.PI, 2), integerBigNumber(Math.PI)),
      2
    ).toString(),
    "0",
    ""
  ]
];

export const testExpression11: Array<[
  string,
  number,
  number,
  any,
  string,
  string
]> = [["A+B", 1, 2, add(1, 2).toString(), "0", ""]];

export const testExpression12: Array<[string, string, string, string]> = [
  [
    "alert('Test')",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "console.log('Test')",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "document.body.innerHTML = '<h1>Test</h1>'",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "window.location = 'https://www.genexus.com/'",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "console.log(document.cookie)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "while(true) {}",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["abs(-1)", "1", "0", ""],
  [
    "abs(alert('Test'))",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "abs('alert('Test')')",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(1=1,alert('Test'),1)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(1=1,console.log('Test'),1)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(1=1,document.body.innerHTML = '<h1>Test</h1>',1)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(1=1,window.location = 'https://www.genexus.com/',1)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(1=1,console.log(document.cookie),1)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(1=1,while(true) {},1)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif('A'='B',1,window.location = 'https://www.genexus.com/')",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["iif('A'='B',1,4)", "4", "0", ""],
  [
    "iif(A=B,1,4)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["iif(1 ='B',1,4)", "4", "0", ""],
  ["iif(12345 ='B',1,4)", "4", "0", ""],
  ["iif(1.2345 ='B',1,4)", "4", "0", ""],
  [
    "iif(123A45 ='B',1,4)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["iif('A' = 12345,1,4)", "4", "0", ""],
  ["iif('A'=1.2345,1,4)", "4", "0", ""],
  [
    "iif('A'=123A45,1,4)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["iif(1='B',1,4)", "4", "0", ""],
  ["iif('A'=2,1,4)", "4", "0", ""],
  ["iif(1=2,1,4)", "4", "0", ""],
  [
    "iif(1=,1,4)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(=1,1,4)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  ["iif(abs(-2),1,4)", "1", "0", ""],
  ["iif(abs(-2)=2,1,4)", "1", "0", ""],
  ["iif(abs(-2)=6,1,4)", "4", "0", ""],
  ["abs(-2)", "2", "0", ""],
  ["abs(integer(-2.5))", "2", "0", ""],
  ["iif(abs(-2),abs(-2),abs(-2))", "2", "0", ""],
  [
    "iif(abs(alert('Test')),abs(-2),abs(-2))",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(abs(round(alert('Test'),1)),abs(-2),abs(-2))",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(integer(3.15),abs(alert('Test')),abs(-2))",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(integer(3.15),abs(-6),abs(alert('Test')))",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(integer(3.15),abs(-6),abs(integer(alert('Test'))))",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "iif(integer(3.15),abs(-6),abs(integer(iif(alert('Test'),1,2))))",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "abs(-6+alert('Test'))",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "abs(alert('Test')+6)",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ],
  [
    "cos(alert('Test'))",
    "0",
    "3",
    "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
  ]
];

export const testExpression13: Array<[
  string,
  string,
  string,
  string,
  string,
  string,
  string
]> = [
  ["((L-X-239+iif((D=2) or (D=5),9,0))/4)", "2000", "50", "2", "430", "0", ""],
  ["iif((D=2) or (D=5),9,6)", "2000", "50", "2", "9", "0", ""],
  [
    "((L-X-239+iif((D=2) and (D=5),9,0))/4)",
    "2000",
    "50",
    "2",
    "427.75",
    "0",
    ""
  ],
  ["iif((D=2) and (D=5),9,6)", "2000", "50", "2", "6", "0", ""]
];

export const testExpression14: Array<[
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]> = [
  [
    "IIF(G=1,H-Y-25,  H  - IIF( (CMM=1) and (I>1), 12,0 )  )",
    "3.00",
    "2.00",
    "3000",
    "3.00",
    "0",
    "3000",
    "0",
    ""
  ],
  [
    "IIF(G=1,H-Y-25,  H  - IIF( (CMM=1) and (I>1), ((29=40) and (50>34)),0 )  )",
    "3.00",
    "2.00",
    "3000",
    "3.00",
    "0",
    "3000",
    "0",
    ""
  ],
  [
    "IIF(G=1,H-Y-25,  H  - IIF( (CMM=1) or (I>1), 12,0 )  )",
    "3.00",
    "2.00",
    "3000",
    "3.00",
    "0",
    "2988",
    "0",
    ""
  ],
  [
    "IIF(G=1,H-Y-25,  H  - IIF( (CMM=1) or (I<1), ((29=40) or (50>34)),0 )  )",
    "3.00",
    "2.00",
    "3000",
    "3.00",
    "0",
    "3000",
    "0",
    ""
  ]
];

describe("testExpressionErrores1", () => {
  for (const t of testExpressionErrores1) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);
      Expression.Variables.set("b", t[2]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[3]);
      expect(errorCode.toString()).toBe(t[4]);
      expect(errorDescr.toString()).toBe(t[5]);
    });
  }
});

describe("testExpressionErrores2", () => {
  for (const t of testExpressionErrores2) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);
      Expression.Variables.set("b", t[2]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[3]);
      expect(errorCode.toString()).toBe(t[4]);
      expect(errorDescr.toString()).toBe(t[5]);
    });
  }
});

describe("testExpressionErrorCode1", () => {
  for (const t of testExpressionErrorCode1) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);
      Expression.Variables.set("b", t[2]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[3]);
      expect(errorCode.toString()).toBe(t[4]);
      expect(errorDescr.toString()).toBe(t[5]);
    });
  }
});

describe("testExpressionErrorCode2", () => {
  for (const t of testExpressionErrorCode2) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);
      Expression.Variables.set("b", t[2]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[3]);
      expect(errorCode.toString()).toBe(t[4]);
      expect(errorDescr.toString()).toBe(t[5]);
    });
  }
});

describe("Expression", () => {
  for (const t of testExpression1) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);
      Expression.Variables.set("b", t[2]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[3]);
      expect(errorCode.toString()).toBe(t[4]);
      expect(errorDescr.toString()).toBe(t[5]);
    });
  }
});

describe("Expression 2", () => {
  for (const t of testExpression2) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[2]);
      expect(errorCode.toString()).toBe(t[3]);
      expect(errorDescr.toString()).toBe(t[4]);
    });
  }
});

describe("Expression 3", () => {
  for (const t of testExpression3) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);
      Expression.Variables.set("b", t[2]);
      Expression.Variables.set("c", t[3]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[4]);
      expect(errorCode.toString()).toBe(t[5]);
      expect(errorDescr.toString()).toBe(t[6]);
    });
  }
});

describe("Expression 4", () => {
  for (const t of testExpression4) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);
      Expression.Variables.set("b", t[2]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[3]);
      expect(errorCode.toString()).toBe(t[4]);
      expect(errorDescr.toString()).toBe(t[5]);
    });
  }
});

describe("Expression 5", () => {
  for (const t of testExpression5) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[2]);
      expect(errorCode.toString()).toBe(t[3]);
      expect(errorDescr.toString()).toBe(t[4]);
    });
  }
});

describe("Expression 6", () => {
  for (const t of testExpression6) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);
      Expression.Variables.set("b", t[2]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[3]);
      expect(errorCode.toString()).toBe(t[4]);
      expect(errorDescr.toString()).toBe(t[5]);
    });
  }
});

describe("Expression 7", () => {
  for (const t of testExpression7) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);
      Expression.Variables.set("b", t[2]);
      Expression.Variables.set("c", t[3]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[4]);
      expect(errorCode.toString()).toBe(t[5]);
      expect(errorDescr.toString()).toBe(t[6]);
    });
  }
});

describe("testExpression8", () => {
  for (const t of testExpression8) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("operator01", t[1]);
      Expression.Variables.set("a", t[2]);
      Expression.Variables.set("b", t[3]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[4]);
      expect(errorCode.toString()).toBe(t[5]);
      expect(errorDescr.toString()).toBe(t[6]);
    });
  }
});

describe("testExpression9", () => {
  for (const t of testExpression9) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a1", t[1]);
      Expression.Variables.set("b1", t[2]);
      Expression.Variables.set("c1", t[3]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[4]);
      expect(errorCode.toString()).toBe(t[5]);
      expect(errorDescr.toString()).toBe(t[6]);
    });
  }
});

describe("testExpression10", () => {
  for (const t of testExpression10) {
    it(` ==> ${t[0]}`, () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("A", t[1]);
      Expression.Variables.set("B", t[2]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[3]);
      expect(errorCode.toString()).toBe(t[4]);
      expect(errorDescr.toString()).toBe(t[5]);
    });
  }
});

describe("testExpression11", () => {
  for (const t of testExpression11) {
    it(` ==> ${t[0]}`, async () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("a", t[1]);
      Expression.Variables.set("b", t[2]);

      let res = Expression.evaluate();
      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[3]);
      expect(errorCode.toString()).toBe(t[4]);
      expect(errorDescr.toString()).toBe(t[5]);
    });
  }
});

describe("testExpression12", () => {
  for (const t of testExpression12) {
    it(` ==> ${t[0]}`, async () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      let res = Expression.evaluate();

      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[1]);
      expect(errorCode.toString()).toBe(t[2]);
      expect(errorDescr.toString()).toBe(t[3]);
    });
  }
});

describe("testExpression13", () => {
  for (const t of testExpression13) {
    it(` ==> ${t[0]}`, async () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("l", t[1]);
      Expression.Variables.set("x", t[2]);
      Expression.Variables.set("d", t[3]);

      let res = Expression.evaluate();

      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[4]);
      expect(errorCode.toString()).toBe(t[5]);
      expect(errorDescr.toString()).toBe(t[6]);
    });
  }
});

describe("testExpression14", () => {
  for (const t of testExpression14) {
    it(` ==> ${t[0]}`, async () => {
      let Expression = new GxExpression();
      Expression.setExpression(t[0]);
      Expression.Variables.set("I", t[1]);
      Expression.Variables.set("G", t[2]);
      Expression.Variables.set("H", t[3]);
      Expression.Variables.set("Y", t[4]);
      Expression.Variables.set("CMM", t[5]);

      let res = Expression.evaluate();

      let errorCode = Expression.ErrCode;
      let errorDescr = Expression.ErrDescription;

      expect(res.toString()).toBe(t[6]);
      expect(errorCode.toString()).toBe(t[7]);
      expect(errorDescr.toString()).toBe(t[8]);
    });
  }
});
