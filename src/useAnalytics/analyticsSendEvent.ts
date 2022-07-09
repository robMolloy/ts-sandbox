import { useAnalytics, journeyNamesConfig, pageNamesConfig } from ".";

const { sendEvent } = useAnalytics(journeyNamesConfig, pageNamesConfig);

sendEvent("journeyActionCompleted", {
  adobe: { pageName: "cancellation-form" },
  journey: {
    name: "C:SA:cancel",
    serviceName: "C:SA:cancel",
    action: "started",
  },
});

sendEvent("journeyActionCompleted", {
  adobe: { pageName: "cancellation-form" },
  journey: {
    name: "C:SA:cancel",
    serviceName: "C:SA:cancel",
    action: "completed",
  },
});

sendEvent("viewPage", { adobe: { pageName: "cancellation-form" } });
// sendEvent("errorOccurred", {adobe:{pageName:}})
