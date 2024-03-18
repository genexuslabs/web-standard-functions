/**
 * Returns a random GxBigNumber
 * @return GxBigNumber
 */

import { GxBigNumber } from "../types/gxbignumber";

export const randomBigNumber = (): GxBigNumber => {
  return new GxBigNumber(Math.random());
};
