import { getMessageText } from "../getMessageText";
import { ConfigurationState } from "../../config/configurationState";
import {
  TranslationService,
  TranslationsData
} from "../../config/translationService";

const runTest = (testCase: any) => {
  const langDescription = testCase.l !== "" ? ` in ${testCase.l}` : "";
  it(`should return '${testCase.r}' for message '${
    testCase.m
  }'${langDescription}`, () => {
    expect(getMessageText(testCase.m, testCase.l)).toBe(testCase.r);
  });
};

const testCases_noTranslations = [
  { m: "Hello world!", l: "Spanish", r: "Hello world!" }
];

describe("GetMessageText without translations", () => {
  testCases_noTranslations.forEach(runTest);
});

const testCases_spanishOnly = [
  { m: "Hello world!", l: "Spanish", r: "Hola mundo!" },
  { m: "Hello world!", l: "French", r: "Hello world!" },
  { m: "Missing translation", l: "Spanish", r: "Missing translation" }
];

describe("GetMessageText with Spanish translations", () => {
  beforeAll(() => {
    const ts = TranslationService.getInstance();
    const spa = new TranslationsData();
    spa.Translations = [{ M: "Hello world!", T: "Hola mundo!" }];
    ts.loadTranslations("Spanish", spa);
  });
  testCases_spanishOnly.forEach(runTest);
});

const testCases_spanishAndFrench = [
  { m: "Hello world!", l: "Spanish", r: "Hola mundo!" },
  { m: "Hello world!", l: "French", r: "Bonjour le monde!" },
  { m: "Hello world!", l: "Italian", r: "Hello world!" },
  { m: "Missing translation", l: "Spanish", r: "Missing translation" }
];

describe("GetMessageText with Spanish and French translations", () => {
  beforeAll(() => {
    const ts = TranslationService.getInstance();
    const spa = new TranslationsData();
    spa.Translations = [{ M: "Hello world!", T: "Hola mundo!" }];
    ts.loadTranslations("Spanish", spa);
    const fre = new TranslationsData();
    fre.Translations = [{ M: "Hello world!", T: "Bonjour le monde!" }];
    ts.loadTranslations("French", fre);
  });
  testCases_spanishAndFrench.forEach(runTest);
});

const testCases_defaultLang = [
  { m: "Hello world!", l: "", r: "Hola mundo!" },
  { m: "Missing translation", l: "", r: "Missing translation" }
];

describe("GetMessageText without specifying the language", () => {
  beforeAll(() => {
    ConfigurationState.loadApplicationSettings({
      DEFAULT_LANGUAGE: "Spanish"
    });
    const ts = TranslationService.getInstance();
    const spa = new TranslationsData();
    spa.Translations = [{ M: "Hello world!", T: "Hola mundo!" }];
    ts.loadTranslations("Spanish", spa);
  });
  testCases_defaultLang.forEach(runTest);
});
