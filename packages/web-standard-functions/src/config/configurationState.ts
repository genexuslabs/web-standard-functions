import {
  detect as timezoneDetect,
  storageKey as timezoneStorageKey
} from "../datetime/timezone";
import { storage } from "../common/storage";

const keyPrefix: string = "gx.config.configurationstate";
const keyDynPtyPrefix: string = "gx.config.configurationstate.dynpty";
const languageKey: string = "language";
const validLanguagesKey: string = "languages";
const defaultLanguageKey: string = "DEFAULT_LANGUAGE";

export class ConfigurationState {
  // Singleton

  private static instance: ConfigurationState;

  static getInstance() {
    if (!ConfigurationState.instance) {
      ConfigurationState.instance = new ConfigurationState();
      ConfigurationState.instance.setDynStoredValue(
        timezoneStorageKey,
        timezoneDetect()
      );
    }
    return ConfigurationState.instance;
  }

  private constructor() {}

  // Loading model properties

  /**
   * Loads settings from a JSON object
   * @param appSettings The JSON object containing the settings to load
   */
  static loadApplicationSettings(appSettings: { [key: string]: any }) {
    let instance = ConfigurationState.getInstance();
    for (let key in appSettings) {
      instance.setDynStoredValue(key, appSettings[key]);
    }

    if (instance.getLanguage() == null) {
      let defaultLanguage = instance.getDynStoredValue(defaultLanguageKey);
      if (defaultLanguage != null) {
        instance.setStoredValue(validLanguagesKey, defaultLanguage);
        instance.setLanguage(defaultLanguage);
      }
    }
  }

  /**
   * Loads properties from the environment
   */
  loadProperties(props: { [key: string]: string }) {
    this.setStoredValue(validLanguagesKey, props[validLanguagesKey]);
    this.setLanguage(props[languageKey]);
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

  // Generic Properties

  /**
   * Returns generic property value as String
   */
  getProperty(pty: string): string {
    return this.getDynStoredValue(pty) || "";
  }

  /**
   * Sets a generic property
   * @param ptyName
   * @param ptyValue
   */
  setProperty(ptyName: string, ptyValue: string) {
    this.setDynStoredValue(ptyName, ptyValue);
  }

  // Local storage
  private getStoredValueWithKey(storagekey: string): string {
    return storage?.getItem(storagekey);
  }

  private setStoredValueWithKey(storagekey: string, value: string) {
    storage?.setItem(storagekey, value);
  }

  // Static storage

  private storageKey(key: string): string {
    return `${keyPrefix}.${key}`;
  }

  private getStoredValue(key: string): string {
    return this.getStoredValueWithKey(this.storageKey(key));
  }

  private setStoredValue(key: string, value: string) {
    this.setStoredValueWithKey(this.storageKey(key), value);
  }

  // Dynamic storage

  private storageDynamicKey(key: string): string {
    return `${keyDynPtyPrefix}.${key}`;
  }

  public getDynStoredValue(key: string): string {
    return this.getStoredValueWithKey(this.storageDynamicKey(key));
  }

  public setDynStoredValue(key: string, value: string) {
    this.setStoredValueWithKey(this.storageDynamicKey(key), value);
  }
}
