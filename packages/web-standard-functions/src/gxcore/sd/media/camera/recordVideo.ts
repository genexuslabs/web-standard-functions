import { pickMultimedia } from "../common/pickMultimedia";

/**
 * Record a video with the device's camera
 * @return {string} video
 */
export const recordVideo = async (): Promise<string> => {
  return pickMultimedia("recordVideo");
};
