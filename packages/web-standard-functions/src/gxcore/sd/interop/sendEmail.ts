import { openInBrowser } from "./openInBrowser";

/**
 * @param to
 * @param subject
 * @param message
 */
export const sendEmail = (to: string, subject: string, message: string) => {
  let uri = "mailTo:" + to;
  let paramSeparator = "?";
  if (subject) {
    uri += paramSeparator + "subject=" + encodeURIComponent(subject);
    paramSeparator = "&";
  }
  if (message) {
    uri += paramSeparator + "&body=" + encodeURIComponent(message);
    paramSeparator = "&";
  }
  openInBrowser(uri);
};
