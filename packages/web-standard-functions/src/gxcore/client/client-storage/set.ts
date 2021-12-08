import { prefixKey, storage } from "./common";

/**
 * Saves the received value associated with the specified key.
 * If it is applied consecutive times to the same key, its value is the latest assigned
 * @param {string} key
 * @param {string} value
 */
export function set(key: string, value: string) {
  if (!storage) {
    return;
  }
  const pKey = prefixKey(key);
  storage.setItem(pKey, value);
}
