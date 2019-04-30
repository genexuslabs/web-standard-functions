import { prefixKey } from "./common";

/**
 * Saves the received value associated with the specified key.
 * If it is applied consecutive times to the same key, its value is the latest assigned
 * @param {string} key
 * @param {string} value
 */
export function setValue(key: string, value: string) {
  let pKey = prefixKey(key);
  window.localStorage.setItem(pKey, value);
}
