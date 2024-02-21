import { v4 as uuid_v4 } from "uuid";
import { ISerializable } from "./type-serialization";

export class GxGuid implements ISerializable {
  private value: string;

  private static emptyValue = "00000000-0000-0000-0000-000000000000";
  private static emptyGUID = new GxGuid(GxGuid.emptyValue);

  constructor(val: string = GxGuid.emptyValue) {
    this.value = this.normalizeValue(val);
  }

  serialize() {
    return this.toString();
  }

  deserialize(x) {
    return new GxGuid(x);
  }

  private normalizeValue(str: string): string {
    const lStr = str.toLowerCase();

    const regExp1 = /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/;
    const regExp2 = /[0-9a-f]{32}/;

    if (lStr.length === 36 && regExp1.exec(lStr) !== null) {
      return lStr;
    } else if (lStr.length === 32 && regExp2.exec(lStr) !== null) {
      return (
        lStr.substr(0, 8) +
        "-" +
        lStr.substr(8, 4) +
        "-" +
        lStr.substr(12, 4) +
        "-" +
        lStr.substr(16, 4) +
        "-" +
        lStr.substr(20, 12)
      );
    } else {
      return GxGuid.emptyValue;
    }
  }

  /**
   * Returns true if the GUID is the emtpy GUID
   * @returns boolean
   */
  isEmpty(): boolean {
    return this.value === GxGuid.emptyValue;
  }

  /**
   * Sets the given string as the GUID's value
   * @param {string} str The new GUID's value
   */
  fromString(str: string) {
    this.value = this.normalizeValue(str);
  }

  /**
   * Returns the string representation of the GUID object
   * @param {string} format The desired format of the output string
   * @returns {string} The string representation of the GUID
   */
  toString(format: string = undefined) {
    // TODO: apply formatting. Which are the valid formats?
    return this.value;
  }

  /**
   * Returns the empty GUID
   * @returns {GxGuid} The empty GUID
   */
  static empty(): GxGuid {
    return this.emptyGUID;
  }

  /**
   * Creates a new GUID object from the given string
   * @param {string} str The string representing the GUID object to be created
   * @returns {GxGuid} The GUID object with representing the given string
   */
  static fromString(str: string): GxGuid {
    return new GxGuid(str);
  }

  /**
   * Creates a new GUID object with a randomly-generated value
   * @returns {GxGuid} The newly created GUID object
   */
  static newGuid(): GxGuid {
    return new GxGuid(uuid_v4());
  }

  static compare(guid1: GxGuid, guid2: GxGuid): boolean {
    let res: boolean;
    if (guid1.value === guid2.value) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }
}
