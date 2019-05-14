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
   *
   */
  private static moSName: any;
  static get oSName(): any {
    notImplemented();
    return this.moSName;
  }

  /**
   *
   */
  private static moSVersion: any;
  static get oSVersion(): any {
    notImplemented();
    return this.moSVersion;
  }

  /**
   *
   */
  private static mnetworkID: any;
  static get networkID(): any {
    notImplemented();
    return this.mnetworkID;
  }

  /**
   *
   */
  private static mlanguage: any;
  static get language(): any {
    notImplemented();
    return this.mlanguage;
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
