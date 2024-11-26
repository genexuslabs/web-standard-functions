import { Std_TypeConversions } from "./std-type-conversion";
import { ISerializable } from "./type-serialization";

export const gxRowNumberId = "_gxIndex";

export class GxCollectionData<T> extends Array<T> implements ISerializable {
  __currentItem: T;
  __itemType: { new (): T };
  __serializationType: any;

  setType(
    itemType: { new (): T },
    serializationType?: any
  ): GxCollectionData<T> {
    this.__itemType = itemType;
    this.__serializationType = serializationType ?? itemType;
    return this;
  }

  get CurrentItem(): T {
    if (!this.__currentItem && this.__itemType) {
      this.__currentItem = new this.__itemType();
    }
    return this.__currentItem;
  }

  set CurrentItem(value: T) {
    this.__currentItem = value;
  }

  get Count(): number {
    return this.length;
  }

  get itemClass(): any {
    return this.__itemType;
  }

  add(element: any, position?: number) {
    if (position) {
      this.splice(position - 1, 0, element);
    } else {
      this.push(element);
    }
  }

  addRange(collection: any, position?: number): boolean {
    if (position === undefined) {
      this.splice(this.length, 0, ...collection);
      return true;
    } else if (position === 0) {
      this.splice(position, 0, ...collection);
      return true;
    } else if (position > 0 && position <= collection.length + 1) {
      this.splice(position - 1, 0, ...collection);
      return true;
    }
    return false;
  }

  removeRange(position: number, count?: number): boolean {
    if (position > 0 && position <= this.length) {
      if (count === undefined) {
        this.splice(-position - 1);
        return true;
      } else if (count < this.length - position) {
        this.splice(position - 1, count);
        return true;
      }
    }
    return false;
  }

  set(position: number, element: any) {
    if (position > 0 && position < this.length) {
      this[position - 1] = element;
      return true;
    }
    return false;
  }

  clear() {
    this.splice(0, this.length);
  }

  clone(): GxCollectionData<T> {
    return this.slice(0) as GxCollectionData<T>;
  }

  indexOf(element: any): number {
    return super.indexOf(element) + 1;
  }

  item(ix: number): any {
    return this[ix - 1];
  }

  remove(ix: number) {
    this.splice(ix - 1, 1);
  }

  toJson(): string {
    return JSON.stringify(this.serialize());
  }

  fromJson(json: string) {
    const deserialized = this.deserialize(JSON.parse(json));
    for (const item of deserialized) {
      this.add(item);
    }
  }

  static fromArray<T>(array: Array<T>): GxCollectionData<T> {
    return GxCollectionData.from(array) as GxCollectionData<T>;
  }

  serialize() {
    const array = new Array<T>();
    this.forEach(element => {
      const item = Std_TypeConversions.classToObject<T>(
        element,
        this.__itemType
      );
      array.push(item);
    });
    return array;
  }

  deserialize(items) {
    const collection = new GxCollectionData<T>().setType(
      this.__serializationType
    );
    if (items) {
      let idx = 0;
      items.forEach(element => {
        const item = Std_TypeConversions.objectToClass<T>(
          element,
          this.__itemType
        );
        if (typeof item === "object") {
          item[gxRowNumberId] = idx++;
        }
        collection.push(item);
      });
    }
    return collection;
  }
}
