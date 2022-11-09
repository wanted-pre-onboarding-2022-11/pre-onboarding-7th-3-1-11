import React, { useRef, useState } from "react";
import styled from "styled-components";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchAreaRef = useRef<HTMLInputElement[] | null[]>([]);
  const [searchIndex, setSearchIndex] = useState(0);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleFocus = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "ArrowDown") {
      console.log(searchIndex, "searchIndex");
      setSearchIndex((prev) => prev + 1);
      searchAreaRef.current[searchIndex]?.focus();
      if (searchIndex === 2) {
        setSearchIndex(0);
      }
    } else if (e.code === "ArrowUp") {
      setSearchIndex((prev) => prev - 1);
      searchAreaRef.current[searchIndex]?.focus();
      if (searchIndex === 0) {
        setSearchIndex(2);
      }
    }
  };
  return (
    <>
      <label>
        <SearchBox>
          <SearcInput onKeyDown={handleFocus}>
            <input ref={(elem) => (searchAreaRef.current[0] = elem)} onChange={handleSearch} />
            <input ref={(elem) => (searchAreaRef.current[1] = elem)} value={searchValue} readOnly />
            <input ref={(elem) => (searchAreaRef.current[2] = elem)} value={searchValue} readOnly />
          </SearcInput>
          <button type="submit">제출</button>
        </SearchBox>
      </label>
    </>
  );
};

export default SearchPage;

const SearcInput = styled.div`
  display: flex;
  flex-direction: column;
  > input {
    width: 300px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  > button {
    height: 25px;
  }
`;
