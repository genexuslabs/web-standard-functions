import { IBlob } from "./IBlob";
import { ISerializable } from "./type-serialization";

export class GxImage implements IBlob, ISerializable {
  id: string;
  uri: string;
  densitySet: GxImageDensity[];

  constructor(id?: string, url?: string, densitySet?: GxImageDensity[]) {
    this.id = id ?? "";
    this.uri = url ?? "";

    if (!densitySet) {
      this.densitySet = url ? [{ uri: url, density: 1 }] : [];
    } else {
      this.densitySet = [...densitySet];
    }
  }
  serialize() {
    return this.getInternalUri();
  }

  deserialize(imgString: string) {
    return GxImage.createFromValue(imgString);
  }

  toString(): string {
    return this.uri;
  }

  toAttrSrc(): string {
    return this.uri;
  }

  toAttrSrcset(): string {
    return this.densitySet
      .map(image => `${image.uri} ${image.density}x`)
      .join();
  }

  getInternalUri(): string {
    if (this.id) {
      return `gx-image://${this.id}`;
    } else {
      return this.uri;
    }
  }

  fromString(url: string): void {
    this.uri = url;
    this.densitySet = [{ uri: url, density: 1 }];
  }

  isEmpty(): boolean {
    return !this.uri && !this.id;
  }

  setEmpty(): void {
    this.uri = "";
    this.id = "";
    this.densitySet = [];
  }

  toBase64String(): string {
    console.log("toBase64String - Not implemented");
    return "";
  }

  fromBase64String(s: string): void {
    console.log("fromBase64String - Not implemented");
  }

  static createFromValue(value: string): GxImage {
    let id = "";
    let url = "";

    if (value.startsWith("gx-image://")) {
      id = value
        .slice(11)
        .toLowerCase()
        .replace(/\./g, "_");
    } else {
      url = value.replace(/\s/g, "%20");
    }

    return new GxImage(id, url);
  }

  static createFromID(id: string): GxImage {
    return new GxImage(id);
  }

  static create(image: GxImage): GxImage {
    return new GxImage(image.id, image.uri, image.densitySet);
  }

  static createImage(id: string, url: string): GxImage {
    return new GxImage(id, url);
  }
}

interface GxImageDensity {
  uri: string;
  density: number;
}
