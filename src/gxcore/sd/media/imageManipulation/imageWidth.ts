interface GxImage {
  id: string;
  uri: string;
}

export const imageWidth = (image: GxImage): Promise<Number> => {
  const img = new Image();

  return new Promise<any>((resolve, reject) => {
    img.onload = function() {
      resolve(img.width);
    };

    img.src = image.uri;
  });
};
