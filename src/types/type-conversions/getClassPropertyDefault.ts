export const getClassPropertyDefault = (inst, pty) => {
  if (inst[`\$${pty}`]) {
    return inst[`\$${pty}`][0];
  }
  return inst[`_${pty}`] ?? inst[pty];
};
