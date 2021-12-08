import { pickMultimedia } from "../common/pickMultimedia";

/**
 * Chooses an image from the photo library
 * @return {string} image
 */
export const chooseImage = async (): Promise<string> => {
  return pickMultimedia("chooseImage");
};
