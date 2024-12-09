import { GxBigNumber } from "../types/gxbignumber";
import { add } from "../math/add";
import { subtract } from "../math/subtract";
import { multiply } from "../math/multiply";
import { divide } from "../math/divide";
import { iif } from "../misc/iif";
import { pow } from "../math/pow";
import { absBigNumber } from "../bigNumber/abs";
import { integerBigNumber } from "../bigNumber/integer";
import { fracBigNumber } from "../bigNumber/frac";
import { roundBigNumber } from "../bigNumber/round";
import { greaterThan } from "../bigNumber/greaterThan";
import { greaterThanEqualTo } from "../bigNumber/greaterThanEqualTo";
import { lessThan } from "../bigNumber/lessThan";
import { lessThanEqualTo } from "../bigNumber/lessThanEqualTo";
import { differentThan } from "../bigNumber/differentThan";

export class GxExpression {
  Expression: string;
  ErrCode: number;
  ErrDescription: string;

  Variables: {
    set: (name: string, value: string | number | GxBigNumber) => void;
    get: (name: string) => string | number | GxBigNumber;
    [key: string]: any;
  };

  constructor() {
    this.Expression = "";
    this.ErrCode = 0;
    this.ErrDescription = "";

    this.Variables = {
      set: (name: string, value: string | number | GxBigNumber) => {
        this.Variables[name] = value;
      },
      get: (name: string) => {
        return this.Variables[name];
      }
    };
  }

  setExpression(expr) {
    this.Expression = expr;
  }

  setErrCode(num) {
    this.ErrCode = num;
  }

  setErrDescription(text) {
    this.ErrDescription = text;
  }

