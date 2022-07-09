import {
  TEventPayloadBaseGeneric,
  TEventJourneyActionStartedOrCompletedGeneric,
  TEventJourneyActionStartedGeneric,
  TEventJourneyActionCompletedGeneric,
  TEventErrorOccurredGeneric,
  TEventName,
} from "./types";

type TJourneyNamesConfigVague = { [key: string]: string };
type TPageNamesConfigVague = { [key: string]: string };

export const useAnalytics = <T1 extends TJourneyNamesConfigVague, T2 extends TPageNamesConfigVague>(
  journeyNamesConfig: T1,
  pageNamesConfig: T2
) => {
  type TJourneyNamesConfig = typeof journeyNamesConfig;
  type TPageNamesConfig = typeof pageNamesConfig;

  type TFriendlyJourneyName = keyof TJourneyNamesConfig;
  type TFriendlyPageName = keyof TPageNamesConfig;
  type TJourneyName = TJourneyNamesConfig[TFriendlyJourneyName];
  type TPageName = TPageNamesConfig[TFriendlyPageName];

  type TEventPayloadBase = TEventPayloadBaseGeneric<TPageName>;
  type TEventViewPage = TEventPayloadBase;
  type TEventJourneyActionStartedOrCompleted = TEventJourneyActionStartedOrCompletedGeneric<TPageName, TJourneyName>;

  type TEventJourneyActionStarted = TEventJourneyActionStartedGeneric<TPageName, TJourneyName>;
  type TEventJourneyActionCompleted = TEventJourneyActionCompletedGeneric<TPageName, TJourneyName>;

  type TEventErrorOccurred = TEventErrorOccurredGeneric<TPageName>;

  function sendEvent(eventName: "journeyActionCompleted", payload: TEventJourneyActionStartedOrCompleted): void;
  function sendEvent(eventName: "errorOccurred", payload: TEventErrorOccurred): void;
  function sendEvent(eventName: "viewPage", payload: TEventViewPage): void;
  function sendEvent(eventName: TEventName, payload: any) {
    console.log(eventName);
    console.log(payload);
  }

  const send = () => ({
    journeyActionStartedEvent: () => ({
      payload: (payload: TEventJourneyActionStarted) => sendEvent("journeyActionCompleted", payload),
      flat: () => {},
    }),
    journeyActionCompletedEvent: () => ({
      payload: (payload: TEventJourneyActionCompleted) => sendEvent("journeyActionCompleted", payload),
      flat: () => {},
    }),
    viewPageEvent: () => ({
      payload: (payload: TEventViewPage) => sendEvent("viewPage", payload),
      flat: () => {},
    }),
    errorOccurredEvent: () => ({
      payload: (payload: TEventErrorOccurred) => sendEvent("errorOccurred", payload),
      flat: () => {},
    }),
  });
  return { sendEvent, send };
};
