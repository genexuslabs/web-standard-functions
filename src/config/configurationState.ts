export class ConfigurationState {
  // Local storage

  private getStoredValue(key: string): string {
    return window.localStorage.getItem(key);
  }

  private setStoredValue(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }
}
