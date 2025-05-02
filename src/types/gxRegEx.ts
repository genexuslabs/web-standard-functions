export class GxRegEx {
  errCode: number = 0;
  errDescription: string = "";
  private static currentInstance = null;

  constructor(errCode: number, errDescription: string) {
    this.errCode = errCode;
    this.errDescription = errDescription;
    GxRegEx.currentInstance = this;
  }

  static getLastErrCode(): number {
    return GxRegEx.currentInstance.errCode;
  }

  static getLastErrDescription(): string {
    return GxRegEx.currentInstance.errDescription;
  }
}
