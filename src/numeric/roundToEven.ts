import { integer } from "./integer";

/**
 * Rounds to even the given number to the specified number of decimal digits
 * @param {number} value
 * @param {number} digits
 * @returns number
 */
export const roundToEven = (value: number, digits: number): number => {
  const multiplier = Math.pow(10, digits || 0);

  const valToRound = value * multiplier;
  console.log(`valToRound = ${valToRound}`);

  const decimalPart = valToRound - integer(valToRound);
  console.log(`decimalPart = ${decimalPart}`);

  let rounded = Math.round(valToRound);
  console.log(`rounded = ${rounded}`);
  if (decimalPart === 0.5 && rounded % 2 !== 0) {
    rounded = rounded - 1;
  }
  return rounded / multiplier;
};
