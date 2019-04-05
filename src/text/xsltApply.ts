/**
 * The XSLTApply function receives the XSLT file path, and applies it to a string variable or XML file variable.
 * @param {string} xmlString
 * @param {string} xsltString
 * @return string
 */

import { xsltProcess, xmlParse } from "xslt-processor";

export const xsltApply = (xmlString: string, xsltString: string): string => {
  return xsltProcess(xmlParse(xmlString), xmlParse(xsltString));
};
