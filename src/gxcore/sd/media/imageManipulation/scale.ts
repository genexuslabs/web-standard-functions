interface GxImage {
  id: string;
  uri: string;
}

export const scale = async (image: GxImage, percentage): Promise<File> => {
  const img = new Image();
  img.src = image.uri;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = img.width * (percentage / 100);
  canvas.height = img.height * (percentage / 100);

  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  const src = context.canvas.toDataURL();

  try {
    const response = await fetch(src);
    const blob = await response.blob();

    const name = image.uri.substring(
      image.uri.lastIndexOf("/") + 1,
      image.uri.length
    );

    const file = new File(
      [blob],
      name.split(".")[0] +
        "_" +
        canvas.width +
        "x" +
        canvas.height +
        "." +
        name.split(".")[1],
      { type: blob.type }
    );
    return file;
  } catch (err) {
    console.log(err.name, err.message);
  }
};
