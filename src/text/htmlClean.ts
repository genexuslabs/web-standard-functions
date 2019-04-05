/**
 * Detects and corrects many common coding errors and strives to produce visually equivalent markup that is both W3C compliant and works on most browsers.
 * A common use of this function is to convert plain HTML to XHTML.
 * @param {string} target
 * @return string
 */

import * as htmltidy from "tidy-html5";

export const htmlClean = (s: string): string => {
  return htmltidy.tidy_html5(s, { quiet: true, "tidy-mark": false });
};
