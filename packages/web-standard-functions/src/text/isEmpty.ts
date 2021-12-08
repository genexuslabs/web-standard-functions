import { trim } from "./trim";

/**
 * Test string for emptiness or spaces only content
 * @param {string} target
 * @return boolean
 */
export const isEmpty = (target: string): boolean => {
  return trim(target) === "";
};
