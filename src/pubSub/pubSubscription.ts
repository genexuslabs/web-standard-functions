import { unsubscribe as unSubscribeJs } from "pubsub-js";

export default class PubSubscription {
  private subscription: any;

  constructor(s: any) {
    this.subscription = s;
  }

  unsubscribe() {
    unSubscribeJs(this.subscription);
  }
}
