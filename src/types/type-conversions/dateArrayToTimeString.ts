export const dateArrayToTimeString = (s: Array<number>): string => {
  // hh:mm:ss
  return (
    ("0" + s[3]).slice(-2) +
    ":" +
    ("0" + s[4]).slice(-2) +
    ":" +
    ("0" + s[5]).slice(-2)
  );
};
