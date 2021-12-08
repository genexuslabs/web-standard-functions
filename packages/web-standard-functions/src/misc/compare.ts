import { like } from "../text/like";

/**
 * Compares the two operands using the indicated operator
 * @param {any} left First operand
 * @param {string} op Operator
 * @param {any} right Second operand
 * @return true if the comparition succeds, false otherwise
 */
export const compare = <T>(left: T, op: string, right: T): boolean => {
  switch (op) {
    case "<":
      return left < right;
    case "<=":
      return left <= right;
    case ">":
      return left > right;
    case ">=":
      return left >= right;
    case "=":
      return left === right;
    case "<>":
      return left !== right;
    case "like":
      if (typeof left === "string" && typeof right === "string") {
        return like(left, right);
      } else {
        return false;
      }
    default:
      return false;
  }
};
