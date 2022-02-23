import { msg } from "../../../misc/msg";
import { convertImageToFile } from "../convertImageToFile";

interface GxImage {
  id: string;
  uri: string;
}

/**
 * @param image
 * @param text
 * @param url
 * @param title
 */
export const shareImage = async (
  image: GxImage,
  text?: string,
  url?: string,
  title?: string
): Promise<void> => {
  const nav: any = window.navigator;

  const file = await convertImageToFile(image);

  if (nav.canShare && nav.canShare({ files: [file] })) {
    return nav.share({
      url: url,
      title: title,
      text: text,
      files: [file]
    });
  } else {
    return msg("Share API not available in this browser", "status");
  }
};
