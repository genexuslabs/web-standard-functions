declare let gtag;
export const trackEvent = (
  category: string,
  action: string,
  label: string,
  value: number
) => {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    event_value: value
  });
};
