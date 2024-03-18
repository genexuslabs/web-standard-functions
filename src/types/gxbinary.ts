import { IBlob } from "./IBlob";
import { ISerializable } from "./type-serialization";

export class GxBinary implements IBlob, ISerializable {
  uri: string;
  name: string;

  constructor() {
    this.uri = "";
  }
  serialize() {
    return this.toString();
  }

  deserialize(x) {
    return GxBinary.createBinary(x);
  }

  toString() {
    return this.uri;
  }

  fromString(uri: string) {
    this.uri = uri;
  }

  isEmpty() {
    return this.uri === "" || this.uri === null;
  }

  setEmpty() {
    this.uri = "";
  }

  get FileName() {
    const fileName = this.name ? this.name : new URL(this.uri).pathname;
    return fileName
      .split("/")
      .pop()
      ?.split(".")[0];
  }

  get FileType() {
    const fileName = this.name ? this.name : new URL(this.uri).pathname;
    return fileName
      .split("/")
      .pop()
      ?.split(".")[1];
  }
  get FileURI() {
    return this.uri;
  }

  set FileURI(uri: string) {
    this.uri = uri;
  }

  FromURL(uri: string) {
    this.uri = uri;
  }

  toBase64String() {
    console.log("toBase64String - Not implemented");
  }

  fromBase64String(s: string) {
    console.log("fromBase64String - Not implemented");
  }

  static create(b1: GxBinary) {
    const b2 = new GxBinary();
    b2.uri = b1.uri;
    return b2;
  }

  static createBinary(url: string) {
    const b = new GxBinary();
    b.uri = url;
    return b;
  }

  static createBinaryFromObject(b1: object) {
    const b = new GxBinary();
    b.uri = b1["uri"];
    b.name = b1["name"];
    return b;
  }
}
