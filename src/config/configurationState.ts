const keyPrefix: string = "gx.config.configurationstate";
const languageKey: string = "language";
const validLanguagesKey: string = "languages";

export class ConfigurationState {
  // Singleton

  private static instance: ConfigurationState;

  static getInstance() {
    if (!ConfigurationState.instance) {
      ConfigurationState.instance = new ConfigurationState();
    }
    return ConfigurationState.instance;
  }

  private constructor() {}

  // Loading model properties

  /**
   * Loads properties from the environment
   */
  loadProperties(props: { [key: string]: string }) {
    console.log(`Props: ${props}`);
    let instance = ConfigurationState.getInstance();
    instance.setStoredValue(validLanguagesKey, props[validLanguagesKey]);
    instance.setLanguage(props[languageKey]);
  }

  // Language

  /**
   * Returns the name of the currently active Language object
   */
  getLanguage(): string {
    return this.getStoredValue(languageKey);
  }

  /**
   * Sets the language to display literals in your application
   * @param lang The language to set
   * @returns 0 if the language can be set, a value greater than 0 if it cannot be set
   */
  setLanguage(lang: string): number {
    if (this.supportedLanguages().includes(lang)) {
      this.setStoredValue(languageKey, lang);
      return 0;
    } else {
      return 1;
    }
  }

  private supportedLanguages(): string[] {
    let languages = this.getStoredValue(validLanguagesKey);
    return languages ? languages.split(",") : [];
  }

  // Local storage

  private storageKey(key: string): string {
    return `${keyPrefix}.${key}`;
  }

  private getStoredValue(key: string): string {
    return window.localStorage.getItem(this.storageKey(key));
  }

  private setStoredValue(key: string, value: string) {
    window.localStorage.setItem(this.storageKey(key), value);
  }
}
