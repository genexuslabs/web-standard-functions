export default class PubSubscriptionOptions {
  public once: boolean = false;

  public constructor(init?: Partial<PubSubscriptionOptions>) {
    Object.assign(this, init);
  }
}
