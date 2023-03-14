declare let gtag;
export const setAnalyticsUserId = (id: string) => {
  gtag("set", "user_id", id);
};
