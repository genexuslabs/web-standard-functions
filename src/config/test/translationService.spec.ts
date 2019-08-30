import {
  TranslationService,
  TranslationsData,
  ImagesData
} from "../translationService";

describe("Translation service without loding translations", () => {
  it("should return the received string if no language specified", () => {
    const ts = TranslationService.getInstance();
    let msg = "Hello";
    expect(ts.translate(msg)).toBe(msg);
  });
  it("should return the received string if a language specified", () => {
    const ts = TranslationService.getInstance();
    let msg = "Hello";
    expect(ts.translate(msg, "English")).toBe(msg);
  });

  it("should return the received image name if no language specified", () => {
    const ts = TranslationService.getInstance();
    let img = "testImage";
    expect(ts.getImageSource(img, "", "CarmineSD")).toBe(img);
  });
  it("should return the received string if a language specified", () => {
    const ts = TranslationService.getInstance();
    let img = "testImage";
    expect(ts.getImageSource(img, "English", "CarmineSD")).toBe(img);
  });
});

describe("Loading translations", () => {
  it("should be able to load translations", () => {
    const ts = TranslationService.getInstance();
    const data = new TranslationsData();
    data.Translations = [{ M: "Hello", T: "Hola" }, { M: "world", T: "mundo" }];
    ts.loadTranslations("Spanish", data);
  });
});

describe("Translation service with one loaded language", () => {
  const ts = TranslationService.getInstance();
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
  const ts = TranslationService.getInstance();
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

describe("Image translation service with one loaded language", () => {
  const ts = TranslationService.getInstance();
  beforeAll(() => {
    const spa = new ImagesData();
    spa.images = [
      {
        name: "img.png",
        theme: "CarmineSD",
        lang: "Spanish",
        location: "img_spa.png"
      }
    ];
    ts.loadImages("Spanish", "CarmineSD", spa);
  });
  it("should return the location for an existing image", () => {
    expect(ts.getImageSource("img.png", "Spanish", "CarmineSD")).toBe(
      "resources/img_spa.png"
    );
  });
  it("should return the original image name for an unexisting image", () => {
    expect(ts.getImageSource("img2.png", "Spanish", "CarmineSD")).toBe(
      "img2.png"
    );
  });
  it("should return the original image name for an unexisting language", () => {
    expect(ts.getImageSource("img.png", "French", "CarmineSD")).toBe("img.png");
  });
  it("should return the original image name for an unexisting theme", () => {
    expect(ts.getImageSource("img.png", "French", "SimpleSD")).toBe("img.png");
  });
});
