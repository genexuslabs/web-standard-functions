export let gxToLibLangMapping = (gxlang: string): string => {
  let gxtoluxonLang = new Map([
    ["spa", "es"] /*Spanish*/,
    ["eng", "en"] /*English*/,
    ["por", "pt"] /*Portuguese*/,
    ["ita", "it"] /*Italian*/,
    ["chs", "zh-Hans"] /*Simplified Chinese*/,
    ["cht", "zh-Hant"] /*Traditional Chinese*/,
    ["jap", "jpn"] /*Japanese*/
  ]);
  let luxonLang = gxtoluxonLang.get(gxlang);
  return luxonLang || "en";
};
