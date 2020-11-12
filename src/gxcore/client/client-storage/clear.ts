import { storage, keyPrefix } from "./common";

/**
 * Clears all pairs of key-values stored in the device
 */
export function clear() {
  if (!storage) {
    return;
  }
  for (let i = storage.length - 1; i >= 0; i--) {
    let key = storage.key(i);
    if (key.startsWith(keyPrefix)) {
      storage.removeItem(key);
    }
  }
}
