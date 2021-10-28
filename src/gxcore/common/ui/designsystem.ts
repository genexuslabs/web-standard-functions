/**
 * Get the value of the DesignSystem option.
 * @param {string} name
 * @return {string}
 */
export const getOption = (name: string): string => {
  return document.documentElement.getAttribute(`data-gx-ds-opt-${name}`) || "";
};

/**
 * Set the value of the DesignSystem option.
 * @param {string} name
 * @param {string} value
 */
export const setOption = (name: string, value: string) => {
  document.documentElement.setAttribute(`data-gx-ds-opt-${name}`, value);
};

/**
 * Remove the value of the DesignSystem option.
 * @param {string} name
 */
export const clearOption = (name: string) => {
  document.documentElement.removeAttribute(`data-gx-ds-opt-${name}`);
};
