import { msg } from "../../../misc/msg";

/**
 * @param text
 * @param url
 * @param title
 */
export const shareText = (
  text: string,
  url?: string,
  title?: string
): Promise<void> => {
  const nav: any = window.navigator;

  const data = {};
  data["text"] = text;

  if (url !== "") {
    data["url"] = url;
  }
  if (title !== "") {
    data["title"] = title;
  }

  if (nav && nav.share) {
    return nav.share(data);
  } else {
    return msg("Share API not available in this browser", "status");
  }
};
