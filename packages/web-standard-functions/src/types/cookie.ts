export class Cookie {
  /**
   * Cookie name
   */
  private mname: string;
  get name(): string {
    return this.mname;
  }
  set name(value: string) {
    this.mname = value;
  }

  /**
   * Cookie value
   */
  private mvalue: string;
  get value(): string {
    return this.mvalue;
  }
  set value(value: string) {
    this.mvalue = value;
  }

  /**
   * Path
   */
  private mpath: string;
  get path(): string {
    return this.mpath;
  }
  set path(value: string) {
    this.mpath = value;
  }

  /**
   * Expiration date
   */
  private mexpirationDate: Date;
  get expirationDate(): Date {
    return this.mexpirationDate;
  }
  set expirationDate(value: Date) {
    this.mexpirationDate = value;
  }

  /**
   * Domain
   */
  private mdomain: string;
  get domain(): string {
    return this.mdomain;
  }
  set domain(value: string) {
    this.mdomain = value;
  }

  /**
   * Secure
   */
  private msecure: boolean;
  get secure(): boolean {
    return this.msecure;
  }
  set secure(value: boolean) {
    this.msecure = value;
  }

  /**
   * HTTP Only
   */
  private mhttpOnly: boolean;
  get httpOnly(): boolean {
    return this.mhttpOnly;
  }
  set httpOnly(value: boolean) {
    this.mhttpOnly = value;
  }
}
