import EventSubscription from "./pubSubscription";
import * as PubSubJs from "pubsub-js";
import PubSubscriptionOptions from "./pubSubscribeOptions";

/**
 * Asynchronously publishes the message, passing the data to it's subscribers
 * @param topicName The topic name to publish the data
 * @param data  The data to pass to subscribers
 * @return Returns true if there are subscribers to the topic
 */
export const publish = (topicName: string, ...data: any[]): Boolean => {
  return PubSubJs.publish(normalizeTopicName(topicName), data);
};

/**
 * Subscribe to topic name. Automatically gets notified when someone publish to the topic name.
 * @param topicName The topic name to be subscribed.
 * @param handler The function to be called when someone publish to the topic name.
 * @param options Subscribe advanced options: such as subscribe only once to the topic.
 * @return Returns Subscription object
 */
export const subscribe = (
  topicName: string,
  handler: Function,
  options?: PubSubscriptionOptions
): EventSubscription => {
  const subscribeWrapper = (handler: Function) => {
    return function(topic: string, data: any) {
      handler.apply(this, data);
    };
  };
  topicName = normalizeTopicName(topicName);
  let token;
  if (options && options.once) {
    // @ts-ignore
    token = PubSubJs.subscribeOnce(topicName, subscribeWrapper(handler));
  } else {
    token = PubSubJs.subscribe(topicName, subscribeWrapper(handler));
  }

  return new EventSubscription(token);
};

/**
 * Cancel a specific subscription.
 * @param suscription The suscription object
 */
export const cancelTopic = (topicName: string) => {
  PubSubJs.unsubscribe(normalizeTopicName(topicName));
};

/**
 * Cancel a specific subscription.
 * @param suscription The suscription object
 */
export const cancelSubscription = (subscription: EventSubscription) => {
  subscription.unsubscribe();
};

/**
 * Clears all subscribed events.
 */
export const cancelAllSubscriptions = () => {
  PubSubJs.clearAllSubscriptions();
};

const normalizeTopicName = (name: string) => {
  return name.toLocaleLowerCase();
};
