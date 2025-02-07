import { GxCollectionData } from "./gxcollection";
import { GxDate } from "./gxdate";
import { GxDatetime } from "./gxdatetime";
import { Std_TypeConversions } from "./std-type-conversion";
import { ISerializable } from "./type-serialization";

export class GxDictionaryData<K, V> implements ISerializable {
  __keyType: { new (): K };
  __valueType: { new (): V };
  __serializationType: any;
  dictionary: { [Key: string]: V } = {};

  private toKey(k: K): string {
    let key = "";
    if (k instanceof GxDate) {
      key = k.serialize();
    } else if (k instanceof GxDatetime) {
      key = k.serialize();
    } else {
      key = k.toString();
    }

    return key;
  }

  private fromKey(k: string): K {
    return k as K;
  }

  get Keys(): GxCollectionData<K> {
    const ks = Object.keys(this.dictionary).map(x => this.fromKey(x));
    return new GxCollectionData<K>(...ks);
  }

  get Values(): GxCollectionData<V> {
    const vs = Object.values(this.dictionary);
    return new GxCollectionData<V>(...vs);
  }

  get Count(): number {
    return Object.values(this.dictionary).length;
  }

  setType(
    keyType: { new (): K } | any,
    valueType: { new (): V } | any,
    serializationType?: any
  ): GxDictionaryData<K, V> {
    this.__keyType = keyType;
    this.__valueType = valueType;
    this.__serializationType = serializationType ?? valueType;
    return this;
  }

  set(key: K, value: V) {
    return (this.dictionary[this.toKey(key)] = value);
  }

  setDictionary(d: GxDictionaryData<K, V>) {
    Object.assign(this.dictionary, d.dictionary);
  }

  remove(key: K) {
    delete this.dictionary[this.toKey(key)];
  }

  removeKeys(keys: Array<K>) {
    for (const k of keys) {
      delete this.dictionary[this.toKey(k)];
    }
  }

  removeAll(d: GxDictionaryData<K, V>) {
    for (const k of d.Keys) {
      delete this.dictionary[this.toKey(k)];
    }
  }

  clear() {
    this.dictionary = {};
  }

  get(key: K): V {
    return this.dictionary[this.toKey(key)];
  }

  contains(key: K): boolean {
    return this.dictionary[this.toKey(key)] !== undefined;
  }

  toJson(): string {
    return JSON.stringify(this.serialize());
  }

  fromJson(json: string) {
    this.dictionary = JSON.parse(json);
  }

  serialize() {
    const obj = {};
    for (const k in this.dictionary) {
      obj[k] = Std_TypeConversions.classToObject<V>(
        this.dictionary[k],
        this.__valueType
      );
    }
    return obj;
  }

  deserialize(obj): GxDictionaryData<K, V> {
    const dictionary = new GxDictionaryData<K, V>().setType(
      this.__keyType,
      this.__valueType,
      this.__serializationType
    );
    if (obj) {
      for (const k in obj) {
        dictionary.set(
          this.fromKey(k),
          Std_TypeConversions.objectToClass<V>(obj[k], this.__valueType)
        );
      }
    }
    return dictionary;
  }
}
