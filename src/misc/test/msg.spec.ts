import { msg } from "../msg";
import { publish } from "../../pubSub/pubSub";

describe("msg test", () => {
  it("should work", async () => {
    msg("Hello world!");
  });
});
