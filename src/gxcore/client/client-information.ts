import { getCookie } from "../../web/getCookie";
import { setCookie } from "../../web/setCookie";
import { GUID } from "../../types/guid";
import { addYears } from "../../date/addYears";

function notImplemented() {
  console.log("Not yet implemented");
}

function findOSInUserAgent(clientStrings): string {
  let nAgt = navigator.userAgent;
  let os = clientStrings.find(cs => cs.r.test(nAgt));
  return os ? os.s : "Unknown";
}

export class GeneXusClientClientInformation {
  /**
   * This property returns a device identifier
   * The value of ClientInformation.Id is:
   *  - Universally unique
   *  - Stable
   */

  public static id = (): string => {
    let id = getCookie("GX_CLIENT_ID");
    if (!id) {
      id = GUID.newGuid().toString();
      let expiration = addYears(new Date(), 100);
      setCookie("GX_CLIENT_ID", id, "/", expiration);
    }
    return id;
  };

  /**
   * Returns the operating system name
   */
  public static oSName = (): string => {
    return findOSInUserAgent([
      { s: "Windows", r: /(Windows|win32|win64)/ },
      { s: "Android", r: /Android/ },
      { s: "Open BSD", r: /OpenBSD/ },
      { s: "Sun OS", r: /SunOS/ },
      { s: "Linux", r: /(Linux|X11)/ },
      { s: "iOS", r: /(iPhone|iPad|iPod)/ },
      { s: "Mac OS X", r: /Mac OS X/ },
      { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
      { s: "QNX", r: /QNX/ },
      { s: "UNIX", r: /UNIX/ },
      { s: "BeOS", r: /BeOS/ },
      { s: "OS/2", r: /OS\/2/ },
      {
        s: "Search Bot",
        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
      }
    ]);
  };

  /**
   * Returns the version of the operating system
   */
  public static oSVersion = (): string => {
    let os = findOSInUserAgent([
      { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
      { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
      { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
      { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
      { s: "Windows Vista", r: /Windows NT 6.0/ },
      { s: "Windows Server 2003", r: /Windows NT 5.2/ },
      { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
      { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
      { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
      { s: "Windows 98", r: /(Windows 98|Win98)/ },
      { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
      { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
      { s: "Windows CE", r: /Windows CE/ },
      { s: "Windows 3.11", r: /Win16/ },
      { s: "Windows unknown-version", r: /(Windows|win32|win64)/ },
      { s: "Android", r: /Android/ },
      { s: "Open BSD", r: /OpenBSD/ },
      { s: "Sun OS", r: /SunOS/ },
      { s: "Linux", r: /(Linux|X11)/ },
      { s: "iOS", r: /(iPhone|iPad|iPod)/ },
      { s: "Mac OS X", r: /Mac OS X/ },
      { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
      { s: "QNX", r: /QNX/ },
      { s: "UNIX", r: /UNIX/ },
      { s: "BeOS", r: /BeOS/ },
      { s: "OS/2", r: /OS\/2/ },
      {
        s: "Search Bot",
        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
      }
    ]);

    let osVersion = "Unknown";

    if (/Windows/.test(os)) {
      osVersion = /Windows (.*)/.exec(os)[1];
    }

    let nAgt = navigator.userAgent;
    let nVer = navigator.appVersion;
    switch (os) {
      case "Mac OS X":
        osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
        break;

      case "Android":
        osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
        break;

      case "iOS":
        let osVersionComponents = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
        osVersion =
          osVersionComponents[1] +
          "." +
          osVersionComponents[2] +
          "." +
          (osVersionComponents[3] || "0");
        break;
    }
    return osVersion;
  };

  /**
   * Returns a unique identifier for the device
   * Current implementation returns the same as the `id` property
   */
  public static networkID = GeneXusClientClientInformation.id;

  /**
   * A character string is returned with the device language
   */
  public static language = (): string => {
    let lang = navigator.languages
      ? navigator.languages[0]
      : navigator.language;
    return lang;
  };

  /**
   * Returns an enumerated value representing the device type
   */
  public static deviceType = (): number => {
    return 4; // SmartDeviceType.Web
  };

  /**
   * Returns the platform name of the device as much specific as possible
   */
  public static platformName = (): string => {
    let nVer = navigator.appVersion;
    let mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    return "Web" + mobile ? " Mobile" : "";
  };

  /**
   * Returns the version number of the application which it was set by the developer
   */
  public static appVersionCode = (): string => {
    notImplemented();
    return null;
  };

  /**
   * Returns the version name of the application which it was set by the developer
   */
  public static appVersionName = (): string => {
    notImplemented();
    return null;
  };

  /**
   * Returns the application identifier
   */
  public static applicationId = (): string => {
    notImplemented();
    return null;
  };
}
