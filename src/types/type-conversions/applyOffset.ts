export const applyOffset = (d: Date, offset: number): Date => {
  const d1 = new Date(d.getTime());
  d1.setMinutes(d1.getMinutes() + offset);
  return d1;
};
