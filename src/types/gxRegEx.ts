export class GxRegEx {
  errCode: number = 0;
  errDescription: String = "";
  private static currentInstance = null;

  constructor(errCode: number, errDescription: String) {
    this.errCode = errCode;
    this.errDescription = errDescription;
    GxRegEx.currentInstance = this;
  }

  static getLastErrCode(): number {
    return GxRegEx.currentInstance.errCode;
  }

  static getLastErrDescription(): String {
    return GxRegEx.currentInstance.errDescription;
  }
}
