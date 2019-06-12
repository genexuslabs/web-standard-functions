import {
  publish,
  subscribe,
  unSubscribe,
  unSubscribeAll
} from "../globalEvents";
import waitForExpect from "wait-for-expect";

const TOPIC_NAME = "TEST";

describe("Global Events Tests", () => {
  beforeEach(() => {
    unSubscribeAll();
  });

  it(`should publish the message with data`, async () => {
    const doWork = jest.fn();
    subscribe(TOPIC_NAME, callback => {
      callback();
    });
    publish(TOPIC_NAME, doWork);
    await waitForExpect(() => expect(doWork).toHaveBeenCalled());
  });

  it(`should publish the message with multiple parameters data`, async () => {
    let result = 0;
    const numberData = 1500;
    subscribe(TOPIC_NAME, (data1, data2) => {
      result = data1 + data2;
    });

    publish(TOPIC_NAME, numberData, numberData);
    await waitForExpect(() => expect(result).toEqual(numberData * 2));
  });

  it(`should publish the message with no data parameters`, async () => {
    let result = 0;
    const numberData = 1500;
    subscribe(TOPIC_NAME, () => {
      result = numberData;
    });

    publish(TOPIC_NAME);
    await waitForExpect(() => expect(result).toEqual(numberData));
  });

  it(`should NOT listen to the emitted event`, async () => {
    const doWork = jest.fn();
    publish(TOPIC_NAME, doWork);
    subscribe(TOPIC_NAME, callback => {
      callback();
    });

    await waitForExpect(() => expect(doWork).not.toHaveBeenCalled());
  });

  it(`should emit the event with data multiple times`, async () => {
    const doWork = jest.fn();
    let index;
    subscribe(TOPIC_NAME, callback => {
      callback();
    });
    for (index = 1; index <= 3; index++) {
      publish(TOPIC_NAME, doWork);
    }
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(index - 1));
  });

  it(`should unsubscribe listener`, async () => {
    const doWork = jest.fn();
    const subscription = subscribe(TOPIC_NAME, callback => {
      callback();
    });

    publish(TOPIC_NAME, doWork);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
    unSubscribe(subscription);
    publish(TOPIC_NAME, doWork);
    await waitForExpect(() => expect(doWork).toHaveBeenCalledTimes(1));
  });
});
