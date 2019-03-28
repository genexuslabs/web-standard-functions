import {trim} from "./trim";

/**
 * Test string for emptiness or spaces only content
 * @param {string} target
 * @return Boolean
 */
export const isEmpty = (target: string): Boolean => {
  return trim(target) === '';
};
