export const convertUriToFile = async (uri: string): Promise<File> => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();

    const name = response.url.substring(
      response.url.lastIndexOf("/") + 1,
      response.url.length
    );

    const file = new File([blob], name, { type: blob.type });

    return file;
  } catch (err) {
    console.log(err.name, err.message);
  }
};
