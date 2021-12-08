/**
 * Returns the browser Id and version from the user agent string
 * @param userAgent
 */
export function browserIdFromAgent(userAgent: string): BrowserResult {
  if (!userAgent) {
    return { id: BrowserIdValues.UnknownAgent, version: "" };
  }

  for (const brMatcher of browserMatchers) {
    let matches = userAgent.match(brMatcher.regExp);
    if (matches !== null) {
      return { id: brMatcher.browserId, version: matches[1] };
    }
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

interface BrowserMatcher {
  regExp: RegExp;
  browserId: BrowserIdValues;
}

const msieRegEx = /msie\/([0-9\.]+)/i;
const edgeRegEx = /edge\/([0-9\.]+)/i;
const chromeRegEx = /chrome\/([0-9\.]+)/i;
const safariRegEx = /safari\/([0-9\.]+)/i;
const operaRegEx = /opera\/([0-9\.]+)/i;
const firefoxRegEx = /firefox\/([0-9\.]+)/i;
const netscapeRegEx = /netscape\/([0-9\.]+)/i;

const browserMatchers: Array<BrowserMatcher> = [
  { regExp: msieRegEx, browserId: BrowserIdValues.InternetExplorer },
  { regExp: edgeRegEx, browserId: BrowserIdValues.Edge },
  { regExp: chromeRegEx, browserId: BrowserIdValues.Chrome },
  { regExp: safariRegEx, browserId: BrowserIdValues.Safari },
  { regExp: operaRegEx, browserId: BrowserIdValues.Opera },
  { regExp: firefoxRegEx, browserId: BrowserIdValues.MozillaFirefox },
  { regExp: netscapeRegEx, browserId: BrowserIdValues.Netscape }
];
