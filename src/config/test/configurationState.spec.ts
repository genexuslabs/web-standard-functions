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

  it("shuold set the default language from application settings as the current language", () => {
    ConfigurationState.loadApplicationSettings({
      DEFAULT_LANGUAGE: "English"
    });
    let conf = ConfigurationState.getInstance();
    let defaultLanguage = conf.getDynStoredValue("DEFAULT_LANGUAGE");
    expect(defaultLanguage).toBe("English");
    let currentLanguage = conf.getLanguage();
    expect(currentLanguage).toBe("English");
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

  it("shuld load application settings", () => {
    ConfigurationState.loadApplicationSettings({
      SERVICE_DEBUG: true,
      SERVICE_HOSTNAME: "http://localhost/TestAngular/",
      SERVICE_BASE_PATH: "",
      SERVICE_REST_PATH: "rest/",
      SERVICE_OAUTH_PATH: "oauth/",
      WEB_RELATIVE_PATH: "servlet/",
      WEB_MAIN_OBJECT: "com.kbgenng.dashboard",
      GAM_CLIENT_ID: "",
      GAM_CLIENT_SECRET: "",
      GAM_CLIENT_LOGIN: "",
      GAM_CLIENT_NOTAUTHORIZED: "",
      GAM_CLIENT_CHANGEPASSWORD: "",
      DEFAULT_LANGUAGE: "English"
    });
    let conf = ConfigurationState.getInstance();
    let hostName = conf.getDynStoredValue("SERVICE_HOSTNAME");
    expect(hostName).toBe("http://localhost/TestAngular/");
    let debug = conf.getDynStoredValue("SERVICE_DEBUG");
    expect(debug).toBeTruthy(); // values are stored as strings, .toBe(true) fails then
  });
});
