export const keyPrefix: string = "gx.client.clientstorage";

export const storage = global.localStorage;

export function prefixKey(key: string) {
  return `${keyPrefix}.${key}`;
}
