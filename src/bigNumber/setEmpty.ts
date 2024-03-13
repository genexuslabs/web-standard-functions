/**
 * Assigns the empty value in an attribute or variable
 * @param target
 * @return GxBigNumber
 */

import { GxBigNumber } from "../types/gxbignumber";

export const setEmptyBigNumber = (target: GxBigNumber): GxBigNumber => {
  return new GxBigNumber(0);
};
