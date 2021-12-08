import { publishCall, ResolverFunc } from "../../../misc/publishCall";

/**
 * Makes a target visible. For example, ShowTarget(&quot;Left&quot;) opens the Drawer in an app with Slide Navigation.
 * @param {string} targetName
 */
export const showTarget = (targetName: string): Promise<void> => {
  let resolver = (opt: string, val: void, resolve: ResolverFunc<void>) =>
    resolve();
  return publishCall("showTarget", ["ok"], resolver, targetName);
};

/**
 * Hides a target.
 * @param {string} targetName
 */
export const hideTarget = (targetName: string): Promise<void> => {
  let resolver = (opt: string, val: void, resolve: ResolverFunc<void>) =>
    resolve();
  return publishCall("hideTarget", ["ok"], resolver, targetName);
};

/**
 * Expands a target.
 * @param {string} targetName
 */
export const expandTarget = (targetName: string): Promise<void> => {
  let resolver = (opt: string, val: void, resolve: ResolverFunc<void>) =>
    resolve();
  return publishCall("expandTarget", ["ok"], resolver, targetName);
};

/**
 * Collapses a target.
 * @param {string} targetName
 */
export const collapseTarget = (targetName: string): Promise<void> => {
  let resolver = (opt: string, val: void, resolve: ResolverFunc<void>) =>
    resolve();
  return publishCall("collapseTarget", ["ok"], resolver, targetName);
};
