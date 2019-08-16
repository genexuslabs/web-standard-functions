import { msg } from "../../../misc/msg";

/**
 * @param text
 * @param url
 * @param title
 */
export const shareText = (text: string, url: string, title: string) => {
  const nav: any = window.navigator;
  if (nav && nav.share) {
    nav
      .share({
        title: title,
        url: url,
        text: text
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    msg("Share API not available in this browser", "status");
  }
};
