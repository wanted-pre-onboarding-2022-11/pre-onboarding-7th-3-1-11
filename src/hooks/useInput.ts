import { useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [isFocus, setIsFocuse] = useState(false);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onFocusInput = () => {
    setIsFocuse(true);
  };

  const onBlurInput = () => {
    setIsFocuse(false);
  };
  const initInput = () => {
    setValue("");
  };

  return {
    inputAttribute: { value, onChangeInput, isFocus, onFocusInput, onBlurInput },
    initInput,
  };
};
