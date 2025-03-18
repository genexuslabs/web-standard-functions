export const getTimezoneOffset = (): number => {
  const x = new Date();
  return x.getTimezoneOffset();
};
