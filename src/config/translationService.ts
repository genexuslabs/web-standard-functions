import { ConfigurationState } from "./configurationState";
import { getLanguage } from "../misc/getLanguage";

type MessagesTranslations = { [id: string]: string };
type LanguageTranslations = { [lang: string]: MessagesTranslations };
type LanguageTanslationFlags = { [id: string]: boolean };

export class TranslationService {
  private translations: LanguageTranslations = {};
  private images: LanguageTranslations = {};
  private loadedTranslations: LanguageTanslationFlags = {};
  private loadedImages: LanguageTanslationFlags = {};

  async loadTranslations(language: string, data: TranslationsData) {
    if (!this.loadedTranslations[language]) {
      const msgTranslations: MessagesTranslations = {};
      data.Translations.forEach(t => (msgTranslations[t.M] = t.T));
      this.translations[language] = msgTranslations;
      this.loadedTranslations[language] = true;
    }
  }

  async loadImages(language: string, theme: string, data: ImagesData) {
    if (!this.loadedImages[language + theme]) {
      const imgTranslations: MessagesTranslations = {};
      data.images.forEach(
        t =>
          (imgTranslations[this.resolveImageKey(t.name, theme)] = `resources/${
            t.location
          }`)
      );
      this.images[language] = imgTranslations;
      this.loadedImages[language + theme] = true;
    }
  }

  translate(name: string, language: string = undefined): string {
    const lang = language !== undefined ? language : getLanguage();
    let translation = name;
    if (this.translations[lang] !== undefined) {
      const msgTranslations = this.translations[lang];
      if (msgTranslations[name] !== undefined) {
        translation = msgTranslations[name];
      }
    }
    return translation;
  }

  getImageSource(name: string, language: string, theme: string): string {
    const lang = language !== undefined ? language : getLanguage();
    let imageUrl = name;
    if (this.images[lang] !== undefined) {
      const imgTranslations = this.images[lang];
      if (imgTranslations[name] !== undefined) {
        imageUrl = imgTranslations[this.resolveImageKey(name, theme)];
      }
    }
    return (
      ConfigurationState.getInstance().getDynStoredValue("SERVICE_HOSTNAME") +
      imageUrl
    );
  }

  private resolveImageKey(name: string, theme: string) {
    return `${name}_${theme}`;
  }
}

export class TranslationsData {
  Translations: TranslationsItemData[];
}

export class TranslationsItemData {
  M: string;
  T: string;
}

export class ImagesData {
  images: ImageData[];
}

export class ImageData {
  name: string;
  location: string;
  theme: string;
  lang: string;
}
