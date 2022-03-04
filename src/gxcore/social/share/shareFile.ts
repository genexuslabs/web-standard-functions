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

  if (nav.canShare && nav.canShare({ files: [file] })) {
    return nav.share({
      files: [file],
      text: text,
      title: title
    });
  } else {
    return msg("Share API not available in this browser", "status");
  }
};
