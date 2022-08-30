import { convertImageToFile } from "../../../social/convertImageToFile";

interface GxImage {
  id: string;
  uri: string;
}

export const fileSize = async (image: GxImage): Promise<Number> => {
  const file = await convertImageToFile(image);
  return file.size;
};
