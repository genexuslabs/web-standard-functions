/**
 * Compares two strings
 * @param {string} str1 Source string
 * @param {string} str2 Search string
 * @result true if the search string is found, false otherwise
 */
export const like = (str1: string, str2: string): boolean => {
  if (str2 === null) {
    return false;
  }
  str2 = str2.replace(
    new RegExp(
      "([\\.\\\\\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:\\-])",
      "g"
    ),
    "\\$1"
  );

  if (str2.startsWith("%")) {
    str2 = str2.replace(/^%+/, "");
  } else {
    // search only at the begining
    str2 = "^" + str2;
  }

  const rexp = new RegExp(str2.replace(/%/g, ".*").replace(/_/g, "."));
  return rexp.test(str1);
};
