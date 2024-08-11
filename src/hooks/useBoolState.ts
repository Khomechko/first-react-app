import { useState } from "react";

type UseBoolStateReturn = [boolean, () => void, () => void];

export const useBoolState = (defaultBoolValue: boolean): UseBoolStateReturn => {
  const [boolValue, setBoolValue] = useState(defaultBoolValue);

  const setTrue = () => {
    setBoolValue(true);
  };

  const setFalse = () => {
    setBoolValue(false);
  };

  return [boolValue, setTrue, setFalse];
};
