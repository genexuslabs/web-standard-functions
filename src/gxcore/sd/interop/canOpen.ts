/**
 * Checks if an URL can be opened
 * Current implementation only returns `true` for http and https URLs
 * @param url
 */
export const canOpen = (url: string): boolean => {
  return (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("tel:") ||
    url.startsWith("mailto:")
  );
};
