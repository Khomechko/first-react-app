import { useState } from "react";

export const useBoolState = (defaultBoolValue) => {
  const [boolValue, setBoolValue] = useState(defaultBoolValue);

  const setTrue = () => {
    setBoolValue(true);
  };

  const setFalse = () => {
    setBoolValue(false);
  };

  return [boolValue, setTrue, setFalse];
};
