/**
 * Converts the numbers of a character expression to a numeric type
 * @param decimalSeparator
 * @return number
 */

export const toNumeric = (strNumber: string, decimalSep?: string): number => {
  if (decimalSep === undefined) {
    decimalSep = ".";
  }
  if (decimalSep !== "." && decimalSep !== ",") {
    return 0;
  }
  if (decimalSep === ",") {
    strNumber = strNumber.replace(/\./g, "#").replace(",", ".");
  }
  let num = parseFloat(strNumber);
  return isNaN(num) ? 0 : num;
};
