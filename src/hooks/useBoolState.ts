import { useState } from "react";

type UseBoolState = {
  boolValue: boolean;
  setTrue: () => void;
  setFalse: () => void;
};

export const useBoolState = (defaultBoolValue: boolean) => {
  const [boolValue, setBoolValue] = useState(defaultBoolValue);

  const setTrue = () => {
    setBoolValue(true);
  };

  const setFalse = () => {
    setBoolValue(false);
  };

  return [boolValue, setTrue, setFalse] as const;
};
