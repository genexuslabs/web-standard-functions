/**
 * @param {number} dividend
 * @param {number} divisor
 * @returns number
 */
export const mod = (dividend: number, divisor: number): number => {
  if (dividend === 0) {
    return undefined;
  } else {
    if (dividend > 0) {
      return Math.trunc(Math.abs(dividend) % Math.abs(divisor));
    } else {
      return -Math.trunc(Math.abs(dividend) % Math.abs(divisor));
    }
  }
};
