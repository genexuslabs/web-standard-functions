export const arrayToDate = (a: Array<number>): Date => {
  const d = new Date();
  d.setFullYear(+a[0], +a[1] - 1, +a[2]);
  d.setHours(+a[3]);
  d.setMinutes(+a[4]);
  d.setSeconds(+a[5]);
  d.setMilliseconds(+a[6]);
  return d;
};
