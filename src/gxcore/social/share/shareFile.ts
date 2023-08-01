import { msg } from "../../../misc/msg";
import { convertUriToFile } from "../convertUriToFile";

/**
 * @param File
 * @param text
 * @param url
 * @param title
 */
export const shareFile = async (
  uri: string,
  text?: string,
  title?: string
): Promise<void> => {
  const nav: any = window.navigator;
  const file = await convertUriToFile(uri);

  const data = {};
  data["files"] = [file];

  if (text !== "") {
    data["text"] = text;
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
