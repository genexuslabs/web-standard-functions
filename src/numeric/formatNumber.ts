/**
 * @param {number} value
 * @param {string} picture
 * @param {number} dec
 * @param {number} len
 * @param {string} decSep
 * @param {string} thousandSeparator
 * @param {boolean} sign
 * @param {boolean} errorOnBadNumber
 * @return string
 */

import { padRight } from "../text/padRight";
import { replace } from "../text/replace";
import { GxBigNumber } from "../types/gxbignumber";
import { formatNumber_helper } from "./formatNumber_helper";

const numericLenDec = (picture: string) => {
  let decPicturePart = picture.split(".");
  let integerPicturePart =
    decPicturePart.length === 2 ? decPicturePart[0] : picture;
  let str_decPicturePart = decPicturePart.length === 2 ? decPicturePart[1] : "";
  let integers = (integerPicturePart.match(/9|Z|#|\?|\\/g) || []).length;
  let decimals = (str_decPicturePart.match(/9|Z|#|\?|\\/g) || []).length;
  return { Integers: integers, Decimals: decimals };
};

type t_isBigDecimal = (value: any) => boolean;

const isBigDecimal: t_isBigDecimal = (value: any) => {
  return false;
};

const checkPictureCharacter = (char: string, isDecimal: boolean) => {
  switch (char) {
    case "9":
      return "0";
    case "Z":
      return isDecimal ? "0" : "";
    case "#":
      return "";
    case "?":
      return " ";
  }
  return "";
};

export const formatNumber = (
  value: string,
  picture: string,
  dec: number,
  len: number,
  decSep: string,
  thousandSeparator: string,
  sign: boolean,
  errorOnBadNumber: boolean
): string => {
  let result: string = "";
  let thSep = picture.indexOf(",") !== -1 ? thousandSeparator : "";
  let blankWhenZero = false;
  let LenDec = numericLenDec(picture);
  let integers = LenDec.Integers;
  let decimals = LenDec.Decimals;

  if (typeof value == "string") {
    if (thSep) {
      value = replace(value, thSep, "");
    }
    value = replace(value, decSep, ".");
  }

  result = value.toString();
  let f = result.split(".");
  f[0] = f[0] || "0";
  f[1] = f[1] || "";

  if (errorOnBadNumber) {
    if (f[1].length > decimals && f[1].replace(/0*$/, "").length > decimals) {
      throw new Error("InvalidNumber");
    } else {
      if (
        (sign &&
          f[0].charAt(0) === "-" &&
          f[0].replace(/0*/, "").length > integers) ||
        (!sign && f[0].charAt(0) === "-") ||
        f[0].replace(/[+]?0*/, "").length > integers
      ) {
        throw new Error("InvalidNumber");
      }
    }
  }
  let integerInput = f[0].substring(0, integers);
  if (Number(value) < 0) {
    sign = true;
  }
  if (f[1].length < decimals) {
    let g = f[1];
    for (let i = f[1].length + 1; i <= decimals; i++) {
      g += "0";
    }
    f[1] = g;
  }

  let signChar = "";
  let preSignChar = "";
  let postSignChar = "";
  let hasNegativeParentheses =
    picture.charAt(0) === "(" && picture.charAt(picture.length - 1) === ")";
  let hasDebitCreditPrefix =
    picture.indexOf("DB") === 0 || picture.indexOf("CR") === 0;
  if (sign) {
    if (integerInput.charAt(0) === "-" && !hasNegativeParentheses) {
      signChar = "-";
      integerInput = integerInput.substring(1);
    } else {
      if (picture.charAt(0) === "+") {
        if (Number(value) !== 0) {
          signChar = "+";
        }
        if (integerInput.charAt(0) === "+") {
          integerInput = integerInput.substring(1);
        }
      }
      if (hasNegativeParentheses) {
        picture = picture.substring(1, picture.length - 1);
        if (Number(value) < 0) {
          integerInput = (Number(integerInput) * -1).toString();
          preSignChar = "(";
          postSignChar = ")";
        }
      }
      if (hasDebitCreditPrefix) {
        picture = picture.slice(2);
        preSignChar = Number(value) < 0 ? "DB" : "CR";
      }
    }
  }
  decSep = !f[1] ? "" : decSep;

  let picture_split = [];
  if (decimals > 0) {
    picture_split = picture.split(".");
    if (picture_split[1] === padRight("", decimals, "Z")) {
      blankWhenZero = true;
    }
  } else {
    picture_split = new Array(picture);
    if (
      picture_split.length > 0 &&
      picture_split[0].replaceAll(",", "").replaceAll("Z", "").length === 0
    ) {
      blankWhenZero = true;
    }
  }

  // parte decimal
  let n_idx = 0;
  let decPart = "";
  let decValue = f[1].replace(/0*$/, "");
  if (picture_split.length > 1) {
    let decimal_pic = picture_split[1];
    let isEscapedCharacter = false;
    for (let i = 0; i < decimal_pic.length; i++) {
      let chd = decimal_pic.charAt(i);
      if (isEscapedCharacter) {
        decPart = decPart + decimal_pic.charAt(i);
      } else if (
        (chd === "9" || chd === "Z" || chd === "#" || chd === "?") &&
        !isEscapedCharacter
      ) {
        if (decValue.length > n_idx) {
          decPart = decPart + decValue.charAt(n_idx);
          n_idx++;
        } else {
          decPart = decPart + checkPictureCharacter(chd, true);
        }
      } else if (chd === "\\" && isEscapedCharacter) {
        decPart = decPart + chd;
        isEscapedCharacter = false;
        continue;
      } else if (chd !== "." && chd !== "," && !isEscapedCharacter) {
        decPart = decPart + chd;
      }
      isEscapedCharacter = decimal_pic.charAt(i) === "\\";
    }
  }

  // parte entera
  let intPart = "";
  let epic = picture_split[0];
  n_idx = integerInput.length - 1;
  let first_nine = epic.indexOf("9");
  first_nine = first_nine === -1 ? epic.length : first_nine;
  for (let i = epic.length - 1; i >= 0; i--) {
    let ch = epic.charAt(i);
    let isEscapedCharacter = false;
    if (ch === "Z" && first_nine < i) {
      // Ignoring trailing Zs
      ch = "9";
    }
    if (i > 1) {
      isEscapedCharacter =
        epic.charAt(i - 1) === "\\" && epic.charAt(i - 2) !== "\\";
    } else if (i > 0) {
      isEscapedCharacter = epic.charAt(i - 1) === "\\";
    }
    if (isEscapedCharacter) {
      intPart = ch + intPart;
      i--;
    } else if (
      (ch === "9" || ch === "Z" || ch === "#" || ch === "?") &&
      !isEscapedCharacter
    ) {
      if (n_idx >= 0) {
        if (
          !(
            (ch === "Z" || ch === "#" || ch === "?") &&
            Number(integerInput.substring(0, n_idx + 1)) === 0
          )
        ) {
          intPart = integerInput.charAt(n_idx) + intPart;
        }
        n_idx--;
      } else {
        intPart = checkPictureCharacter(ch, false) + intPart;
      }
    } else if (ch === "\\" && isEscapedCharacter) {
      intPart = ch + intPart;
      continue;
    } else if (ch !== "," && ch !== "+") {
      intPart = ch + intPart;
    } else if (ch === "," && integerInput.charAt(n_idx) === thSep) {
      intPart = integerInput.charAt(n_idx) + intPart;
      n_idx--;
    }
  }

  if (thSep && intPart.length > 3) {
    let h = intPart;
    intPart = "";
    for (let j = 3; j < h.length; j += 3) {
      let i = h.slice(h.length - j, h.length - j + 3);
      intPart = thSep + i + intPart + "";
    }
    let j = h.substring(0, h.length % 3 === 0 ? 3 : h.length % 3);
    intPart = j + intPart;
  }

  if (
    blankWhenZero &&
    (intPart === "0" || intPart === "") &&
    decPart.replace(/0+$/, "").length === 0
  ) {
    result = "";
  } else {
    result =
      preSignChar +
      signChar +
      intPart +
      (!decPart ? "" : decSep + decPart) +
      postSignChar;
  }
  return result;
};
