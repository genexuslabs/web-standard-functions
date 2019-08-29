import {
  TranslationService,
  TranslationsData,
  TranslationsItemData
} from "../translationService";

describe("Translation service without loding translations", () => {
  it("should return the received string if no language specified", () => {
    const ts = new TranslationService();
    let msg = "Hello";
    expect(ts.translate(msg)).toBe(msg);
  });
  it("should return the received string if a language specified", () => {
    const ts = new TranslationService();
    let msg = "Hello";
    expect(ts.translate(msg, "English")).toBe(msg);
  });
});

describe("Loading translations", () => {
  it("should be able to load translations", () => {
    const ts = new TranslationService();
    const data = new TranslationsData();
    data.Translations = [{ M: "Hello", T: "Hola" }, { M: "world", T: "mundo" }];
    ts.loadTranslations("Spanish", data);
  });
});

describe("Translation service with one loaded language", () => {
  const ts = new TranslationService();
  beforeAll(() => {
    const spa = new TranslationsData();
    spa.Translations = [{ M: "Hello", T: "Hola" }, { M: "world", T: "mundo" }];
    ts.loadTranslations("Spanish", spa);
  });
  it("should return the translation for an existing message", () => {
    expect(ts.translate("Hello", "Spanish")).toBe("Hola");
  });
  it("should return the original string for an unexisting message", () => {
    expect(ts.translate("Bye", "Spanish")).toBe("Bye");
  });
  it("should return the original string for an unexisting language", () => {
    expect(ts.translate("Hello", "French")).toBe("Hello");
  });
});

describe("Translation service with more than one loaded language", () => {
  const ts = new TranslationService();
  beforeAll(() => {
    const spa = new TranslationsData();
    spa.Translations = [{ M: "Hello", T: "Hola" }, { M: "world", T: "mundo" }];
    ts.loadTranslations("Spanish", spa);
    const fre = new TranslationsData();
    fre.Translations = [
      { M: "Hello", T: "Bonjour" },
      { M: "world", T: "le monde" }
    ];
    ts.loadTranslations("French", fre);
  });
  it("should return the translation for an existing message", () => {
    expect(ts.translate("Hello", "Spanish")).toBe("Hola");
  });
  it("should return the translation for another existing message", () => {
    expect(ts.translate("Hello", "French")).toBe("Bonjour");
  });
  it("should return the original string for an unexisting message", () => {
    expect(ts.translate("Bye", "Spanish")).toBe("Bye");
  });
  it("should return the original string for an unexisting language", () => {
    expect(ts.translate("Hello", "Italian")).toBe("Hello");
  });
});
