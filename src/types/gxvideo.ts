import { ISerializable } from "./type-serialization";

export class GxVideo implements ISerializable {
  uri: string;

  constructor(url?: string) {
    this.uri = url ?? "";
  }

  serialize() {
    return this.VideoURI;
  }

  deserialize(x) {
    return GxVideo.createVideo(x);
  }

  isEmpty() {
    return this.uri === "" || this.uri === null;
  }

  setEmpty() {
    this.uri = "";
  }

  get VideoName() {
    return new URL(this.uri).pathname
      .split("/")
      .pop()
      .split(".")[0];
  }

  get VideoType() {
    return new URL(this.uri).pathname
      .split("/")
      .pop()
      .split(".")[1];
  }

  get VideoURI() {
    return this.uri;
  }

  set VideoURI(uri: string) {
    this.uri = uri;
  }

  FromURL(uri: string) {
    this.uri = uri;
  }

  static createVideo(url: string) {
    const b = new GxVideo();
    b.uri = url;
    return b;
  }
}
