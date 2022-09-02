import { GeneXusSDNetwork } from "../network";
import { ConfigurationState } from "../../../config/configurationState";

describe("Network external object", () => {
  it("should return the application's server URL", () => {
    ConfigurationState.loadApplicationSettings({
      SERVICE_URL: "/TestAngular/"
    });
    expect(GeneXusSDNetwork.applicationServerURL()).toBe(
      "http://localhost/TestAngular/"
    );
  });

  it("should be able to call IsServerAvailable without parameters", () => {
    GeneXusSDNetwork.isServerAvailable();
  });

  it("should be able to call IsServerAvailable with one parameter", () => {
    GeneXusSDNetwork.isServerAvailable("");
  });

  it("should be able to call Type without parameters", () => {
    GeneXusSDNetwork.type();
  });

  it("should be able to call Type with one parameter", () => {
    GeneXusSDNetwork.type("");
  });

  it("should be able to call TrafficBasedCost without parameters", () => {
    GeneXusSDNetwork.trafficBasedCost();
  });

  it("should be able to call TrafficBasedCost with one parameter", () => {
    GeneXusSDNetwork.trafficBasedCost("");
  });

  it("should be able to call SetApplicationServerURL", () => {
    GeneXusSDNetwork.setApplicationServerURL("");
  });
});
