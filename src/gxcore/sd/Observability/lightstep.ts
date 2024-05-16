import { registerInstrumentations } from "@opentelemetry/instrumentation";
import {
  WebTracerProvider,
  BatchSpanProcessor
} from "@opentelemetry/sdk-trace-web";
import { getWebAutoInstrumentations } from "@opentelemetry/auto-instrumentations-web";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { Resource } from "@opentelemetry/resources";
import { SEMRESATTRS_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

export const activeLightstep = (
  serviceName: string,
  token: string,
  endpoint: string
) => {
  const provider = new WebTracerProvider({
    resource: new Resource({
      [SEMRESATTRS_SERVICE_NAME]: serviceName
    })
  });

  provider.addSpanProcessor(
    new BatchSpanProcessor(
      new OTLPTraceExporter({
        url: endpoint,
        headers: {
          "lightstep-access-token": token
        }
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
