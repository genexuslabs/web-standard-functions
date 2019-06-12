import {
  publish,
  subscribe,
  cancelAllSubscriptions,
  cancelSubscription,
  cancelTopic
} from "../pubSub";
import waitForExpect from "wait-for-expect";
import PubSubscriptionOptions from "../pubSubscribeOptions";

waitForExpect.defaults.timeout = 500;
waitForExpect.defaults.interval = 10;

const TOPIC_NAME = "TEST";

describe("Event Emitter Tests", () => {
  beforeEach(() => {
    cancelAllSubscriptions();
  });

  it(`should publish the message`, async () => {
    const doWork = jest.fn();
    subscribe(TOPIC_NAME, callback => {
      callback();
    });
    publish(TOPIC_NAME, doWork);
    await waitForExpect(() => expect(doWork).toHaveBeenCalled());
  });

  it(`should publish the message with multiple data parameters`, async () => {
    let result;
    const numberData = 5000;
    subscribe(TOPIC_NAME, (data1, data2, data3, data4) => {
      result = data1 + data2 + data3 + data4;
    });

    publish(TOPIC_NAME, numberData, numberData, numberData, numberData);

    await waitForExpect(() => expect(result).toEqual(numberData * 4));
  });

  it(`should NOT listen to the published message`, async () => {
    const doWork = jest.fn();
    publish(TOPIC_NAME, doWork);
    subscribe(TOPIC_NAME, callback => {
      callback();
    });

    await waitForExpect(() => expect(doWork).not.toHaveBeenCalled());
  });

  it(`should publish the message multiple times`, async () => {
    const doWork = jest.fn();
    subscribe(TOPIC_NAME, callback => {
      callback();
    });
    let index = 1;
    for (index = 1; index <= 10; index++) {
      publish(TOPIC_NAME, doWork);
    }
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(index - 1));
  });

  it(`should subscribe only once`, async () => {
    const doWork = jest.fn();
    subscribe(
      TOPIC_NAME,
      callback => {
        callback();
      },
      new PubSubscriptionOptions({ once: true })
    );

    for (let index = 1; index <= 10; index++) {
      publish(TOPIC_NAME, doWork);
    }
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
  });

  it(`should cancel all previous subscriptions`, async () => {
    const doWork = jest.fn();
    subscribe(TOPIC_NAME, callback => {
      callback();
    });

    publish(TOPIC_NAME, doWork);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    cancelAllSubscriptions();
    publish(TOPIC_NAME, doWork);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
  });

  it(`should cancel subscription`, async () => {
    const doWork = jest.fn();
    const subscription = subscribe(TOPIC_NAME, callback => {
      callback();
    });

    publish(TOPIC_NAME, doWork);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    cancelSubscription(subscription);
    publish(TOPIC_NAME, doWork);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
  });

  it(`should cancel a topic`, async () => {
    const doWork = jest.fn();
    subscribe(TOPIC_NAME, callback => {
      callback();
    });

    publish(TOPIC_NAME, doWork);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    cancelTopic(TOPIC_NAME);
    publish(TOPIC_NAME, doWork);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
  });
});
