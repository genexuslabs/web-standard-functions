import {
  cancelSubscription as cancel,
  publish as publishTopic,
  subscribe as subscribeTopic,
  cancelAllSubscriptions
} from "../pubSub/pubSub";
import EventSubscription from "../pubSub/pubSubscription";

/**
 * Subscribe to topic name. Automatically gets notified when someone publish to the topic name.
 * @param topicName The topic name to be subscribed.
 * @param handler The function to be called when someone publish to the topic name.
 * @return Returns Subscription object
 */
export function subscribe(name: string, handler: Function): EventSubscription {
  return subscribeTopic(name, handler);
}

/**
 * Cancel a specific subscription.
 * @param suscription The suscription object
 */
export function unSubscribe(suscription: EventSubscription) {
  cancel(suscription);
}

/**
 * Cancel all subscriptions
 */
export function unSubscribeAll() {
  cancelAllSubscriptions();
}

/**
 * Asynchronously publishes the message, passing the data to it's subscribers
 * @param topicName The topic name to publish the data
 * @param data  The data to pass to subscribers
 * @return Returns true if there are subscribers to the topic
 */
export function publish(topicName: string, ...data: any): boolean {
  return publishTopic.apply(this, [topicName].concat(data));
}
