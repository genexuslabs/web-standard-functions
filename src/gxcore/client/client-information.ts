import { getCookie } from "../../web/getCookie";
import { setCookie } from "../../web/setCookie";
import { GUID } from "../../types/guid";
import { addYears } from "../../date/addYears";

function notImplemented() {
  console.log("Not yet implemented");
}

export class GeneXusClientClientInformation {
  /**
   * This property returns a device identifier
   * The value of ClientInformation.Id is:
   *  - Universally unique
   *  - Stable
   */
  static get id(): string {
    let id = getCookie("GX_CLIENT_ID");
    if (!id) {
      id = GUID.newGuid().toString();
      let expiration = addYears(new Date(), 100);
      setCookie("GX_CLIENT_ID", id, "/", expiration);
    }
    return id;
  }

  /**
   * Returns the operating system name
   */
  static get oSName(): string {
    notImplemented();
    return null;
  }

  /**
   * Returns the version of the operating system
   */
  static get oSVersion(): string {
    notImplemented();
    return null;
  }

  /**
   * Returns a unique identifier for the device
   * Current implementation returns the same as the `id` property
   */
  static get networkID(): string {
    return this.id;
  }

  /**
   * A character string is returned with the device language
   */
  static get language(): string {
    let lang = navigator.languages
      ? navigator.languages[0]
      : navigator.language;

    return lang;
  }

  /**
   *
   */
  private static mdeviceType: any;
  static get deviceType(): any {
    notImplemented();
    return this.mdeviceType;
  }

  /**
   *
   */
  private static mplatformName: any;
  static get platformName(): any {
    notImplemented();
    return this.mplatformName;
  }

  /**
   *
   */
  private static mappVersionCode: any;
  static get appVersionCode(): any {
    notImplemented();
    return this.mappVersionCode;
  }

  /**
   *
   */
  private static mappVersionName: any;
  static get appVersionName(): any {
    notImplemented();
    return this.mappVersionName;
  }

  /**
   *
   */
  private static mapplicationId: any;
  static get applicationId(): any {
    notImplemented();
    return this.mapplicationId;
  }
}
