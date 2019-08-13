import { ResolverFunc, publishCall } from "../../../../misc/publishCall";

/**
 * Chooses an image from the photo library
 * @return {string} image
 */
export const chooseImage = async (): Promise<string> => {
  let resolver = (
    opt: string,
    image: string,
    resolve: ResolverFunc<string>
  ) => {
    if (opt === "ok") {
      resolve(image);
    } else {
      resolve(null);
    }
  };
  return publishCall<string>("chooseImage", ["ok", "cancel"], resolver);
};
