import React, { ChangeEvent, useContext, useMemo, useState } from "react";

interface KeywordContextState {
  keyword: string;
  handleChangeKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectKeyword: (keyword: string) => void;
}

const initialKeywordContextState: KeywordContextState = {
  keyword: "",
  handleChangeKeyword(e) {
    return;
  },
  handleSelectKeyword(keyword) {
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

  const handleSelectKeyword = (keyword: string) => {
    setKeyword(keyword);
  };

  const contextValue = useMemo(
    () => ({
      keyword,
      handleChangeKeyword,
      handleSelectKeyword,
    }),
    [keyword],
  );

  return <KeywordContext.Provider value={contextValue}>{children}</KeywordContext.Provider>;
};

export default KeywordContextProvider;
