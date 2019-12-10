/**
 * Returns the browser Id and version from the user agent string
 * @param userAgent
 */
export function browserIdFromAgent(userAgent: string): BrowserResult {
  if (!userAgent) {
    return { id: BrowserIdValues.UnknownAgent, version: "" };
  }

  let matches = userAgent.match(/msie\/([0-9\.]+)/i);
  if (matches !== null) {
    return { id: BrowserIdValues.InternetExplorer, version: matches[1] };
  }

  matches = userAgent.match(/edge\/([0-9\.]+)/i);
  if (matches !== null) {
    return { id: BrowserIdValues.Edge, version: matches[1] };
  }

  matches = userAgent.match(/chrome\/([0-9\.]+)/i);
  if (matches !== null) {
    return { id: BrowserIdValues.Chrome, version: matches[1] };
  }

  matches = userAgent.match(/safari\/([0-9\.]+)/i);
  if (matches !== null) {
    return { id: BrowserIdValues.Safari, version: matches[1] };
  }

  matches = userAgent.match(/opera\/([0-9\.]+)/i);
  if (matches !== null) {
    return { id: BrowserIdValues.Opera, version: matches[1] };
  }

  matches = userAgent.match(/firefox\/([0-9\.]+)/i);
  if (matches !== null) {
    return { id: BrowserIdValues.MozillaFirefox, version: matches[1] };
  }

  matches = userAgent.match(/netscape\/([0-9\.]+)/i);
  if (matches !== null) {
    return { id: BrowserIdValues.Netscape, version: matches[1] };
  }

  return { id: BrowserIdValues.UnknownAgent, version: "" };
}

export interface BrowserResult {
  id: BrowserIdValues;
  version: string;
}

export enum BrowserIdValues {
  UnknownAgent = 0,
  InternetExplorer = 1,
  Netscape = 2,
  Opera = 3,
  MozillaFirefox = 6,
  Chrome = 7,
  Safari = 8,
  Edge = 9
}
