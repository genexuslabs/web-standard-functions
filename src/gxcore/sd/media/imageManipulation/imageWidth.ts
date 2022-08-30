interface GxImage {
  id: string;
  uri: string;
}

export const imageWidth = (image: GxImage): Number => {
  const img = new Image();
  img.src = image.uri;
  return img.width;
};
