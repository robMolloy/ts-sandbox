type TConfigVague = { [key: string]: string };

export const useHook = <T1 extends TConfigVague>(config: T1) => {
  type TConfig = typeof config;
  type TFriendlyName = keyof TConfig;
  type TRealName = TConfig[TFriendlyName];

  const logStuff = (friendlyName: TFriendlyName, realName: TRealName) => {
    console.log(config[friendlyName]);
    console.log(realName);
  };

  return { logStuff };
};
