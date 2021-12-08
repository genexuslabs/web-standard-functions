import { browserIdFromAgent } from "./browserCommon";

/**
 * Returns the browser’s version
 * @return string
 */
export function browserVersion(): string {
  return browserIdFromAgent(navigator.userAgent).version;
}
