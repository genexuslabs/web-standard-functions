import { ConfigurationState } from "../configurationState";

describe("ConfigurationState without settings", () => {
  it("should not return the a language", () => {
    let lang = ConfigurationState.getInstance().getLanguage();
    expect(lang).toBeNull();
  });

  it("should not be able to change the current language", () => {
    let result = ConfigurationState.getInstance().setLanguage("French");
    expect(result).not.toBe(0);
    let lang = ConfigurationState.getInstance().getLanguage();
    expect(lang).toBeNull();
  });
});

describe("ConfigurationState date type", () => {
  beforeEach(() => {
    let conf = ConfigurationState.getInstance();
    conf.loadProperties({
      languages: "English,Spanish,Portuguese,French",
      language: "English"
    });
  });

  it("should return the loaded language", () => {
    let lang = ConfigurationState.getInstance().getLanguage();
    expect(lang).toBe("English");
  });

  it("should be able to change the current language", () => {
    let result = ConfigurationState.getInstance().setLanguage("French");
    expect(result).toBe(0);
    let lang = ConfigurationState.getInstance().getLanguage();
    expect(lang).toBe("French");
  });

  it("unknown dynamic property should return empty string", () => {
    let result = ConfigurationState.getInstance().getProperty("NotSet");
    expect(result).toBe("");
  });

  it("known dynamic property should return 'value'", () => {
    ConfigurationState.getInstance().setProperty("dynproperty", "value");
    let result = ConfigurationState.getInstance().getProperty("dynproperty");
    expect(result).toBe("value");
  });
});
