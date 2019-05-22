export const keyPrefix: string = "gx.client.clientstorage";

export const storage = window.localStorage;

export function prefixKey(key: string) {
  return `${keyPrefix}.${key}`;
}
