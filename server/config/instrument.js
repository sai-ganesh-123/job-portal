import * as Sentry from "@sentry/node";
import  { nodeProfilingIntegration } from "@sentry/profiling-node";

// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: "https://a4bbf189ba8383d9c241d3023ac841a6@o4509582555676672.ingest.us.sentry.io/4509582562230272",
   integrations: [
    nodeProfilingIntegration(),
    Sentry.mongoIntegration()
  ],

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
