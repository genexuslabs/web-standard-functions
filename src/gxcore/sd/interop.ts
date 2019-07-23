/**
 * Checks if an URL can be opened
 * Current implementation only returns `true` for http and https URLs
 * @param url
 */
export const canOpen = (url: string): boolean => {
  return url.startsWith("http://") || url.startsWith("https://");
};

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
