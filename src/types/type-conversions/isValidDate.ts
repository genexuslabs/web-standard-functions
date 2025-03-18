export const isValidDate = (d: any) => {
  return d instanceof Date && !isNaN(d.getTime()) && d.getFullYear() >= 0;
};
