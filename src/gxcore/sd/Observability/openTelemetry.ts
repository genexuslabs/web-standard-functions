import { registerInstrumentations } from "@opentelemetry/instrumentation";
import {
  WebTracerProvider,
  BatchSpanProcessor
} from "@opentelemetry/sdk-trace-web";
import { getWebAutoInstrumentations } from "@opentelemetry/auto-instrumentations-web";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { Resource } from "@opentelemetry/resources";
import { SEMRESATTRS_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

export const activeOpenTelemetry = (
  serviceName: string,
  token: string,
  endpoint: string
) => {
  const provider = new WebTracerProvider({
    resource: new Resource({
      [SEMRESATTRS_SERVICE_NAME]: serviceName
    })
  });

  let headers = {};
  if (endpoint.toLowerCase().includes("lightstep")) {
    headers = {
      "lightstep-access-token": token
    };
  } else if (endpoint.toLowerCase().includes("signoz")) {
    headers = {
      "signoz-access-token": token
    };
  } else {
    headers = {
      "access-token": token
    };
  }

  provider.addSpanProcessor(
    new BatchSpanProcessor(
      new OTLPTraceExporter({
        url: endpoint,
        headers: headers
      })
    )
  );

  provider.register();

  registerInstrumentations({
    instrumentations: [
      getWebAutoInstrumentations({
        "@opentelemetry/instrumentation-document-load": {},
        "@opentelemetry/instrumentation-user-interaction": {},
        "@opentelemetry/instrumentation-fetch": {},
        "@opentelemetry/instrumentation-xml-http-request": {}
      })
    ]
  });
};
