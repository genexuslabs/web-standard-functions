import { ConfigurationState } from "../config/configurationState";

/**
 * Sets the language to display literals in your application
 * @param lang The language to set
 * @returns 0 if the language can be set, a value greater than 0 if it cannot be set
 */
export const setLanguage = (lang: string): number => {
  return ConfigurationState.getInstance().setLanguage(lang);
};
