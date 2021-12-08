import { pickMultimedia } from "../common/pickMultimedia";

/**
 * Takes a picture with the device's camera
 * @return {string} image
 */
export const takePhoto = async (): Promise<string> => {
  return pickMultimedia("takePhoto");
};
