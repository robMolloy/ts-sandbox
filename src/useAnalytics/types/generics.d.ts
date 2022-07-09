export type TEventPayloadBaseGeneric<TPageNameGen extends string> = { adobe: { pageName: TPageNameGen } };

export type TEventJourneyActionStartedOrCompletedGeneric<
  TPageNameGen extends string,
  TJourneyNameGen extends string,
  TJourneyActionGen extends string = "started" | "completed"
> = TEventPayloadBaseGeneric<TPageNameGen> & {
  journey: {
    name: TJourneyNameGen;
    serviceName: TJourneyNameGen;
    action: TJourneyActionGen;
    attributes?: { [key: string]: any };
  };
};

export type TEventJourneyActionStartedGeneric<
  TPageNameGen extends string,
  TJourneyNameGen extends string,
  TJourneyActionGen extends string = "started"
> = TEventJourneyActionStartedOrCompletedGeneric<TPageNameGen, TJourneyNameGen, TJourneyActionGen>;

export type TEventJourneyActionCompletedGeneric<
  TPageNameGen extends string,
  TJourneyNameGen extends string,
  TJourneyActionGen extends string = "completed"
> = TEventJourneyActionStartedOrCompletedGeneric<TPageNameGen, TJourneyNameGen, TJourneyActionGen>;

export type TEventErrorOccurredGeneric<TPageNameGen extends string> = TEventPayloadBaseGeneric<TPageNameGen> & {
  error: {
    /**
     * Any code number relating to the error
     */
    code: string;

    /**
     * Descriptive error text, as shown to the customer
     */
    label: string;

    /**
     * A name for the error, like a constant variable
     */
    name: string;

    /**
     * Type of error.  See documentation for more information
     */
    type: "input" | "validation" | "system" | "unknown";

    /**
     * Is it a non-continuable error; whether the error stop the customer continuing
     */
    is_nce: boolean;
  };
};
