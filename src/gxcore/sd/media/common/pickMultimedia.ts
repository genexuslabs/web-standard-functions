import { ResolverFunc, publishCall } from "../../../../misc/publishCall";

/**
 * Returns a multimedia item (image, video, audio, etc.) by delegating the call
 * to the generator.
 * @return {string} media
 */
export const pickMultimedia = async (fnName: string): Promise<string> => {
  let resolver = (
    opt: string,
    media: string,
    resolve: ResolverFunc<string>
  ) => {
    if (opt === "ok") {
      resolve(media);
    } else {
      resolve(null);
    }
  };
  return publishCall<string>(fnName, ["ok", "cancel"], resolver);
};
