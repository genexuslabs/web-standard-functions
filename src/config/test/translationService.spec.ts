import { TranslationService } from "../translationService";

describe("Translation service without loding translations", () => {
  it("should return the received string if no language specified", () => {
    const ts = new TranslationService();
    let msg = "Hello";
    expect(ts.translate(msg)).toBe(msg);
  });
});
