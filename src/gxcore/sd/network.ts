import { ConfigurationState } from "../../config/configurationState";

export class GeneXusSDNetwork {
  /**
   * Returns the application's services URL
   */
  static applicationServerURL(): string {
    let config = ConfigurationState.getInstance();
    let serviceUrl = config.getDynStoredValue("SERVICE_URL");

    if (serviceUrl.indexOf("http") !== -1) {
      return serviceUrl;
    } else {
      const protocol = window.location.protocol;
      const host = window.location.host;
      return `${protocol}//${host}${serviceUrl}`;
    }
  }

  /**
   * Returns True if the device can access the specified server; otherwise
   * False.
   * Current implementation returns `navigator.onLine`
   * @param url The URL to check access to, or `undefined` to check
   * connection to the application's server URL
   */
  static isServerAvailable(url?: string): boolean {
    return navigator.onLine;
  }

  /**
   * Gets the connection type the device has to a specific server.
   * Current implementation returns always `1`, meaning wifi connection.
   * @param url The URL to check the connection type, or `undefined` to check
   * connection to the application's server URL
   */
  static type(url?: string): number {
    return 1;
  }

  /**
   * Returns true or false whether the connection between the device and the
   * server could cause a monetary cost to the device user.
   * Current implementation returns always `false`
   * @param url The URL to check the connection to, or `undefined` to check
   * connection to the application's server URL
   */
  static trafficBasedCost(url?: string): boolean {
    return false;
  }

  /**
   * It allows to dynamically change the URL of the application.
   * Current implementation does nothing, prints an error to the console.
   * @param url
   */
  static setApplicationServerURL(url: string) {
    console.log(
      "GeneXus.SD.Network's setApplicationServerURL is not available"
    );
  }
}
