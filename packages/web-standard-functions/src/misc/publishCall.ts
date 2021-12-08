import { publish, subscribe, cancelSubscription } from "../pubSub/pubSub";
import { stdToGeneratorPublishedMessage as prefix } from "./helpers";
import { GUID } from "../types/guid";

export type ResolverFunc<T> = (value: T | PromiseLike<T>) => void;

export async function publishCall<T>(
  fnName: string,
  options: string[],
  resolver: (option: string, value: T, res: ResolverFunc<T>) => void,
  ...params: any[]
): Promise<T> {
  return new Promise<T>(resolve => {
    let guid = GUID.newGuid().toString();
    let suscriptions = options.map(opt => {
      let s = subscribe(`${prefix}_${fnName}_${guid}_${opt}`, (result: T) => {
        unsubscribe();
        resolver(opt, result, resolve);
      });
      return s;
    });
    let unsubscribe = () => {
      suscriptions.map(cancelSubscription);
    };

    publish(`${prefix}_${fnName}`, guid, ...params);
  });
}
