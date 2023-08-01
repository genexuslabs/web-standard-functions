import { jsonFileExtensions } from "./fileExtensions";

export const convertUriToFile = async (uri: string): Promise<File> => {
  try {
    const response = await fetch(uri);
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
