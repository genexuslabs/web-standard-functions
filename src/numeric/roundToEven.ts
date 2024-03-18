/**
 * Rounds to even the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
export const roundToEven = (value: number, digits: number): number => {
  let result;
  const multiplier = Math.pow(10, digits || 0);
  const valToRound = value * multiplier;
  const decimalPart = valToRound - Math.trunc(valToRound);
  let rounded = Math.round(valToRound);
  if (decimalPart === 0.5 && rounded % 2 !== 0) {
    rounded = rounded - 1;
  }
  result = rounded / multiplier;
  return result;
};
