export enum XMLErrorCodes {
  no_error = 0,
  open_file = 1,
  no_open_document = 2
}

export class XMLBase {
  // Properties

  /**
   * Returns the error code for the last operation.
   */
  protected mErrCode: number;
  get errCode(): number {
    return this.mErrCode;
  }

  /**
   * Returns the error description for the last operation.
   */
  protected mErrDescription: string;
  get errDescription(): string {
    return this.mErrDescription;
  }
}
