import { jsonFileExtensions } from "./fileExtensions";

interface GxImage {
  id: string;
  uri: string;
}

export const convertImageToFile = async (image: GxImage): Promise<File> => {
  try {
    const response = await fetch(image.uri);
    const blob = await response.blob();

    const name = response.url.substring(
      response.url.lastIndexOf("/") + 1,
      response.url.length
    );

    const extension = jsonFileExtensions[blob.type];
    const file = new File([blob], `${name}.${extension}`, { type: blob.type });

    return file;
  } catch (err) {
    console.log(err.name, err.message);
  }
};
