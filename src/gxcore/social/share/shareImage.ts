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

  const data = {};
  data["files"] = [file];

  if (text !== "") {
    data["text"] = text;
  }
  if (url !== "") {
    if (url.indexOf("http://") === -1 || url.indexOf("https://") === -1) {
      data["url"] = "http://" + url;
    } else {
      data["url"] = url;
    }
  }
  if (title !== "") {
    data["title"] = title;
  }

  if (nav.canShare && nav.canShare({ files: [file] })) {
    return nav.share(data);
  } else {
    return msg("Share API not available in this browser", "status");
  }
};