  evaluate(): GxBigNumber {
    let expr = this.Expression;

    if (expr !== "") {
      for (let name in this.Variables) {
        const regex = new RegExp(`\\b${name}\\b`, "gi");
        expr = expr.replace(regex, this.Variables[name]);
      }

      try {
        let valid = false;
        let safe = expr;

        expr = replaceOperations(this, expr);

        if (this.ErrCode === 0) {
          valid = validateExpression(expr);
        } else {
          return new GxBigNumber(0);
        }

        if (this.ErrCode === 0) {
          if (valid) {
            safe = iifSafe(safe);
            const regexFunctions = /\b(\w+)\s*\(/g;

            const funcAux = [...expr.matchAll(regexFunctions)].map(match => {
              if (match[1] === "compare") {
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
                if (element === "add") {
                  functionGlobal[element] = add;
                  safe = safe.replace(regex, "");
                } else if (element === "subtract") {
                  functionGlobal[element] = subtract;
                  safe = safe.replace(regex, "");
                } else if (element === "multiply") {
                  functionGlobal[element] = multiply;
                  safe = safe.replace(regex, "");
                } else if (element === "divide") {
                  functionGlobal[element] = divide;
                  safe = safe.replace(regex, "");
                } else if (element.toLowerCase() === "iif") {
                  functionGlobal[element] = iif;
                  safe = safe.replace(regex, "");
                } else if (element === "pow") {
                  functionGlobal[element] = pow;
                  safe = safe.replace(regex, "");
                } else if (element === "GxBigNumber") {
                  functionGlobal[element] = GxBigNumber;
                } else {
                  if (element.toLowerCase() === "round") {
                    functionGlobal[element] = roundBigNumber;
                  } else if (element.toLowerCase() === "abs") {
                    functionGlobal[element] = absBigNumber;
                  } else if (element.toLowerCase() === "integer") {
                    functionGlobal[element] = integerBigNumber;
                  } else if (element.toLowerCase() === "frac") {
                    functionGlobal[element] = fracBigNumber;
                  } else if (element.toLowerCase() === "greaterthan") {
                    functionGlobal[element] = greaterThan;
                  } else if (element.toLowerCase() === "greaterthanequalto") {
                    functionGlobal[element] = greaterThanEqualTo;
                  } else if (element.toLowerCase() === "lessthan") {
                    functionGlobal[element] = lessThan;
                  } else if (element.toLowerCase() === "lessthanequalto") {
                    functionGlobal[element] = lessThanEqualTo;
                  } else if (element.toLowerCase() === "differentthan") {
                    functionGlobal[element] = differentThan;
                  }

                  safe = safe.replace(regex, "");
                }
              } else {
                expr = expr.replace(regex, `Math.${element.toLowerCase()}(`);
                safe = safe.replace(regex, "");
              }
            });

            if (expr.toLowerCase().indexOf("pi") !== -1) {
              expr = expr
                .replaceAll("PI", `Math.PI`)
                .replaceAll("pi", `Math.PI`);
              safe = safe.replaceAll("pi", "").replaceAll("PI", "");
            } else if (expr.toLowerCase().indexOf("ln") !== -1) {
              expr = expr.replaceAll("ln", "log");
            }

            const regex = /^(\s*(\d+(\.\d+)?|,|(\+|-|\*|\/|<>|>|<|>=|<=|and|or|\(|\)))\s*)*$/;

            if (this.ErrCode === 0) {
              if (regex.test(safe)) {
                const funAux = new Function(
                  ...Object.keys(functionGlobal),
                  `return ${expr}`
                );
                let res = funAux(...Object.values(functionGlobal));

                if (typeof res === "boolean") {
                  res = new GxBigNumber(Number(res));
                } else {
                  res = new GxBigNumber(res);
                }

                return res;
              } else {
                this.setErrCode(4);
                this.setErrDescription(
                  "Error occurred during execution (EVALUATION_ERROR)"
                );
                return new GxBigNumber(0);
              }
            } else {
              return new GxBigNumber(0);
            }
          } else {
            this.setErrCode(3);
            this.setErrDescription(
              "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
            );
            return new GxBigNumber(0);
          }
        } else {
          return new GxBigNumber(0);
        }
      } catch (err) {
        if (err.message === "Division by zero") {
          this.setErrCode(4);
          this.setErrDescription(err.message);
          return new GxBigNumber(0);
        } else {
          this.setErrCode(1);
          this.setErrDescription(err.message);
          return new GxBigNumber(0);
        }
      }
    } else {
      this.setErrCode(3);
      this.setErrDescription(
        "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
      );
      return new GxBigNumber(0);
    }
  }
}

const replaceOperations = (exp, expr) => {
  const parser = (exp, expr) => {
    let parts = [];
    let currentExpr = "";
    let i = 0;
    let openBracketSign = "(";

    let startComillas;
    let openComillas = 0;
    let startBrackets;
    let openBrackets;
    let startComa;
    let openComa;

    while (i < expr.length) {
      let char = expr[i];
      openBrackets = 0;

      if (char === ")" && openBrackets === 0) {
        exp.setErrCode(3);
        exp.setErrDescription(
          "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
        );
        return "0";
      } else if (char === "(") {
        startBrackets = i;
        startComa = [0];
        openBrackets = 1;
        openComa = 0;
        openComillas = 0;

        while (openBrackets > 0) {
          if (i === expr.length) {
            startComa.push(i);
            break;
          }

          if (expr[i] === "," && openBrackets === 1 && openComillas % 2 === 0) {
            startComa.push(i - startBrackets);
            openComa++;
          }

          i++;
          if (expr[i] === "(") openBrackets++;
          if (expr[i] === ")") openBrackets--;
          if (expr[i] === "'") openComillas++;
        }

        if (openBrackets !== 0) {
          exp.setErrCode(3);
          exp.setErrDescription(
            "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
          );
          return "0";
        }

        if (startComa.length === 1) {
          currentExpr +=
            openBracketSign +
            parser(exp, expr.slice(startBrackets + 1, i)) +
            ")";
          parts.push(currentExpr.trim());
          currentExpr = "";
        } else {
          let exprAux = expr.slice(startBrackets + 1, i);

          for (let j = 0; j < startComa.length; j++) {
            if (j === startComa.length - 1) {
              currentExpr +=
                parser(exp, exprAux.slice(startComa[j], exprAux.length)) + ")";
            } else if (j === 0) {
              currentExpr +=
                openBracketSign +
                parser(exp, exprAux.slice(startComa[j], startComa[j + 1] - 1)) +
                ",";
            } else {
              currentExpr +=
                parser(exp, exprAux.slice(startComa[j], startComa[j + 1] - 1)) +
                ",";
            }
          }
        }
      } else if (char === "'") {
        startComillas = i;
        openComillas = 1;

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
          return "0";
        }

        currentExpr += '"' + expr.slice(startComillas + 1, i) + '"';
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
      } else {
        currentExpr += char;
      }

      i++;
    }

    if (currentExpr.trim()) {
      parts.push(currentExpr.trim());
      currentExpr = "";
    }

    if (exp.ErrCode === 0) {
      replaceOperationWithFunction(parts, "*", "multiply", exp);
    }
    if (exp.ErrCode === 0) {
      replaceOperationWithFunction(parts, "/", "divide", exp);
    }
    if (exp.ErrCode === 0) {
      replaceOperationWithFunction(parts, "-", "subtract", exp);
    }
    if (exp.ErrCode === 0) {
      replaceOperationWithFunction(parts, "+", "add", exp);
    }
    if (exp.ErrCode === 0) {
      replaceOperationWithFunction(parts, ">=", "greaterThanEqualTo", exp);
    }
    if (exp.ErrCode === 0) {
      replaceOperationWithFunction(parts, "<=", "lessThanEqualTo", exp);
    }
    if (exp.ErrCode === 0) {
      replaceOperationWithFunction(
        parts,
        "===",
        "0 === GxBigNumber.compare",
        exp
      );
    }
    if (exp.ErrCode === 0) {
      replaceOperationWithFunction(parts, "<>", "differentThan", exp);
    }
    if (exp.ErrCode === 0) {
      replaceOperationWithFunction(parts, ">", "greaterThan", exp);
    }
    if (exp.ErrCode === 0) {
      replaceOperationWithFunction(parts, "<", "lessThan", exp);
    }

    return parts.join("");
  };

