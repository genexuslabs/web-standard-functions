import { GxBigNumber } from "../types/gxbignumber";

export class GxExpression {
  Expression: string;
  Variables: object;
  ErrCode: number;
  ErrDescription: string;

  constructor() {
    this.Expression = "";
    this.Variables = {};
    this.ErrCode = 0;
    this.ErrDescription = "";
  }

  setExpression(expr) {
    this.Expression = expr;
  }

  setVariables(name, value) {
    this.Variables[name] = value;
  }

  setErrCode(num) {
    this.ErrCode = num;
  }

  setErrDescription(text) {
    this.ErrDescription = text;
  }

  public static evaluate(exp: GxExpression) {
    let expr = exp.Expression;

    if (expr.trim() !== "") {
      for (let name in exp.Variables) {
        const regex = new RegExp(`\\b${name}\\b`, "gi");
        expr = expr.replace(regex, exp.Variables[name]);
      }

      let safe = expr;

      try {
        if (expr.toLowerCase().indexOf("iif") !== -1) {
          let regexIif = /iif\(/gi;
          let res = [];
          let matchIf;

          while ((matchIf = regexIif.exec(expr)) !== null) {
            let start = matchIf.index + 4;
            let openBrackets = 1;
            let finish = start;

            while (openBrackets > 0 && finish < expr.length) {
              if (expr[finish] === "(") openBrackets++;
              if (expr[finish] === ")") openBrackets--;
              finish++;
            }

            if (openBrackets === 0) {
              res.push(expr.slice(start, finish - 1));
            }

            regexIif.lastIndex = finish;
          }

          let i = res.length - 1;
          while (res && i >= 0) {
            safe = safe.replace(res[i].toString(), "");
            i--;
          }
        }

        expr = replaceOperations(exp, expr);

        if (exp.ErrCode === 0) {
          const regexFunciones = /\b(\w+)\s*\(/g;

          const funcAux = [...expr.matchAll(regexFunciones)].map(match => {
            if (
              match[1] === "greaterThan" ||
              match[1] === "lessThan" ||
              match[1] === "greaterThanEqualTo" ||
              match[1] === "lessThanEqualTo" ||
              match[1] === "differentThan"
            ) {
              return "GxBigNumber";
            } else {
              return match[1];
            }
          });
          const funcToImport = [...new Set(funcAux)];
          const functionGlobal = {};

          funcToImport.forEach(element => {
            const regex = new RegExp(`\\b${element}\\s*\\(`, "g");

            if (functionStandard[element.toLowerCase()] !== "") {
              if (
                element === "add" ||
                element === "subtract" ||
                element === "multiply" ||
                element === "divide" ||
                element.toLowerCase() === "iif" ||
                element === "pow"
              ) {
                const module = require(functionStandard[element.toLowerCase()]);
                functionGlobal[element] = module[element.toLowerCase()];

                safe = safe.replace(regex, "");
              } else if (element === "GxBigNumber") {
                const module = require(functionStandard[element]);
                functionGlobal[element] = module[element];
              } else {
                const module = require(functionStandard[element.toLowerCase()]);
                functionGlobal[element] =
                  module[`${element.toLowerCase()}BigNumber`];
                safe = safe.replace(regex, "");
              }
            } else {
              expr = expr.replace(regex, `Math.${element.toLowerCase()}(`);
              safe = safe.replace(regex, "");
            }
          });

          if (expr.toLowerCase().indexOf("pi") !== -1) {
            expr = expr.replaceAll("pi", `Math.PI`);
            safe = safe.replaceAll("pi", "");
          } else if (expr.toLowerCase().indexOf("ln") !== -1) {
            expr = expr.replaceAll("ln", "log");
          }

          const regex = /^(\s*(\d+(\.\d+)?|,|(\+|-|\*|\/|<>|>|<|>=|<=|and|or|\(|\)))\s*)*$/;
          if (regex.test(safe)) {
            const funAux = new Function(
              ...Object.keys(functionGlobal),
              `return ${expr}`
            );
            let res: GxBigNumber = funAux(...Object.values(functionGlobal));

            return res;
          } else {
            exp.setErrCode(4);
            exp.setErrDescription(
              "Error occurred during execution (EVALUATION_ERROR)"
            );
            return "Error occurred during execution (EVALUATION_ERROR)";
          }
        } else {
          return exp.ErrDescription;
        }
      } catch (err) {
        if (err.message === "Division by zero") {
          exp.setErrCode(4);
          exp.setErrDescription(err.message);
          return err.message;
        } else {
          exp.setErrCode(1);
          exp.setErrDescription(err.message);
          return `Error: ${err.message}`;
        }
      }
    } else {
      exp.setErrCode(3);
      exp.setErrDescription(
        "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
      );
      return `Expression to be evaluated is not well formed (EXPRESSION_ERROR)`;
    }
  }
}

const replaceOperations = (exp, expr) => {
  const parser = (exp, expr) => {
    let parts = [];
    let currentExpr = "";
    let i = 0;
    let openBracketSign = "(";

    while (i < expr.length) {
      let char = expr[i];
      let openBrackets = 0;

      if (char === ")" && openBrackets === 0) {
        exp.setErrCode(3);
        exp.setErrDescription(
          "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
        );
        return `Expression to be evaluated is not well formed (EXPRESSION_ERROR)`;
      } else if (char === "(") {
        let startBrackets = i;
        openBrackets = 1;

        while (openBrackets > 0) {
          if (i === expr.length) {
            break;
          }

          i++;
          if (expr[i] === "(") openBrackets++;
          if (expr[i] === ")") openBrackets--;
        }

        if (openBrackets !== 0) {
          exp.setErrCode(3);
          exp.setErrDescription(
            "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
          );
          return `Expression to be evaluated is not well formed (EXPRESSION_ERROR)`;
        }

        currentExpr +=
          openBracketSign + parser(exp, expr.slice(startBrackets + 1, i)) + ")";
        parts.push(currentExpr.trim());
        currentExpr = "";
      } else if (char === "'") {
        let startComillas = i;
        let openComillas = 1;

        while (openComillas > 0) {
          if (i === expr.length) {
            break;
          }

          i++;
          if (expr[i] === "'") openComillas--;
        }

        if (openComillas !== 0) {
          exp.setErrCode(3);
          exp.setErrDescription(
            "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
          );
          return `Expression to be evaluated is not well formed (EXPRESSION_ERROR)`;
        }

        currentExpr += '"' + expr.slice(startComillas + 1, i) + '"';
        parts.push(currentExpr.trim());
        currentExpr = "";
      } else if (char === "=") {
        if (currentExpr.trim()) {
          parts.push(currentExpr.trim());
        }

        openBracketSign = "(";
        parts.push("===");
        currentExpr = "";
      } else if (char === "*") {
        if (currentExpr.trim()) {
          parts.push(currentExpr.trim());
        }

        openBracketSign = "(";
        parts.push("*");
        currentExpr = "";
      } else if (char === "/") {
        if (currentExpr.trim()) {
          parts.push(currentExpr.trim());
        }

        openBracketSign = "(";
        parts.push("/");
        currentExpr = "";
      } else if (char === ">" && expr[i + 1] === "=") {
        if (currentExpr.trim()) {
          parts.push(currentExpr.trim());
        }

        openBracketSign = "(";
        parts.push(">=");
        currentExpr = "";
        i++;
      } else if (char === "<" && expr[i + 1] === "=") {
        if (currentExpr.trim()) {
          parts.push(currentExpr.trim());
        }

        openBracketSign = "(";
        parts.push("<=");
        currentExpr = "";
        i++;
      } else if (char === "<" && expr[i + 1] === ">") {
        if (currentExpr.trim()) {
          parts.push(currentExpr.trim());
        }

        openBracketSign = "(";
        parts.push("<>");
        currentExpr = "";
        i++;
      } else if (char === ">") {
        if (currentExpr.trim()) {
          parts.push(currentExpr.trim());
        }

        openBracketSign = "(";
        parts.push(">");
        currentExpr = "";
      } else if (char === "<") {
        if (currentExpr.trim()) {
          parts.push(currentExpr.trim());
        }

        openBracketSign = "(";
        parts.push("<");
        currentExpr = "";
      } else if (
        char.toLowerCase() === "a" &&
        expr[i - 1] === " " &&
        expr[i + 1].toLowerCase() === "n" &&
        expr[i + 2].toLowerCase() === "d" &&
        expr[i + 3] === " "
      ) {
        if (currentExpr.trim()) {
          parts.push(currentExpr.trim());
        }

        openBracketSign = "(";
        parts.push(" && ");
        currentExpr = "";
        i++;
        i++;
        i++;
      } else if (
        char.toLowerCase() === "o" &&
        expr[i - 1] === " " &&
        expr[i + 1].toLowerCase() === "r" &&
        expr[i + 2] === " "
      ) {
        if (currentExpr.trim()) {
          parts.push(currentExpr.trim());
        }

        openBracketSign = "(";
        parts.push(" || ");
        currentExpr = "";
        i++;
        i++;
      } else if (char === "+") {
        if (expr[i + 1] === "+" || expr[i + 1] === "-") {
          if (expr[i + 1] === "+") {
            if (currentExpr.trim()) {
              parts.push(currentExpr.trim());
            }

            parts.push("+");
            currentExpr = "";
            i++;
          } else if (expr[i + 1] === "-") {
            if (currentExpr.trim()) {
              parts.push(currentExpr.trim());
            }

            parts.push("-");
            currentExpr = "";
            i++;
          } else {
            if (currentExpr.trim()) {
              parts.push(currentExpr.trim());
            }

            openBracketSign = "(";
            parts.push("+");
            currentExpr = "";
          }
        } else {
          if (currentExpr.trim()) {
            parts.push(currentExpr.trim());
          }

          openBracketSign = "(";
          parts.push("+");
          currentExpr = "";
        }
      } else if (char === "-") {
        if (
          expr[i + 1] === "+" ||
          expr[i + 1] === "-" ||
          (expr[i + 1] === "(" &&
            (expr[i - 1] === "+" ||
              expr[i - 1] === "-" ||
              expr[i - 1] === "*" ||
              expr[i - 1] === "/"))
        ) {
          if (expr[i + 1] === "(") {
            openBracketSign = "-(";
            currentExpr = "";
          } else if (expr[i + 1] === "-") {
            if (currentExpr.trim()) {
              parts.push(currentExpr.trim());
            }

            parts.push("+");
            currentExpr = "";
            i++;
          } else if (expr[i + 1] === "+") {
            if (currentExpr.trim()) {
              parts.push(currentExpr.trim());
            }

            parts.push("-");
            currentExpr = "";
            i++;
          } else {
            if (currentExpr.trim()) {
              parts.push(currentExpr.trim());
            }

            openBracketSign = "(";
            parts.push("-");
            currentExpr = "";
          }
        } else {
          if (currentExpr.trim()) {
            parts.push(currentExpr.trim());
          }

          openBracketSign = "(";
          parts.push("-");
          currentExpr = "";
        }
      } else if (char === ",") {
        if (currentExpr.trim()) {
          parts.push(currentExpr.trim());
        }

        openBracketSign = "(";
        parts.push(",");
        currentExpr = "";
      } else {
        currentExpr += char;
      }

      i++;
    }

    if (currentExpr.trim()) {
      parts.push(currentExpr.trim());
      currentExpr = "";
    }

    while (parts.includes("*")) {
      let index = parts.indexOf("*");
      let leftPart = parts[index - 1];
      let rightPart = parts[index + 1];

      if (rightPart === "-") {
        rightPart = -parts[index + 2];
      } else if (leftPart === "-") {
        leftPart = -parts[index - 2];
      }

      if (rightPart.toString().indexOf("-") === 0) {
        parts.splice(index - 1, 4, `multiply(${leftPart},${rightPart})`);
      } else if (leftPart.toString().indexOf("-") === 0) {
        parts.splice(index - 1, 3, `multiply(${leftPart},${rightPart})`);
      } else if (leftPart === undefined || rightPart === undefined) {
        throw new Error("Error en la expresion falta un operando");
      } else {
        if (
          leftPart === "+" ||
          leftPart === "-" ||
          leftPart === "/" ||
          leftPart === "*" ||
          leftPart === ">" ||
          leftPart === "<" ||
          leftPart === ">=" ||
          leftPart === "<=" ||
          leftPart === "<>" ||
          rightPart === "+" ||
            rightPart === "-" ||
            rightPart === "/" ||
            rightPart === "*" ||
            rightPart === ">" ||
            rightPart === "<" ||
            rightPart === ">=" ||
            rightPart === "<=" ||
            rightPart === "<>"
        ) {
          throw new Error(
            "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
          );
        } else {
          parts.splice(index - 1, 3, `multiply(${leftPart},${rightPart})`);
        }
      }
    }

    while (parts.includes("/")) {
      let index = parts.indexOf("/");
      let leftPart = parts[index - 1];
      let rightPart = parts[index + 1];

      if (leftPart === undefined || rightPart === undefined) {
        throw new Error("Error en la expresion falta un operando");
      }

      if (
        leftPart === "+" ||
        leftPart === "-" ||
        leftPart === "/" ||
        leftPart === "*" ||
        leftPart === ">" ||
        leftPart === "<" ||
        leftPart === ">=" ||
        leftPart === "<=" ||
        leftPart === "<>" ||
        rightPart === "+" ||
          rightPart === "-" ||
          rightPart === "/" ||
          rightPart === "*" ||
          rightPart === ">" ||
          rightPart === "<" ||
          rightPart === ">=" ||
          rightPart === "<=" ||
          rightPart === "<>"
      ) {
        throw new Error(
          "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
        );
      } else {
        parts.splice(index - 1, 3, `divide(${leftPart},${rightPart})`);
      }
    }

    while (parts.includes("-")) {
      let index = parts.indexOf("-");
      let leftPart = parts[index - 1];
      let rightPart = parts[index + 1];

      if (leftPart === undefined && rightPart === undefined) {
        throw new Error("Error en la expresion falta un operando");
      } else if (leftPart === undefined) {
        parts.splice(index, 2, `-${rightPart}`);
      } else {
        if (
          leftPart === "+" ||
          leftPart === "-" ||
          leftPart === "/" ||
          leftPart === "*" ||
          leftPart === ">" ||
          leftPart === "<" ||
          leftPart === ">=" ||
          leftPart === "<=" ||
          leftPart === "<>" ||
          rightPart === "+" ||
            rightPart === "-" ||
            rightPart === "/" ||
            rightPart === "*" ||
            rightPart === ">" ||
            rightPart === "<" ||
            rightPart === ">=" ||
            rightPart === "<=" ||
            rightPart === "<>"
        ) {
          throw new Error(
            "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
          );
        } else {
          parts.splice(index - 1, 3, `subtract(${leftPart},${rightPart})`);
        }
      }
    }

    while (parts.includes("+")) {
      let index = parts.indexOf("+");
      let leftPart = parts[index - 1];
      let rightPart = parts[index + 1];

      if (leftPart === undefined && rightPart === undefined) {
        throw new Error("Error en la expresion falta un operando");
      } else if (leftPart === undefined) {
        parts.splice(index, 2, `+${rightPart}`);
      } else {
        if (
          leftPart === "+" ||
          leftPart === "-" ||
          leftPart === "/" ||
          leftPart === "*" ||
          leftPart === ">" ||
          leftPart === "<" ||
          leftPart === ">=" ||
          leftPart === "<=" ||
          leftPart === "<>" ||
          rightPart === "+" ||
            rightPart === "-" ||
            rightPart === "/" ||
            rightPart === "*" ||
            rightPart === ">" ||
            rightPart === "<" ||
            rightPart === ">=" ||
            rightPart === "<=" ||
            rightPart === "<>"
        ) {
          throw new Error(
            "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
          );
        } else {
          parts.splice(index - 1, 3, `add(${leftPart},${rightPart})`);
        }
      }
    }

    while (parts.includes(">=")) {
      let index = parts.indexOf(">=");
      let leftPart = parts[index - 1];
      let rightPart = parts[index + 1];

      if (leftPart === undefined && rightPart === undefined) {
        throw new Error("Error en la expresion falta un operando");
      } else if (leftPart === undefined) {
        exp.setErrCode(4);
        exp.setErrDescription(
          "Error occurred during execution (EVALUATION_ERROR)"
        );
        return "Error occurred during execution (EVALUATION_ERROR)";
      } else {
        if (
          leftPart === "+" ||
          leftPart === "-" ||
          leftPart === "/" ||
          leftPart === "*" ||
          leftPart === ">" ||
          leftPart === "<" ||
          leftPart === ">=" ||
          leftPart === "<=" ||
          leftPart === "<>" ||
          rightPart === "+" ||
            rightPart === "-" ||
            rightPart === "/" ||
            rightPart === "*" ||
            rightPart === ">" ||
            rightPart === "<" ||
            rightPart === ">=" ||
            rightPart === "<=" ||
            rightPart === "<>"
        ) {
          exp.setErrCode(4);
          exp.setErrDescription(
            "Error occurred during execution (EVALUATION_ERROR)"
          );
          return "Error occurred during execution (EVALUATION_ERROR)";
        } else {
          parts.splice(
            index - 1,
            3,
            `GxBigNumber.greaterThanEqualTo(${leftPart},${rightPart})`
          );
        }
      }
    }

    while (parts.includes("<=")) {
      let index = parts.indexOf("<=");
      let leftPart = parts[index - 1];
      let rightPart = parts[index + 1];

      if (leftPart === undefined && rightPart === undefined) {
        throw new Error("Error en la expresion falta un operando");
      } else if (leftPart === undefined) {
        exp.setErrCode(4);
        exp.setErrDescription(
          "Error occurred during execution (EVALUATION_ERROR)"
        );
        return "Error occurred during execution (EVALUATION_ERROR)";
      } else {
        if (
          leftPart === "+" ||
          leftPart === "-" ||
          leftPart === "/" ||
          leftPart === "*" ||
          leftPart === ">" ||
          leftPart === "<" ||
          leftPart === ">=" ||
          leftPart === "<=" ||
          leftPart === "<>" ||
          rightPart === "+" ||
            rightPart === "-" ||
            rightPart === "/" ||
            rightPart === "*" ||
            rightPart === ">" ||
            rightPart === "<" ||
            rightPart === ">=" ||
            rightPart === "<=" ||
            rightPart === "<>"
        ) {
          exp.setErrCode(4);
          exp.setErrDescription(
            "Error occurred during execution (EVALUATION_ERROR)"
          );
          return "Error occurred during execution (EVALUATION_ERROR)";
        } else {
          parts.splice(
            index - 1,
            3,
            `GxBigNumber.lessThanEqualTo(${leftPart},${rightPart})`
          );
        }
      }
    }

    while (parts.includes("<>")) {
      let index = parts.indexOf("<>");
      let leftPart = parts[index - 1];
      let rightPart = parts[index + 1];

      if (leftPart === undefined && rightPart === undefined) {
        throw new Error("Error en la expresion falta un operando");
      } else if (leftPart === undefined) {
        exp.setErrCode(4);
        exp.setErrDescription(
          "Error occurred during execution (EVALUATION_ERROR)"
        );
        return "Error occurred during execution (EVALUATION_ERROR)";
      } else {
        if (
          leftPart === "+" ||
          leftPart === "-" ||
          leftPart === "/" ||
          leftPart === "*" ||
          leftPart === ">" ||
          leftPart === "<" ||
          leftPart === ">=" ||
          leftPart === "<=" ||
          leftPart === "<>" ||
          rightPart === "+" ||
            rightPart === "-" ||
            rightPart === "/" ||
            rightPart === "*" ||
            rightPart === ">" ||
            rightPart === "<" ||
            rightPart === ">=" ||
            rightPart === "<=" ||
            rightPart === "<>"
        ) {
          exp.setErrCode(4);
          exp.setErrDescription(
            "Error occurred during execution (EVALUATION_ERROR)"
          );
          return "Error occurred during execution (EVALUATION_ERROR)";
        } else {
          if (
            !/^["'].*["']$/.test(leftPart) &&
            !/^["'].*["']$/.test(rightPart)
          ) {
            parts.splice(
              index - 1,
              3,
              `GxBigNumber.differentThan(${leftPart},${rightPart})`
            );
          } else {
            parts.splice(index - 1, 3, `${leftPart} !== ${rightPart}`);
          }
        }
      }
    }

    while (parts.includes(">")) {
      let index = parts.indexOf(">");
      let leftPart = parts[index - 1];
      let rightPart = parts[index + 1];

      if (leftPart === undefined && rightPart === undefined) {
        throw new Error("Error en la expresion falta un operando");
      } else if (leftPart === undefined) {
        exp.setErrCode(4);
        exp.setErrDescription(
          "Error occurred during execution (EVALUATION_ERROR)"
        );
        return "Error occurred during execution (EVALUATION_ERROR)";
      } else {
        if (
          leftPart === "+" ||
          leftPart === "-" ||
          leftPart === "/" ||
          leftPart === "*" ||
          leftPart === ">" ||
          leftPart === "<" ||
          leftPart === ">=" ||
          leftPart === "<=" ||
          leftPart === "<>" ||
          rightPart === "+" ||
            rightPart === "-" ||
            rightPart === "/" ||
            rightPart === "*" ||
            rightPart === ">" ||
            rightPart === "<" ||
            rightPart === ">=" ||
            rightPart === "<=" ||
            rightPart === "<>"
        ) {
          exp.setErrCode(4);
          exp.setErrDescription(
            "Error occurred during execution (EVALUATION_ERROR)"
          );
          return "Error occurred during execution (EVALUATION_ERROR)";
        } else {
          parts.splice(
            index - 1,
            3,
            `GxBigNumber.greaterThan(${leftPart},${rightPart})`
          );
        }
      }
    }

    while (parts.includes("<")) {
      let index = parts.indexOf("<");
      let leftPart = parts[index - 1];
      let rightPart = parts[index + 1];

      if (leftPart === undefined && rightPart === undefined) {
        throw new Error("Error en la expresion falta un operando");
      } else if (leftPart === undefined) {
        exp.setErrCode(4);
        exp.setErrDescription(
          "Error occurred during execution (EVALUATION_ERROR)"
        );
        return "Error occurred during execution (EVALUATION_ERROR)";
      } else {
        if (
          leftPart === "+" ||
          leftPart === "-" ||
          leftPart === "/" ||
          leftPart === "*" ||
          leftPart === ">" ||
          leftPart === "<" ||
          leftPart === ">=" ||
          leftPart === "<=" ||
          leftPart === "<>" ||
          rightPart === "+" ||
            rightPart === "-" ||
            rightPart === "/" ||
            rightPart === "*" ||
            rightPart === ">" ||
            rightPart === "<" ||
            rightPart === ">=" ||
            rightPart === "<=" ||
            rightPart === "<>"
        ) {
          exp.setErrCode(4);
          exp.setErrDescription(
            "Error occurred during execution (EVALUATION_ERROR)"
          );
          return "Error occurred during execution (EVALUATION_ERROR)";
        } else {
          parts.splice(
            index - 1,
            3,
            `GxBigNumber.lessThan(${leftPart},${rightPart})`
          );
        }
      }
    }

    return parts.join("");
  };

  return parser(exp, expr);
};

const functionStandard = {
  abs: "../bigNumber/abs",
  integer: "../bigNumber/integer",
  frac: "../bigNumber/frac",
  sin: "",
  asin: "",
  cos: "",
  acos: "",
  tan: "",
  atan: "",
  floor: "",
  round: "../bigNumber/round",
  rnd: "../bigNumber/round",
  ln: "",
  log: "",
  exp: "",
  sqrt: "",
  pow: "../math/pow",
  max: "",
  min: "",
  iif: "../misc/iif",
  pi: "",
  add: "../math/add",
  subtract: "../math/subtract",
  multiply: "../math/multiply",
  divide: "../math/divide",
  GxBigNumber: "../types/gxbignumber"
};
