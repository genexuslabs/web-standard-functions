import { TranslationService } from "../config/translationService";

/**
 * Searches the language object (or the current language if that parameter is omitted) for a given message code
 * @param {string} str The message identifier
 * @param {string} languageName The language name, may be omitted
 * @return {string} The translation of the given message in the specified language or the current language
 */
export const getMessageText = (str: string, languageName: string): string => {
  const translator = new TranslationService();
  return translator.translate(str, languageName);
};