  return parser(exp, expr);
};

const checkOperationWellFormed = (leftPart, rightPart, exp, op) => {
  if (leftPart === undefined && rightPart === undefined) {
    exp.setErrCode(3);
    exp.setErrDescription(
      "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
    );
    return exp;
  } else if (leftPart === undefined && op !== "-" && op !== "+") {
    exp.setErrCode(3);
    exp.setErrDescription(
      "Expression to be evaluated is not well formed (EXPRESSION_ERROR)"
    );
    return exp;
  } else if (
    op !== "+" &&
    op !== "-" &&
    (leftPart === "+" ||
      leftPart === "-" ||
      leftPart === "/" ||
      leftPart === "*" ||
      leftPart === ">" ||
      leftPart === "<" ||
      leftPart === ">=" ||
      leftPart === "<=" ||
      leftPart === "<>")
  ) {
    exp.setErrCode(4);
    exp.setErrDescription("Error occurred during execution (EVALUATION_ERROR)");
    return exp;
  } else if (
    leftPart === "/" ||
    leftPart === "*" ||
    rightPart === "/" ||
    rightPart === "*" ||
    rightPart === ">" ||
    rightPart === "<" ||
    rightPart === ">=" ||
    rightPart === "<=" ||
    rightPart === "<>"
  ) {
    exp.setErrCode(4);
    exp.setErrDescription("Error occurred during execution (EVALUATION_ERROR)");
    return exp;
  } else if (
    leftPart !== undefined &&
    rightPart !== undefined &&
    (isString(leftPart) ||
      isStringInBracket(leftPart) ||
      isString(rightPart) ||
      isStringInBracket(rightPart)) &&
    (op === "<=" || op === "<" || op === ">=" || op === ">")
  ) {
    exp.setErrCode(5);
    exp.setErrDescription("Execute Method not found");
    return exp;
  } else {
    exp.setErrCode(0);
    exp.setErrDescription("");
    return exp;
  }
};

