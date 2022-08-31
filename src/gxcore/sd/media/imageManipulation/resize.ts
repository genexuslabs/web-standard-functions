interface GxImage {
  id: string;
  uri: string;
}

export const resize = async (
  image: GxImage,
  width,
  height,
  keepAspect
): Promise<File> => {
  const img = new Image();
  img.src = image.uri;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.height = height;
  canvas.width = width;

  if (keepAspect === false) {
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  } else {
    const imageRatio = img.width / img.height;
    const imageNewRatio = width / height;

    if (imageRatio < imageNewRatio) {
      const heightScale = width / imageRatio;
      const scalePercentage = (heightScale * 100) / img.height;
      const startCrop = (heightScale - height) / 2;

      let imgScaled = scaledImageResize(img, scalePercentage);

      context.drawImage(
        imgScaled,
        0,
        startCrop,
        width,
        height,
        0,
        0,
        width,
        height
      );
    }

    if (imageRatio > imageNewRatio) {
      const widthScale = height * imageRatio;
      const scalePercentage = (widthScale * 100) / img.width;
      const startCrop = (widthScale - width) / 2;

      let imgScaled = scaledImageResize(img, scalePercentage);

      context.drawImage(
        imgScaled,
        startCrop,
        0,
        width,
        height,
        0,
        0,
        width,
        height
      );
    }

    if (imageRatio === imageNewRatio) {
      const widthScale = height * imageRatio;
      const scalePercentage = (widthScale * 100) / img.width;
      let imgScaled = scaledImageResize(img, scalePercentage);
      context.drawImage(imgScaled, 0, 0, canvas.width, canvas.height);
    }
  }

  const src = context.canvas.toDataURL();

  try {
    const response = await fetch(src);
    const blob = await response.blob();

    const file = new File([blob], "resize", { type: blob.type });
    return file;
  } catch (err) {
    console.log(err.name, err.message);
  }
};

const scaledImageResize = (img, percentage) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = img.width * (percentage / 100);
  canvas.height = img.height * (percentage / 100);

  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  return canvas;
};
