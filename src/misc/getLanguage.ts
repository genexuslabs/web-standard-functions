import { ConfigurationState } from "../config/configurationState";

/**
 * Returns the name of the currently active Language object
 */
export const getLanguage = (): string => {
  return new ConfigurationState().getLanguage();
};
