export const dateArrayToDatetimeString = (s: Array<number>): string => {
  // yyyy-mm-ddThh:mm:ss.mmm
  return (
    ("000" + s[0]).slice(-4) +
    "-" +
    ("0" + (s[1] + 1)).slice(-2) +
    "-" +
    ("0" + s[2]).slice(-2) +
    "T" +
    ("0" + s[3]).slice(-2) +
    ":" +
    ("0" + s[4]).slice(-2) +
    ":" +
    ("0" + s[5]).slice(-2) +
    "." +
    ("000" + s[6]).slice(-3)
  );
};
