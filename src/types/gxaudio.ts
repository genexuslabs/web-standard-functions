import { ISerializable } from "./type-serialization";

export class GxAudio implements ISerializable {
  uri: string;

  constructor(url?: string) {
    this.uri = url ?? "";
  }

  serialize() {
    return this.AudioURI;
  }

  deserialize(x) {
    return GxAudio.createAudio(x);
  }

  _gxSerializable = () => true;

  isEmpty() {
    return this.uri === "" || this.uri === null;
  }

  setEmpty() {
    this.uri = "";
  }

  get AudioName() {
    return new URL(this.uri).pathname
      .split("/")
      .pop()
      .split(".")[0];
  }

  get AudioType() {
    return new URL(this.uri).pathname
      .split("/")
      .pop()
      .split(".")[1];
  }

  get AudioURI() {
    return this.uri;
  }

  set AudioURI(uri: string) {
    this.uri = uri;
  }

  FromURL(uri: string) {
    this.uri = uri;
  }

  static createAudio(url: string) {
    const b = new GxAudio();
    b.uri = url;
    return b;
  }
}
