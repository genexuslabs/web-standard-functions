import { canOpen } from "./canOpen";

/**
 * Opens an URL in the web browser
 * @param url
 */
export const openInBrowser = (url: string) => {
  if (canOpen(url)) {
    let win = window.open(url, "_blank");
    win.focus();
  }
};
