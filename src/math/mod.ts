/**
 * @param {number} dividend
 * @param {number} divisor
 * @returns number
 */
export const mod = (dividend: number, divisor: number): number => {
  if (divisor === 0) {
    return NaN;
  } else {
    if (dividend >= 0) {
      return Math.trunc(Math.abs(dividend) % Math.abs(divisor));
    } else {
      return -Math.trunc(Math.abs(dividend) % Math.abs(divisor));
    }
  }
};
