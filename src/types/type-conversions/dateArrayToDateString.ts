export const dateArrayToDateString = (s: Array<number>): string => {
  // yyyy-mm-dd
  return (
    ("000" + s[0]).slice(-4) +
    "-" +
    ("0" + (s[1] + 1)).slice(-2) +
    "-" +
    ("0" + s[2]).slice(-2)
  );
};