const replaceOperationWithFunction = (parts, op, opFn, exp) => {
  while (parts.includes(op)) {
    let index = parts.indexOf(op);
    let leftPart = parts[index - 1];
    let rightPart = parts[index + 1];

    if (rightPart === "-") {
      rightPart = -parts[index + 2];
    } else if (leftPart === "-") {
      leftPart = -parts[index - 2];
    }

    exp = checkOperationWellFormed(leftPart, rightPart, exp, op);

    if (exp.ErrCode === 0) {
      if (
        (leftPart === undefined ||
          leftPart === "===" ||
          leftPart === ">=" ||
          leftPart === "<=" ||
          leftPart === ">" ||
          leftPart === "<") &&
        rightPart !== undefined &&
        op === "-"
      ) {
        parts.splice(index, 2, `-${rightPart}`);
      } else if (
        (leftPart === undefined ||
          leftPart === "===" ||
          leftPart === ">=" ||
          leftPart === "<=" ||
          leftPart === ">" ||
          leftPart === "<") &&
        rightPart !== undefined &&
        op === "+"
      ) {
        parts.splice(index, 2, `+${rightPart}`);
      } else if (
        rightPart !== undefined &&
        rightPart.toString().indexOf("-") === 0 &&
        op === "*"
      ) {
        parts.splice(index - 1, 4, `${opFn}(${leftPart},${rightPart})`);
      } else if (
        leftPart !== undefined &&
        leftPart.toString().indexOf("-") === 0 &&
        op === "*"
      ) {
        parts.splice(index - 1, 3, `${opFn}(${leftPart},${rightPart})`);
      } else if (
        /^["'].*["']$/.test(leftPart) &&
        /^["'].*["']$/.test(rightPart) &&
        op === "<>"
      ) {
        parts.splice(index - 1, 3, `${leftPart} !== ${rightPart}`);
      } else if (
        (/^["'].*["']$/.test(leftPart) || /^["'].*["']$/.test(rightPart)) &&
        op === "==="
      ) {
        parts.splice(index - 1, 3, `${leftPart} === ${rightPart}`);
      } else {
        parts.splice(index - 1, 3, `${opFn}(${leftPart},${rightPart})`);
      }
    } else {
      return exp.ErrDescription;
    }
  }
};

const validateExpression = expr => {
  const validateFunction = expr => {
    let funcNameMatch = /^[-+]?\s*(abs|integer|frac|round|sin|asin|cos|acos|tan|atan|floor|ln|log|exp|sqrt|pow|max|min|iif|add|subtract|multiply|divide|greaterthanequalto|lessthanequalto|differentthan|greaterthan|lessthan|gxbignumber.compare)\s*\(/.exec(
      expr.toLowerCase()
    );

    let bracketMatch = /^[-+]?\((.*)\)$|pi/.exec(expr.toLowerCase());
    if (!funcNameMatch && !bracketMatch) {
      return validateParms(expr.trim());
    }

    let funcName;
    if (funcNameMatch) {
      funcName = funcNameMatch[1].toLowerCase();
    } else if (bracketMatch) {
      if (bracketMatch[1]) {
        return validateParms(bracketMatch[1].trim());
      } else {
        if (bracketMatch[0] === "pi") {
          return true;
        }
      }
    }

    let parmsStartIndex = funcNameMatch[0].length - 1;
    let parms = getParms(expr, parmsStartIndex);

    if (parms === null) {
      return false;
    }

    if (
      funcName === "round" ||
      funcName === "max" ||
      funcName === "min" ||
      funcName === "add" ||
      funcName === "subtract" ||
      funcName === "multiply" ||
      funcName === "divide" ||
      funcName === "pow" ||
      funcName === "greaterthanequalto" ||
      funcName === "lessthanequalto" ||
      funcName === "differentthan" ||
      funcName === "greaterthan" ||
      funcName === "lessthan" ||
      funcName === "gxbignumber.compare"
    ) {
      if (
        parms.length !== 2 ||
        parms[0].trim() === "" ||
        parms[1].trim() === ""
      ) {
        return false;
      }
    } else if (funcName === "iif") {
      if (
        parms.length !== 3 ||
        parms[0].trim() === "" ||
        parms[1].trim() === "" ||
        parms[2].trim() === ""
      ) {
        return false;
      } else if (
        parms.join(" ").indexOf("&&") !== -1 ||
        parms.join(" ").indexOf("||") !== -1
      ) {
        parms.forEach((parm, index) => {
          let funcNameParm = /^[-+]?\s*(abs|integer|frac|round|sin|asin|cos|acos|tan|atan|floor|ln|log|exp|sqrt|pow|max|min|iif|add|subtract|multiply|divide|greaterthanequalto|lessthanequalto|differentthan|greaterthan|lessthan|gxbignumber.compare)\s*\(/.exec(
            parm.toLowerCase()
          );

          if (parm.indexOf("&&") !== -1) {
            if (funcNameParm) {
              if (
                parm.split(" && ")[0].split("(").length - 1 ===
                parm.split(" && ")[0].split(")").length - 1
              ) {
                parms.splice(index, 1, ...parm.split(" && "));
              }
            } else {
              let parmAux = parm.split(" && ");
              if (
                parmAux[0].startsWith("(") &&
                parmAux[0].split("(").length - 1 >
                  parmAux[0].split(")").length - 1
              ) {
                parmAux[0] = parmAux[0].substring(1);
              }

              if (
                parmAux[1].endsWith(")") &&
                parmAux[1].split("(").length - 1 <
                  parmAux[1].split(")").length - 1
              ) {
                parmAux[1] = parmAux[1].slice(0, -1);
              }

              parms.splice(index, 1, ...parmAux);
            }
          }

          if (parm.indexOf("||") !== -1) {
            if (funcNameParm) {
              if (
                parm.split(" || ")[0].split("(").length - 1 ===
                parm.split(" || ")[0].split(")").length - 1
              ) {
                parms.splice(index, 1, ...parm.split(" || "));
              }
            } else {
              let parmAux = parm.split(" || ");
              if (
                parmAux[0].startsWith("(") &&
                parmAux[0].split("(").length - 1 >
                  parmAux[0].split(")").length - 1
              ) {
                parmAux[0] = parmAux[0].substring(1);
              }

              if (
                parmAux[1].endsWith(")") &&
                parmAux[1].split("(").length - 1 <
                  parmAux[1].split(")").length - 1
              ) {
                parmAux[1] = parmAux[1].slice(0, -1);
              }

              parms.splice(index, 1, ...parmAux);
            }
          }
        });
      }
    } else {
      if (parms.length !== 1 || parms[0].trim() === "") {
        return false;
      }
    }

    return parms.every(parm => validateParms(parm.trim()));
  };

  const getParms = (expr, startIndex) => {
    let parms = [];
    let currentParms = "";
    let openBrackets = 0;
    let charOpen = false;
    let braceOpen = false;
    let i;

    for (i = startIndex; i < expr.length; i++) {
      let char = expr[i];

      if (char === "(") {
        openBrackets++;
      } else if (char === ")") {
        if (openBrackets === 0) break;
        openBrackets--;
      }
      if (char === "{") {
        braceOpen = !braceOpen;
      }

      if (char === "'" || char === '"') {
        charOpen = !charOpen;
        currentParms += "'";
      } else if (
        char === "," &&
        openBrackets === 1 &&
        charOpen === false &&
        braceOpen === false
      ) {
        parms.push(currentParms);
        currentParms = "";
      } else if (
        !(char === "(" && openBrackets === 1) &&
        !(char === ")" && openBrackets === 0)
      ) {
        currentParms += char;
      }
    }

    if (openBrackets !== 0) return null;
    parms.push(currentParms);
    return parms.map(parm => parm.trim());
  };

  const validateParms = parms => {
    if (parms === "") return false;

    const numberPattern = /^s*-?\d*\.?\d*([+\-*/]?\s*-?\d*\.?\d*|pi)*\s*$/;
    const operationPattern = /^[\d+\-*/().\s]+$/;
    const numberBracketPattern = /\((\d+)\)/;

    if (
      /^[-+]?\s*(abs|integer|frac|round|sin|asin|cos|acos|tan|atan|floor|ln|log|exp|sqrt|pow|max|min|iif|add|subtract|multiply|divide|greaterthanequalto|lessthanequalto|differentthan|greaterthan|lessthan|gxbignumber.compare)\s*\(/.test(
        parms.toLowerCase()
      )
    ) {
      const resParmValidate = validateFunction(parms);
      return resParmValidate;
    }

    if (
      numberPattern.test(parms.toLowerCase()) ||
      numberBracketPattern.test(parms)
    ) {
      return true;
    }

    if (operationPattern.test(parms)) {
      return validateExpression(parms);
    }

    let funcBracketMatch = /^[-+]?\((.*)\)$/.exec(parms);
    if (funcBracketMatch) {
      return validateFunction(funcBracketMatch[1]);
    }

    let comparationMatch = parms.match(
      /(["'][^"']*["'])\s*(===|!==)\s*(["'][^"']*["'])/
    );
    if (comparationMatch) {
      if (
        comparationMatch[1] !== undefined &&
        comparationMatch[3] !== undefined &&
        (isString(comparationMatch[1]) ||
          isStringInBracket(comparationMatch[1]) ||
          isString(comparationMatch[3]) ||
          isStringInBracket(comparationMatch[3])) &&
        (comparationMatch[2] === "===" || comparationMatch[2] === "!==")
      ) {
        return true;
      }
    }

    if (
      parms.toLowerCase().match(/^0\s*===\s*(gxbignumber\.compare\(\s*.+\s*\))/)
    ) {
      return validateFunction(
        parms
          .toLowerCase()
          .match(/^0\s*===\s*(gxbignumber\.compare\(\s*.+\s*\))/)[1]
      );
    }

    if (parms.match(/(\d+(?:\.\d+)?|pi)\s*(===|!==)\s*(["'][^"']*["'])/)) {
      if (parms.match(/[0-9]+[a-zA-Z]+[0-9]*\s*(===|!==)\s*(["'][^"']*["'])/)) {
        return false;
      } else {
        return true;
      }
    }

    if (parms.match(/(["'][^"']*["'])\s*(===|!==)\s*(\d+(?:\.\d+)?|pi)/)) {
      if (parms.match(/(["'][^"']*["'])\s*(===|!==)\s*[0-9]+[a-zA-Z]+[0-9]*/)) {
        return false;
      } else {
        return true;
      }
    }

    return false;
  };

  return validateFunction(expr);
};

let isString = part => {
  const matchString = /^["'].*["']$/;
  return matchString.test(String(part));
};

let isInBracket = part => {
  return String(part).match(/^\((.*)\)$/);
};

let isStringInBracket = part => {
  let inBracket = isInBracket(part);
  if (inBracket) {
    return isString(inBracket[1]);
  } else {
    return false;
  }
};

const iifSafe = expr => {
  let safe = expr;

  if (expr.toLowerCase().indexOf("iif") !== -1) {
    let regexIif = /iif\s*\(/gi;
    let res = [];
    let matchIf;

    while ((matchIf = regexIif.exec(expr)) !== null) {
      let start = matchIf.index + matchIf[0].length;
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
  return safe;
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
  GxBigNumber: "../types/gxbignumber",
  greaterThan: "../bigNumber/greaterThan",
  greaterThanEqualTo: "../bigNumber/greaterThanEqualTo",
  lessThan: "../bigNumber/lessThan",
  lessThanEqualTo: "../bigNumber/lessThanEqualTo",
  differentThan: "../bigNumber/differentThan"
};
