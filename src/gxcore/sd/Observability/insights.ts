import { ApplicationInsights } from "@microsoft/applicationinsights-web";

export const activeInsights = (token: string) => {
  const appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: token,
      enableAutoRouteTracking: true
    }
  });

  appInsights.loadAppInsights();
  appInsights.trackPageView();
};
