import React, { ChangeEvent, useContext, useMemo, useState } from "react";

interface KeywordContextState {
  keyword: string;
  handleChangeKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
}

const initialKeywordContextState: KeywordContextState = {
  keyword: "",
  // eslint-disable-next-line
  handleChangeKeyword(e) {
    return;
  },
};

const KeywordContext = React.createContext(initialKeywordContextState);

export const useKeyword = () => useContext(KeywordContext);

const KeywordContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [keyword, setKeyword] = useState("");

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const contextValue = useMemo(
    () => ({
      keyword,
      handleChangeKeyword,
    }),
    [keyword, handleChangeKeyword],
  );

  return <KeywordContext.Provider value={contextValue}>{children}</KeywordContext.Provider>;
};

export default KeywordContextProvider;
