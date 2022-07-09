import { useAnalytics, journeyNamesConfig, pageNamesConfig } from ".";

const { send } = useAnalytics(journeyNamesConfig, pageNamesConfig);

send()
  .viewPageEvent()
  .payload({ adobe: { pageName: "cancellation-form" } });

send()
  .journeyActionCompletedEvent()
  .payload({
    adobe: { pageName: "cancellation-form" },
    journey: {
      name: "C:SA:cancel",
      serviceName: "C:SA:cancel",
      action: "completed",
    },
  });

send()
  .journeyActionStartedEvent()
  .payload({
    adobe: { pageName: "cancellation-form" },
    journey: {
      name: "C:SA:cancel",
      serviceName: "C:SA:cancel",
      action: "started",
    },
  });

send()
  .viewPageEvent()
  .payload({ adobe: { pageName: "cancellation-form" } });

send()
  .errorOccurredEvent()
  .payload({
    adobe: {
      pageName: "feedback-form",
    },
    error: {
      code: "",
      label: "",
      name: "",
      type: "input",
      is_nce: false,
    },
  });
