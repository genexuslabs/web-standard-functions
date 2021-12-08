const regExp = /^ +| +$/g;

export const trim = (s: string): string => {
  return s.replace(regExp, "");
};
