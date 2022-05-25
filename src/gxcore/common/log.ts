export class GeneXusCommonLog {
  public static write(message: any, topic: any = "", logLevel: any = 5) {
    if (logLevel === 5) {
      // debug
      this.debug(message, topic);
    } else if (logLevel === 10) {
      // info
      this.info(message, topic);
    } else if (logLevel === 15) {
      // warning
      this.warning(message, topic);
    } else if (logLevel === 20) {
      // error
      this.logError(message, topic);
    } else if (logLevel === 30) {
      // fatal
      this.fatal(message, topic);
    }
  }

  public static logError(message: any, topic: any = "") {
    console.error(message);
  }

  public static warning(message: any, topic: any = "") {
    console.warn(message);
  }

  public static info(message: any, topic: any = "") {
    console.info(message);
  }

  public static debug(message: any, topic: any = "") {
    console.debug(message);
  }

  public static fatal(message: any, topic: any = "") {
    console.error(message);
  }
}
