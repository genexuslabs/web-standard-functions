declare let gtag;
export const trackView = (viewName: string) => {
  gtag("event", "page_view", {
    page_title: viewName
  });
};
