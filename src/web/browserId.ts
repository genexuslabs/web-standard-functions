import { browserIdFromAgent } from "./browserCommon";

/**
 * Returns the browser’s identifier
 * @return number
 */
export function browserId(): number {
  return browserIdFromAgent(navigator.userAgent).id;
}
