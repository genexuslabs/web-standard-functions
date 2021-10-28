import { ResolverFunc, publishCall } from "../../../misc/publishCall";

/**
 * Get the value of the DesignSystem option.
 * @param {string} name
 * @return {string}
 */
export const getOption = (name: string): string => {
  return document.documentElement.getAttribute(`data-gx-ds-opt-${name}`) || "";
};

/**
 * Get list of DesignSystem options.
 * @return {name: string, value: string}[]
 */
export const getOptions = (): { name: string; value: string }[] => {
  const attrs = document.documentElement.attributes;
  let list = [];

  for (let i = attrs.length - 1; i >= 0; i--) {
    if (attrs[i].name.startsWith("data-gx-ds-opt-")) {
      list.push({ name: attrs[i].name.slice(15), value: attrs[i].value });
    }
  }

  return list;
};

/**
 * Set the value of the DesignSystem option.
 * @param {string} name
 * @param {string} value
 */
export const setOption = (name: string, value: string) => {
  document.documentElement.setAttribute(`data-gx-ds-opt-${name}`, value);

  let resolver = (opt: string, val: void, resolve: ResolverFunc<void>) =>
    resolve();
  return publishCall("dsSetOption", ["ok"], resolver, name, value);
};

/**
 * Remove the value of the DesignSystem option.
 * @param {string} name
 */
export const clearOption = (name: string) => {
  document.documentElement.removeAttribute(`data-gx-ds-opt-${name}`);

  let resolver = (opt: string, val: void, resolve: ResolverFunc<void>) =>
    resolve();
  return publishCall("dsSetOption", ["ok"], resolver, name, null);
};
